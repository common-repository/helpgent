<?php

namespace HelpGent\App\MediaDriverMigration;

use Exception;
use HelpGent\App\Contracts\MediaDriverMigrator;
use HelpGent\App\EnumeratedList\MediaDriveMigrationRoute as MigrationRoute;
use HelpGent\App\DTO\AttachmentDTO;
use HelpGent\App\DTO\AttachmentTransferQueueDTO;
use HelpGent\App\EnumeratedList\AttachmentTransferQueueStatus;
use HelpGent\App\Repositories\AttachmentRepository;
use HelpGent\App\Repositories\AttachmentTransferQueueRepository;
use HelpGent\App\Repositories\AttachmentUploadSessionRepository;
use HelpGent\App\MediaDrivers\Local as LocalDrive;

class Migrator {
    /**
     * @throws Exception
     */
    public function add_to_transfer_queue( string $type, AttachmentDTO $attachment, string $to_drive ): AttachmentTransferQueueDTO {
        $from_drive        = $attachment->get_storage();
        $supported_drivers = array_merge( [ LocalDrive::get_key() ], array_keys( helpgent_config( 'media-driver-migrator' ) ) );

        if ( ! in_array( $to_drive, $supported_drivers ) || ! in_array( $from_drive, $supported_drivers ) ) {
            throw new Exception( 'Unsupported media driver', 500 );
        }

        if ( $from_drive === $to_drive ) {
            throw new Exception( 'Cant transfer file within same media driver', 500 );
        }

        // Single Route Migration
        if ( LocalDrive::get_key() === $from_drive || LocalDrive::get_key() === $to_drive ) {
            $migrator = LocalDrive::get_key() === $from_drive ? $to_drive : $from_drive;
            $migrator = $this->get_migrator( $migrator );
            $route    = LocalDrive::get_key() === $to_drive ? MigrationRoute::TO_LOCAL : MigrationRoute::FROM_LOCAL;

            return $migrator->add_to_transfer_queue( $type, $route, $attachment, null );
        }

        // Multi Route Migration
        $migrator = $this->get_migrator( $from_drive );
        return $migrator->add_to_transfer_queue( $type, MigrationRoute::TO_LOCAL, $attachment, $to_drive );
    }

    /**
     * @throws Exception
     */
    public function transfer_from_queue( AttachmentTransferQueueDTO $attachment_transfer_queue ): void {
        /**
         * @var AttachmentRepository $attachment_repository
         */
        $attachment_repository = helpgent_singleton( AttachmentRepository::class );

        /**
         * @var AttachmentTransferQueueRepository $attachment_transfer_queue_repository
         */
        $attachment_transfer_queue_repository = helpgent_singleton( AttachmentTransferQueueRepository::class );
        
        $attachment = $attachment_repository->get_by_id( $attachment_transfer_queue->get_attachment_id() );

        if ( empty( $attachment ) ) {
            // Remove From The Queue 
            $attachment_transfer_queue_repository->delete( $attachment_transfer_queue->get_id() );
            throw new Exception( 'The attachment not found', 500 );
        }

        $from_drive = $attachment->storage;
        $to_drive   = $attachment_transfer_queue->get_transfer_to();

        $supported_drivers = array_merge( [ LocalDrive::get_key() ], array_keys( helpgent_config( 'media-driver-migrator' ) ) );

        if ( ! in_array( $to_drive, $supported_drivers ) || ! in_array( $from_drive, $supported_drivers ) ) {
            throw new Exception( 'Unsupported media driver', 500 );
        }

        if ( $from_drive === $to_drive ) {
            throw new Exception( 'Cant transfer file within same media driver', 500 );
        }

        if ( ! in_array( LocalDrive::get_key(), [ $from_drive, $to_drive ] ) ) {
            throw new Exception( 'Please transfer the media to local drive first before transferring to other driver', 500 );
        }

        $migrator = LocalDrive::get_key() === $from_drive ? $to_drive : $from_drive;
        $migrator = $this->get_migrator( $migrator );

        if ( LocalDrive::get_key() === $from_drive ) {
            $migrator->queue_transfer_from_local( $attachment_transfer_queue );
            return;
        }

        $migrator->queue_transfer_to_local( $attachment_transfer_queue );
    }

    public function move_to_queue( int $queue_id ) {
        /**
         * @var AttachmentTransferQueueRepository $transfer_queue_repository
         */
        $transfer_queue_repository = helpgent_singleton( AttachmentTransferQueueRepository::class );
        
        /**
         * @var AttachmentUploadSessionRepository $upload_session_repository
         */
        $upload_session_repository = helpgent_singleton( AttachmentUploadSessionRepository::class );

        /**
         * @var AttachmentRepository $attachment_repository
         */
        $attachment_repository = helpgent_singleton( AttachmentRepository::class );

        $queue_data = $transfer_queue_repository->get_by_id( $queue_id );

        if ( ! $queue_data ) {
            throw new Exception( __( 'Queue item could not be found.', 'helpgent' ), 404 );
        }

        $attachment_data = $attachment_repository->get_by_id( $queue_data->attachment_id );

        // Delete The Queue If The Attachment Is Not Available
        if ( empty( $attachment_data ) ) {

            // Delete The Upload Session
            if ( ! empty( $queue_data->upload_id ) ) {
                $upload_session_repository->delete( $queue_data->upload_id );
            }

            $transfer_queue_repository->delete( $queue_id );
            throw new Exception( __( 'The attachment could not be found.', 'helpgent' ), 404 );
        }

        if ( AttachmentTransferQueueStatus::FAILED !== $queue_data->status ) {
            throw new Exception( __( 'Only failed items can be moved to the queue.', 'helpgent' ), 422 );
        }

        // Update The Queue
        $queue = new AttachmentTransferQueueDTO(
            $queue_data->type,
            $queue_data->attachment_id,
            $queue_data->transfer_from,
            $queue_data->transfer_to,
            $queue_data->transfer_next
        );

        $queue->set_id( $queue_data->id );
        $queue->set_upload_id( $queue_data->upload_id );
        $queue->set_upload_token( $queue_data->upload_token );
        $queue->set_status( AttachmentTransferQueueStatus::IN_QUEUE );
        $queue->set_message( null );

        $transfer_queue_repository->update( $queue );
    }

    /**
     * @throws Exception Invalid media driver.
     */
    protected function get_migrator( string $driver ) : MediaDriverMigrator {
        $driver = helpgent_config( "media-driver-migrator.$driver" );

        if ( ! is_string( $driver ) ) {
            throw new Exception( __( 'Invalid media driver.', 'helpgent' ), 500 );
        }

        if ( ! class_exists( $driver ) ) {
            throw new Exception( __( 'Invalid media driver.', 'helpgent' ), 500 );
        }

        $driver = helpgent_singleton( $driver );

        if ( ! ( $driver instanceof MediaDriverMigrator ) ) {
            throw new Exception( __( 'Invalid media driver.', 'helpgent' ), 500 );
        }

        return $driver;
    }
}