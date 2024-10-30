<?php

namespace HelpGent\App\BackgroundProcessors\MediaCleanUp;

use Exception;

use HelpGent\App\EnumeratedList\AttachmentTransferQueueType;
use HelpGent\App\Models\AttachmentTransferQueue as AttachmentTransferQueueModel;
use HelpGent\App\Models\AttachmentUploadSession as AttachmentUploadSessionModel;
use HelpGent\App\EnumeratedList\BackgroundProcessStatus;
use HelpGent\App\Repositories\AttachmentTransferQueueRepository;
use HelpGent\App\Repositories\AttachmentUploadSessionRepository;

class BackgroundProcessor {
    public ?BackgroundProcess $background_process;

    public function init_background_processor() {
        $this->background_process = new BackgroundProcess();
    }

    /**
     * @throws Exception Could not run the background processor
     */
    public function run() {
        if ( is_null( $this->background_process ) ) {
            throw new Exception( 'The background media transfer process was not initialized', 422 );
        }

        if ( self::is_running() ) {
            throw new Exception( 'The media clean up process is already running', 422 );
        }

        $this->background_process::before_start();
        $this->background_process->push_to_queue( [ 'callback' => [ $this, 'clean_up_cancelled_migration_files' ] ] );

        $this->background_process->save()->dispatch();
    }

    public function clean_up_cancelled_migration_files() {
        /**
         * @var AttachmentTransferQueueRepository $transfer_queue_repository
         */
        $transfer_queue_repository = helpgent_singleton( AttachmentTransferQueueRepository::class );

        // Queues
        $queues = AttachmentTransferQueueModel::query( 'queue' )
            ->select( 
                [ 
                    'queue.id as queue_id', 
                    'session.id as session_id', 
                    'session.title', 
                    'session.last_sent_bytes',
                ] 
            )
            ->join( AttachmentUploadSessionModel::get_table_name() . " as session", 'session.id', 'queue.upload_id' )
            ->where( 'queue.type', AttachmentTransferQueueType::CANCELLED )
            ->pagination( 10, 1 );
        
        if ( empty( $queues ) ) {
            return false;
        }

        /**
         * @var AttachmentUploadSessionRepository $upload_session_repository
         */
        $upload_session_repository = helpgent_singleton( AttachmentUploadSessionRepository::class );

        foreach ( $queues as $queue_data ) {
            try {
                if ( absint( $queue_data->last_sent_bytes ) > 1 ) {
                    $title    = preg_replace( '/\..+$/',  '', $queue_data->title );
                    $file_src = helpgent_upload_dir( $title );

                    if ( file_exists( $file_src ) ) {
                        wp_delete_file( $file_src );
                    }
                }

                $upload_session_repository->delete( $queue_data->session_id );
                $transfer_queue_repository->delete( $queue_data->queue_id );
            } catch ( Exception $e ) {

            }
        }

        return true;
    }

    public static function is_running(): bool {
        return in_array(
            BackgroundProcess::get_status(), [
                BackgroundProcessStatus::INITIALIZED, 
                BackgroundProcessStatus::RUNNING,
            ] 
        );
    }
}