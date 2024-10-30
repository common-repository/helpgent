<?php

namespace HelpGent\App\Http\Controllers;

use Exception;
use HelpGent\App\EnumeratedList\AttachmentTransferQueueStatus;
use HelpGent\App\EnumeratedList\AttachmentTransferQueueType;
use HelpGent\App\EnumeratedList\BackgroundProcessStatus;
use WP_REST_Request;
use HelpGent\WpMVC\Routing\Response;
use HelpGent\WpMVC\RequestValidator\Validator;
use HelpGent\App\Http\Controllers\Controller;
use HelpGent\App\MediaDriverMigration\Migrator;
use HelpGent\App\Repositories\AttachmentTransferQueueRepository;
use HelpGent\App\MediaDrivers\Local as LocalDrive;

use HelpGent\App\Models\Attachment as AttachmentModel;
use HelpGent\App\Models\AttachmentUploadSession as AttachmentUploadSessionModel;
use HelpGent\App\Models\AttachmentTransferQueue as AttachmentTransferQueueModel;

use HelpGent\App\BackgroundProcessors\MediaMigration\BackgroundProcessor as MediaMigrationBackgroundProcessor;
use HelpGent\App\BackgroundProcessors\MediaTransfer\BackgroundProcessor as MediaTransferBackgroundProcessor;
use HelpGent\App\BackgroundProcessors\MediaCleanUp\BackgroundProcessor as MediaCleanUpBackgroundProcessor;

class AttachmentMigrationController extends Controller {
    public AttachmentTransferQueueRepository $transfer_queue_repository;

    public string $attachment_driver;

    public ?MediaMigrationBackgroundProcessor $media_migration_processor;

    public ?MediaTransferBackgroundProcessor $media_transfer_processor;

    public function __construct( AttachmentTransferQueueRepository $transfer_queue_repository ) {
        /**
         * @var MediaMigrationBackgroundProcessor $helpgent_media_migration_processor
         */
        global $helpgent_media_migration_processor;

        /**
         * @var MediaTransferBackgroundProcessor $helpgent_media_transfer_processor
         */
        global $helpgent_media_transfer_processor;

        if ( $helpgent_media_migration_processor instanceof MediaMigrationBackgroundProcessor ) {
            $this->media_migration_processor = $helpgent_media_migration_processor;
        }

        if ( $helpgent_media_transfer_processor instanceof MediaTransferBackgroundProcessor ) {
            $this->media_transfer_processor = $helpgent_media_transfer_processor;
        }

        $this->transfer_queue_repository = $transfer_queue_repository;
        $this->attachment_driver         = get_option( 'helpgent_active_media_driver', LocalDrive::get_key() );
    }

    public function index( Validator $validator, WP_REST_Request $wp_rest_request ) {
        $validator->validate( 
            [ 
                'page'         => 'numeric',
                'per_page'     => 'numeric',
                'queue_type'   => 'accepted:upload,migration',
                'status'       => 'accepted:in_queue,transferring,failed,done',
                'with_summary' => 'accepted:1,0',
            ] 
        );

        if ( $validator->is_fail() ) {
            return Response::send( [ 'messages' => $validator->errors ], 422 );
        }

        $page     = $wp_rest_request->get_param( 'page' );
        $page     = empty( $page ) ? 1 : intval( $page );
        $per_page = $wp_rest_request->get_param( 'per_page' );
        $per_page = empty( $per_page ) ? 10 : intval( $per_page );

        $migration_route = MediaMigrationBackgroundProcessor::get_route();
        $migration_from  = ! empty( $migration_route ) ? $migration_route['from'] : '';

        $queue_type   = $wp_rest_request->get_param( 'queue_type' );
        $status       = $wp_rest_request->get_param( 'status' );
        $with_summary = ! empty( $wp_rest_request->get_param( 'with_summary' ) );

        $queue_table   = AttachmentTransferQueueModel::get_table_name();
        $session_table = AttachmentUploadSessionModel::get_table_name();

        $queue_type_migration = AttachmentTransferQueueType::MIGRATION;
        $queue_type_upload    = AttachmentTransferQueueType::UPLOAD;

        $base_query = AttachmentModel::query( 'attachment' )
            ->select(
                [  
                    'attachment.id as attachment_id',
                    'queue.id as queue_id',
                    'queue.type',
                    'queue.transfer_from',
                    'queue.transfer_to',
                    'queue.transfer_next',
                    'queue.upload_id',
                    'queue.upload_token',
                    'queue.status',
                    'queue.created_at as queue_created_at',
                    'attachment.title', 
                    'attachment.mime_type',
                    'attachment.file_size',
                    'attachment.storage',
                    'session.last_sent_bytes',
                ] 
            )
            ->left_join( "{$queue_table} as queue", 'queue.attachment_id', 'attachment.id' )
            ->left_join( "{$session_table} as session", 'session.id', 'queue.upload_id' )
            ->order_by_raw( 'CASE WHEN queue.status = "transferring" THEN 1 WHEN queue.status = "in_queue" THEN 2 WHEN queue.status = "failed" THEN 3 WHEN queue.status = "done" THEN 4 WHEN queue.status IS null THEN 5 END ASC' );

        $queue_type_migration_sql = ! empty( $migration_from ) ? " OR ( attachment.storage = '{$migration_from}' AND queue.type IS null )" : '';
        
        if ( ! empty( $queue_type ) ) {
            if ( $queue_type_migration === $queue_type ) {
                $base_query->where_raw( "( queue.type = '{$queue_type}' {$queue_type_migration_sql} )" );
            } else {
                $base_query->where( 'queue.type', $queue_type );
            }
        } else {
            $base_query->where_raw( "( queue.type IN ( '{$queue_type_migration}', '{$queue_type_upload}' ) {$queue_type_migration_sql} )" );
        }
        
        if ( ! empty( $status ) ) {
            $sql = "queue.status = '{$status}'";

            if ( ( empty( $queue_type ) || $queue_type_migration === $queue_type ) && 
                AttachmentTransferQueueStatus::IN_QUEUE === $status 
            ) {
                $sql = "( queue.status = '{$status}' OR queue.status IS null )";
            }

            $base_query->where_raw( $sql );
        }

        $count_query = clone $base_query;
        $count       = $count_query->count();
        $results     = $base_query->pagination( $per_page, $page, 100, $per_page );

        $data = [
            'total_items' => $count,
            'data'        => $results,
        ];

        if ( $with_summary ) {
            $data['summary'] = $this->get_migration_status( $wp_rest_request->get_param( 'queue_type' ) );
        }

        return Response::send( $data );
    }

