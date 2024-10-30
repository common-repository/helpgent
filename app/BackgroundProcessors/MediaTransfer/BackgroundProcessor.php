<?php

namespace HelpGent\App\BackgroundProcessors\MediaTransfer;

use Exception;

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
    }

    /**
     * @throws Exception Could not run the background processor
     */
    public function run() {
        if ( is_null( $this->background_process ) ) {
            throw new Exception( 'The background media transfer process was not initialized', 422 );
        }

        if ( self::is_running() ) {
            throw new Exception( 'The migration is already running', 422 );
        }

        $this->background_process::before_start();
        $this->background_process->push_to_queue( [ 'callback' => [ $this, 'transfer_media' ] ] );

        $this->background_process->save()->dispatch();
    }

    public function transfer_media() {
        $queue_type = AttachmentTransferQueueType::UPLOAD;

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
            ->where( 'queue.type', $queue_type )
            ->where_in( 'queue.status', [ 'transferring', 'in_queue' ] )
            ->order_by_raw( 'CASE WHEN queue.status = "transferring" THEN 1 WHEN queue.status = "in_queue" THEN 2 END ASC' )
            ->first();

        if ( empty( $attachment_data ) ) {
            return false;
        }

        /**
         * @var Migrator $migrator
         */
        $migrator = helpgent_singleton( Migrator::class );

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

    public static function is_running(): bool {
        return in_array(
            BackgroundProcess::get_status(), [
                BackgroundProcessStatus::INITIALIZED, 
                BackgroundProcessStatus::RUNNING,
            ] 
        );
    }

    public static function get_status(): string {
        return BackgroundProcess::get_status();
    }
}