<?php

namespace HelpGent\App\MediaDriverMigration;

use Exception;
use HelpGent\App\Contracts\MediaDriverMigrator;
use HelpGent\App\DTO\AttachmentDTO;
use HelpGent\App\DTO\AttachmentTransferQueueDTO;
use HelpGent\App\EnumeratedList\AttachmentTransferQueueStatus;
use HelpGent\App\EnumeratedList\AttachmentTransferQueueType;
use HelpGent\App\EnumeratedList\MediaDriveMigrationRoute as MigrationRoute;
use HelpGent\App\MediaDrivers\Local as LocalDrive;
use HelpGent\App\Repositories\AttachmentRepository;
use HelpGent\App\Repositories\AttachmentTransferQueueRepository;

abstract class MigratorHelper implements MediaDriverMigrator {
    protected string $drive_key = '';

    protected string $drive_label = '';

    public function add_to_transfer_queue( string $type, string $route, AttachmentDTO $attachment, $transfer_next = null ): AttachmentTransferQueueDTO {
        if ( MigrationRoute::TO_LOCAL === $route && $this->drive_key !== $attachment->get_storage() ) {
            throw new Exception( sprintf( __( 'The attachment must be in the %s.', 'helpgent' ), [ $this->drive_label ] ), 500 );
        } else if ( MigrationRoute::FROM_LOCAL === $route && LocalDrive::get_key() !== $attachment->get_storage() ) {
            throw new Exception( __( 'The attachment must be in the local drive.', 'helpgent' ), 500 );
        }

        $transfer_from = $attachment->get_storage();
        $transfer_to   = MigrationRoute::TO_LOCAL === $route ? LocalDrive::get_key() : $this->drive_key;

        $attachment_transfer_queue_repository = $this->get_attachment_transfer_queue_repository();

        $old_queue = $attachment_transfer_queue_repository->get_by_attachment_id( $attachment->get_id() );

        if ( ! empty( $old_queue ) ) {
            throw new Exception( __( 'The attachment is transferring. Please wait until the transfer process is finished.', 'helpgent' ), 500 );
        }

        $attachment_transfer_queue = new AttachmentTransferQueueDTO( $type, $attachment->get_id(), $transfer_from, $transfer_to, $transfer_next );

        $attachment_transfer_queue->set_upload_token( $attachment->get_upload_token() );

        $id = $attachment_transfer_queue_repository->create( $attachment_transfer_queue );

        $attachment_transfer_queue->set_id( $id );

        return $attachment_transfer_queue;
    }

    /**
     * @throws Exception
     */
    public function queue_transfer_to_local( AttachmentTransferQueueDTO $attachment_transfer_queue ): void {
        $attachment = $this->extract_attachment_from_queue( $attachment_transfer_queue );

        // Tasks To Do Before Transferring From Queue
        $this->before_transferring_from_queue( $attachment_transfer_queue );

        try {
            // Transfer To Local
            $this->transfer_to_local( $attachment );

            // Tasks To Do After Complete A Transfer From Queue
            $this->after_complete_transfer_from_queue( $attachment_transfer_queue );
        } catch ( Exception $e ) {
            // Tasks To Do After Occurring Error While Transferring From Queue
            $this->after_error_transferring_from_queue( $attachment_transfer_queue, $e );
        }
    }

    /**
     * @throws Exception
     */
    public function queue_transfer_from_local( AttachmentTransferQueueDTO $attachment_transfer_queue ): void {
        $attachment = $this->extract_attachment_from_queue( $attachment_transfer_queue );

        // Tasks To Do Before Transferring From Queue
        $this->before_transferring_from_queue( $attachment_transfer_queue );

        try {
            // Transfer From Local
            $this->transfer_from_local( $attachment );

            // Tasks To Do After Complete A Transfer From Queue
            $this->after_complete_transfer_from_queue( $attachment_transfer_queue );
        } catch ( Exception $e ) {
            // Tasks To Do After Occurring Error While Transferring From Queue
            $this->after_error_transferring_from_queue( $attachment_transfer_queue, $e );
        }
    }

    /**
     * @throws Exception
     */
    protected function before_transferring_from_queue( AttachmentTransferQueueDTO $attachment_transfer_queue ) {
        if ( AttachmentTransferQueueStatus::TRANSFERRING === $attachment_transfer_queue->get_status() ) {
            return;
        }

        $attachment_transfer_queue_repository = $this->get_attachment_transfer_queue_repository();
        $attachment_transfer_queue->set_status( AttachmentTransferQueueStatus::TRANSFERRING );
        $attachment_transfer_queue_repository->update( $attachment_transfer_queue );
    }

    /**
     * @throws Exception
     */
    protected function after_complete_transfer_from_queue( AttachmentTransferQueueDTO $attachment_transfer_queue ) {
        $attachment_transfer_queue_repository = $this->get_attachment_transfer_queue_repository();

        // If Has Transfer Next
        if ( $attachment_transfer_queue->get_transfer_next() ) {
            $attachment_transfer_queue->set_transfer_to( $attachment_transfer_queue->get_transfer_next() );
            $attachment_transfer_queue->set_transfer_next( null );
            $attachment_transfer_queue_repository->update( $attachment_transfer_queue );
            return;
        }

        if ( AttachmentTransferQueueType::MIGRATION === $attachment_transfer_queue->get_type() ) {
            $attachment_transfer_queue->set_status( AttachmentTransferQueueStatus::DONE );
            $attachment_transfer_queue_repository->update( $attachment_transfer_queue );
        } else {
            $attachment_transfer_queue_repository->delete( $attachment_transfer_queue->get_id() );
        }
    }

    /**
     * @throws Exception
     */
    protected function after_error_transferring_from_queue( AttachmentTransferQueueDTO $attachment_transfer_queue, Exception $exception ) {
        $attachment_transfer_queue_repository = $this->get_attachment_transfer_queue_repository();

        // Update Queue
        $attachment_transfer_queue->set_status( AttachmentTransferQueueStatus::FAILED );
        $attachment_transfer_queue->set_message( $exception->getMessage() );
        $attachment_transfer_queue_repository->update( $attachment_transfer_queue );
    }

    /**
     * @throws Exception
     */
    protected function extract_attachment_from_queue( AttachmentTransferQueueDTO $attachment_transfer_queue ) : AttachmentDTO {
        $attachment_repository                = $this->get_attachment_repository();
        $attachment_transfer_queue_repository = $this->get_attachment_transfer_queue_repository();

        $attachment_data = $attachment_repository->get_by_id( $attachment_transfer_queue->get_attachment_id() );

        if ( empty( $attachment_data ) ) {
            // Remove From The Queue 
            $attachment_transfer_queue_repository->delete( $attachment_transfer_queue->get_id() );
            throw new Exception( 'The attachment not found', 500 );
        }

        // Prepare The Attachment DTO
        $attachment = new AttachmentDTO(
            $attachment_data->title,
            $attachment_data->mime_type,
            $attachment_data->file_size,
            $attachment_data->storage
        );

        $attachment->set_id( $attachment_data->id );
        $attachment->set_file_id( $attachment_data->file_id );
        $attachment->set_upload_token( $attachment_data->upload_token );

        return $attachment;
    }

    protected function get_attachment_repository(): AttachmentRepository {
        return helpgent_singleton( AttachmentRepository::class );
    }

    protected function get_attachment_transfer_queue_repository(): AttachmentTransferQueueRepository {
        return helpgent_singleton( AttachmentTransferQueueRepository::class );
    }

    protected function get_local_drive_instance(): LocalDrive {
        return helpgent_singleton( LocalDrive::class );
    }
}