    public function delete( Validator $validator, WP_REST_Request $wp_rest_request ) {
        $validator->validate( [ 'id' => 'required|numeric' ] );

        if ( $validator->is_fail() ) {
            return Response::send( [ 'messages' => $validator->errors ], 422 );
        }

        try {
            $queue_id   = $wp_rest_request->get_param( 'id' );
            $queue_data = $this->transfer_queue_repository->get_by_id( $queue_id );

            if ( ! $queue_data ) {
                return Response::send( [ 'message' => esc_html__( 'Item not found.', 'helpgent' ) ], 404 );
            }

            $delete = $this->transfer_queue_repository->delete( $queue_id );

            if ( 0 === $delete ) {
                return Response::send( [ 'message' => esc_html__( 'Oops, something went wrong. Please try again.', 'helpgent' ) ], 500 );
            }

            return Response::send( [ 'message' => esc_html__( 'The attachment has been deleted successfully.', 'helpgent' ) ] );
        } catch ( Exception $exception ) {
            return Response::send( [ 'message' => $exception->getMessage() ],  $exception->getCode() );
        }
    }

    public function start_migration( Validator $validator, WP_REST_Request $wp_rest_request ) {
        $validator->validate( 
            [ 
                'migrate_from' => 'required|string',
                'migrate_to'   => 'required|string'
            ] 
        );

        if ( $validator->is_fail() ) {
            return Response::send( [ 'messages' => $validator->errors ], 422 );
        }

        /**
         * @var MediaMigrationBackgroundProcessor $helpgent_media_migration_processor
         */
        global $helpgent_media_migration_processor;

        // Run The Migration
        try {
            if ( $helpgent_media_migration_processor::can_reset() ) {
                $helpgent_media_migration_processor::reset( true );
                $this->clear_migration_queue_items();
            }

            $this->run_migration_process( 
                $wp_rest_request->get_param( 'migrate_from' ),  
                $wp_rest_request->get_param( 'migrate_to' )
            );
        } catch ( Exception $e ) {
            return Response::send( [ 'message' => $e->getMessage() ], $e->getCode() );
        }

        return Response::send( [ 'message' => esc_html__( 'The migration has started successfully.', 'helpgent' ) ] );
    }

    /**
     * @throws Exception
     */
    function run_migration_process( $from, $to ) {
        if ( ! $this->media_migration_processor ) {
            throw new Exception( __( 'The background media migration processor was not initialized.', 'helpgent' ), 422 );
        }

        // Run The Migration
        $this->media_migration_processor->run( $from, $to );
    }

    /**
     * @throws Exception
     */
    function run_transfer_process() {
        if ( ! $this->media_transfer_processor ) {
            throw new Exception( __( 'The background media migration processor was not initialized.', 'helpgent' ), 422 );
        }

        // Run The Migration
        $this->media_transfer_processor->run();
    }

