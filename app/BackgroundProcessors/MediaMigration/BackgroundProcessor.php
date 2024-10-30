<?php

namespace HelpGent\App\BackgroundProcessors\MediaMigration;

use Exception;

use HelpGent\App\DTO\AttachmentDTO;
use HelpGent\App\EnumeratedList\AttachmentTransferQueueType;
use HelpGent\App\Models\Attachment as AttachmentModel;
use HelpGent\App\Models\AttachmentTransferQueue as AttachmentTransferQueueModel;
use HelpGent\App\DTO\AttachmentTransferQueueDTO;
use HelpGent\App\MediaDriverMigration\Migrator;
use HelpGent\App\EnumeratedList\BackgroundProcessStatus;

class BackgroundProcessor {
    public ?BackgroundProcess $background_process;

    public function init_background_processor() {
        $this->background_process = new BackgroundProcess();
        $this->background_process->set_after_stop_callback( [ $this, 'after_stop_migration' ] );
    }

    /**
     * @throws Exception Could not run the background processor
     */
    public function run( string $from, string $to ) {
        if ( is_null( $this->background_process ) ) {
            throw new Exception( 'The background media transfer process was not initialized', 422 );
        }

        if ( self::is_running() ) {
            throw new Exception( 'The migration is already running', 422 );
        }

        $this->background_process::before_start( $from, $to );
        $this->background_process->push_to_queue(
            [
                'callback' => [ $this, 'migrate_media' ],
                'args'     => [ $from, $to ],
            ] 
        );

        $this->background_process->save()->dispatch();
    }

    public function migrate_media( string $from, string $to ) {
        $queue_type = AttachmentTransferQueueType::MIGRATION;

        // Attachment
        $attachment_data = AttachmentModel::query( 'attachment' )
            ->select( 
                [ 
                    'attachment.*',
                    'queue.id as queue_id',
                    'queue.type',
                    'queue.transfer_from',
                    'queue.transfer_to',
                    'queue.transfer_next',
                    'queue.upload_id as queue_upload_id',
                    'queue.upload_token as queue_upload_token',
                    'queue.message',
                    'queue.status as queue_status',
                ] 
            )
            ->left_join( AttachmentTransferQueueModel::get_table_name() . " as queue", 'queue.attachment_id', 'attachment.id' )
            ->where( 'attachment.storage', $from )
            ->where_raw( "( queue.type = '{$queue_type}' OR queue.type IS null )" )
            ->where_raw( "( queue.status IN ( 'transferring', 'in_queue' ) OR queue.status IS null )" )
            ->order_by_raw( 'CASE WHEN queue.status = "transferring" THEN 1 WHEN queue.status = "in_queue" THEN 2 WHEN queue.status IS null THEN 3 END ASC' )
            ->first();

        if ( empty( $attachment_data ) ) {
            return false;
        }

        /**
         * @var Migrator $migrator
         */
        $migrator = helpgent_singleton( Migrator::class );

        if ( null === $attachment_data->type ) {
            $attachment = new AttachmentDTO( 
                $attachment_data->title,
                $attachment_data->mime_type,
                $attachment_data->file_size,
                $attachment_data->storage
            );

            $attachment->set_id( $attachment_data->id );
            $attachment->set_file_id( $attachment_data->file_id );
            $attachment->set_upload_token( $attachment_data->upload_token );

            try {
                $queue_item = $migrator->add_to_transfer_queue( $queue_type, $attachment, $to );

                $attachment_data->queue_id           = $queue_item->get_id();
                $attachment_data->type               = $queue_item->get_type();
                $attachment_data->transfer_from      = $queue_item->get_transfer_from();
                $attachment_data->transfer_to        = $queue_item->get_transfer_to();
                $attachment_data->transfer_next      = $queue_item->get_transfer_next();
                $attachment_data->queue_upload_token = $queue_item->get_upload_token();
                $attachment_data->queue_upload_id    = $queue_item->get_upload_id();
                $attachment_data->queue_status       = $queue_item->get_status();
            } catch ( Exception $e ) {
                return true;
            }
        }

        $attachment_transfer_queue = new AttachmentTransferQueueDTO(
            $attachment_data->type,
            $attachment_data->id,
            $attachment_data->transfer_from,
            $attachment_data->transfer_to,
            $attachment_data->transfer_next
        );

        $attachment_transfer_queue->set_id( $attachment_data->queue_id );
        $attachment_transfer_queue->set_upload_id( $attachment_data->queue_upload_id );
        $attachment_transfer_queue->set_upload_token( $attachment_data->queue_upload_token );
        $attachment_transfer_queue->set_status( $attachment_data->queue_status );
        $attachment_transfer_queue->set_message( $attachment_data->message );

        try {
            $migrator->transfer_from_queue( $attachment_transfer_queue );
        } catch ( Exception $e ) {
        }

        return true;
    }

    public function after_stop_migration() {
        // Move transferring items to in queue
        AttachmentTransferQueueModel::query()
            ->where( 'type', AttachmentTransferQueueType::MIGRATION )
            ->where( 'status', 'transferring' )
            ->update( [ 'status' => 'in_queue', ] );
    }

    public static function is_running(): bool {
        return in_array(
            BackgroundProcess::get_status(), [
                BackgroundProcessStatus::INITIALIZED, 
                BackgroundProcessStatus::RUNNING 
            ] 
        );
    }

    public static function get_status(): string {
        return BackgroundProcess::get_status();
    }

    public static function get_route(): ?array {
        return BackgroundProcess::get_route();
    }

    /**
     * @throws Exception
     */
    public static function cancel( bool $force_stop = false ): void {

        if ( ! $force_stop && ! self::is_running() ) {
            throw new Exception( __( 'The migration is not currently running.', 'helpgent' ), 422 );
        }

        BackgroundProcess::cancel_migration();
    }

    public static function is_canceling(): bool {
        return BackgroundProcess::is_canceling_migration();
    }

    public static function can_reset(): bool {
        return ! self::is_running();
    }

    public static function reset( bool $force_reset = false ): void {
        if ( ! $force_reset && ! self::can_reset() ) {
            throw new Exception( __( 'Can\'t reset the running migration.', 'helpgent' ), 422 );
        }

        BackgroundProcess::reset();
    }
}