    public function retry_queue_item( Validator $validator, WP_REST_Request $wp_rest_request ) {
        $validator->validate( [ 'id' => 'required|numeric' ] );

        if ( $validator->is_fail() ) {
            return Response::send( [ 'messages' => $validator->errors ], 422 );
        }

        $migrator = $this->get_migrator();

        try {
            $migrator->move_to_queue( ( int ) $wp_rest_request->get_param( 'id' ) );
            $this->maybe_run_migration_process();

            return Response::send( [ 'success' => true ] );
        } catch ( Exception $e ) {
            return Response::send( [ 'message' => $e->getMessage() ], $e->getCode() );
        }
    }

    public function retry_queue_items( Validator $validator, WP_REST_Request $wp_rest_request ) {
        $validator->validate( [ 'queue_type' => 'accepted:upload,migration' ] );

        $queue_type = $wp_rest_request->get_param( 'queue_type' );

        try {
            $this->transfer_queue_repository->move_failed_items_to_queue( $queue_type );

            if ( ( ! $queue_type || $queue_type === 'migration' ) ) {
                $this->maybe_run_migration_process();
            }

            if ( ( ! $queue_type || $queue_type === 'upload' ) ) {
                $this->maybe_run_transfer_process();
            }

            return Response::send( [ 'success' => true ] );
            
        } catch ( Exception $e ) {
            return Response::send( [ 'message' => $e->getMessage() ], $e->getCode() );
        }
    }

    function maybe_run_migration_process() {
        if ( MediaMigrationBackgroundProcessor::is_running() ) {
            return;
        }

        $route = MediaMigrationBackgroundProcessor::get_route();

        if ( empty( $route ) ) {
            return Response::send( [ 'message' => __( 'No active migration is found, please run the migration again.', 'helpgent' ) ], 403 );
        }

        // Run The Migration
        try {
            $this->run_migration_process( $route['from'],  $route['to'] );
        } catch ( Exception $e ) {
            
        }
    }

    function maybe_run_transfer_process() {
        if ( MediaTransferBackgroundProcessor::is_running() ) {
            return;
        }

        // Run The Transfer Process
        try {
            $this->run_transfer_process();
        } catch ( Exception $e ) {
            
        }
    }

    public function migration_status( Validator $validator, WP_REST_Request $wp_rest_request ) {
        $validator->validate( [ 'queue_type' => 'accepted:upload,migration' ] );

        if ( $validator->is_fail() ) {
            return Response::send( [ 'messages' => $validator->errors ], 422 );
        }

        return Response::send(
            $this->get_migration_status( $wp_rest_request->get_param( 'queue_type' ) )
        );
    }

    public function get_migration_status( ?string $queue_type = '' ) {
        $status = [
            'migration_route'        => MediaMigrationBackgroundProcessor::get_route(),
            'migration_status'       => MediaMigrationBackgroundProcessor::get_status(),
            'transfer_status'        => MediaTransferBackgroundProcessor::get_status(),
            'is_canceling_migration' => MediaMigrationBackgroundProcessor::is_canceling(),
        ];

        $counts = $this->get_attachment_queue_counts( $queue_type );
        $status = array_merge( $status, $counts );

        if ( BackgroundProcessStatus::DONE === $status['migration_status'] && $status['remaining_migration_files'] > 0 ) {
            $status['migration_status'] = BackgroundProcessStatus::FAILED;
        }

        return $status;
    }

    public function get_attachment_queue_counts( ?string $queue_type = '' ) {
        $transfer_queue_query = AttachmentTransferQueueModel::query();

        $accepted_queue_types = ! empty( $queue_type ) 
            ? [ $queue_type ] 
            : [
                AttachmentTransferQueueType::MIGRATION,
                AttachmentTransferQueueType::UPLOAD,
            ];

        // Transferring attachments count
        $attachments_in_transferring_query = clone $transfer_queue_query;
        $attachments_transferring_count    = $attachments_in_transferring_query
            ->where( 'status', 'transferring' )
            ->where_in( 'type', $accepted_queue_types )
            ->count();

        // In queue attachments count
        $attachments_in_queue_query = clone $transfer_queue_query;
        $attachments_in_queue_count = $attachments_in_queue_query
            ->where( 'status', 'in_queue' )
            ->where_in( 'type', $accepted_queue_types )
            ->count();

        // Failed attachments count
        $attachments_failed_query = clone $transfer_queue_query;
        $attachments_failed_count = $attachments_failed_query
            ->where( 'status', 'failed' )
            ->where_in( 'type', $accepted_queue_types )
            ->count();
        
        // Done attachments count
        $attachments_done_query = clone $transfer_queue_query;
        $attachments_done_count = $attachments_done_query
            ->where( 'status', 'done' )
            ->where_in( 'type', $accepted_queue_types )
            ->count();

        // Remaining migration files count
        $remaining_migration_files = 0;

        if ( BackgroundProcessStatus::IDLE !== MediaMigrationBackgroundProcessor::get_status() ) {
            $route = MediaMigrationBackgroundProcessor::get_route();

            if ( ! empty( $route['from'] ) ) {
                $remaining_migration_files = AttachmentModel::query( 'attachment' )
                    ->select( 'id' )
                    ->where( 'attachment.storage', $route['from'] )
                    ->count();
            }
        }

        if ( AttachmentTransferQueueType::UPLOAD !== $queue_type ) {
            $attachments_in_queue_count = $attachments_in_queue_count + $remaining_migration_files;
        }

        return [
            'total_in_progress'         => $attachments_transferring_count,
            'total_in_queue'            => $attachments_in_queue_count,
            'total_failed'              => $attachments_failed_count,
            'total_done'                => $attachments_done_count,
            'remaining_migration_files' => $remaining_migration_files,
        ];
    }
    
    public function stop_migration( Validator $validator, WP_REST_Request $wp_rest_request ) {
        /**
         * @var MediaMigrationBackgroundProcessor $helpgent_media_migration_processor
         */
        global $helpgent_media_migration_processor;

        $validator->validate( [ 'force_stop' => 'numeric' ] );

        if ( $validator->is_fail() ) {
            return Response::send( [ 'messages' => $validator->errors ], 422 );
        }

        if ( ! ( $helpgent_media_migration_processor instanceof MediaMigrationBackgroundProcessor ) ) {
            return Response::send( [ 'message' => esc_html__( 'Could not stop the migration', 'helpgent' ) ], 422 );
        }

        $force_stop = ! empty( $wp_rest_request->get_param( 'force_stop' ) );

        try {
            $helpgent_media_migration_processor::cancel( $force_stop );
        } catch ( Exception $e ) {
            return Response::send( [ 'message' => $e->getMessage() ], $e->getCode() );
        }

        return Response::send( [ 'message' => esc_html__( 'The migration is about to stop', 'helpgent' ) ] );
    }
    
    public function reset_migration( Validator $validator, WP_REST_Request $wp_rest_request ) {
        /**
         * @var MediaMigrationBackgroundProcessor $helpgent_media_migration_processor
         */
        global $helpgent_media_migration_processor;

        $validator->validate( [ 'force_reset' => 'numeric' ] );

        if ( $validator->is_fail() ) {
            return Response::send( [ 'messages' => $validator->errors ], 422 );
        }

        if ( ! ( $helpgent_media_migration_processor instanceof MediaMigrationBackgroundProcessor ) ) {
            return Response::send( [ 'message' => esc_html__( 'Could not stop the migration', 'helpgent' ) ], 422 );
        }

        $force_reset = ! empty( $wp_rest_request->get_param( 'force_reset' ) );

        try {
            if ( $force_reset || $helpgent_media_migration_processor::can_reset() ) {
                $this->clear_migration_queue_items();
            }

            $helpgent_media_migration_processor::reset( $force_reset );
        } catch ( Exception $e ) {
            return Response::send( [ 'message' => $e->getMessage() ], $e->getCode() );
        }

        return Response::send( [ 'message' => esc_html__( 'The migration has been reset successfully', 'helpgent' ) ] );
    }

    public function clear_migration_queue_items() {
        $this->transfer_queue_repository->delete_queues_has_no_session_or_done(
            [ 
                AttachmentTransferQueueType::MIGRATION,
            ] 
        );
        
        $this->transfer_queue_repository->cancel_queues(
            [
                AttachmentTransferQueueType::MIGRATION
            ] 
        );

        /**
         * @var MediaCleanUpBackgroundProcessor $background_processor
         */
        global $helpgent_media_clean_up_processor;

        if ( ! ( $helpgent_media_clean_up_processor instanceof MediaCleanUpBackgroundProcessor ) ) {
            return;
        }

        if ( $helpgent_media_clean_up_processor::is_running() ) {
            return;
        }

        try {
            $helpgent_media_clean_up_processor->run();

            $expiration = apply_filters( 'helpgent_media_transfer_processor_execution_expiration', MINUTE_IN_SECONDS * 30 );
            set_transient( 'helpgent_executed_media_clean_up_processor', true, $expiration );

        } catch ( Exception $e ) {
        }
    }

    public function get_migrator(): Migrator {
        return helpgent_singleton( Migrator::class );
    }
}