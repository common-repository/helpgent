<?php

namespace HelpGent\App\MediaDrivers;

use Exception;
use HelpGent\App\Contracts\MediaDriver;
use HelpGent\App\DTO\AttachmentDTO;
use HelpGent\App\DTO\AttachmentFileDTO;
use HelpGent\App\DTO\AttachmentUploadSessionDTO;
use HelpGent\App\DTO\ChunkFileDTO;
use HelpGent\App\DTO\ChunkFileStateDTO;
use HelpGent\App\Repositories\AttachmentUploadSessionRepository;

abstract class MediaDriverService implements MediaDriver {
    /**
     * @throws Exception Could not upload the file, please try again
     */
    public function upload( array $file ) : AttachmentFileDTO {
        helpgent_require_media_uploader_files();
        helpgent_prepare_upload_directory();

        add_filter( 'upload_dir', [ $this, 'change_upload_dir' ] );

        $file['name'] = helpgent_generate_unique_file_name( $file['name'] );

        $uploaded_file = wp_handle_upload( $file, [ 'test_form' => false ], time() );

        remove_filter( 'upload_dir', [ $this, 'change_upload_dir' ] );

        if ( ! empty( $uploaded_file['error'] ) ) {
            throw new Exception( __( "Could not upload the file, please try again", 'helpgent' ), 500 );
        }

        $file_name = basename( $uploaded_file['file'] );

        return new AttachmentFileDTO( $file_name, $file[ 'size' ], $uploaded_file[ 'type' ] );
    }

    /**
     * @throws Exception Could not create the file, please try again
     */
    public function create_file( string $file_name, string $file_contents ) : AttachmentFileDTO {
        helpgent_prepare_upload_directory();

        $dest_path = helpgent_upload_dir( $file_name );
        $file_size = file_put_contents( $dest_path, trim( $file_contents ) );

        if ( empty( $file_size ) ) {
            throw new Exception( __( 'Could not create the file, please try again', 'helpgent' ), 500 );
        }

        $mime_type = helpgent_get_file_mime_type( $dest_path );

        if ( empty( $mime_type ) ) {
            throw new Exception( __( 'The type is not supported', 'helpgent' ), 500 );
        }

        return new AttachmentFileDTO( $file_name, $file_size, $mime_type );
    }

    public function change_upload_dir( array $uploads ) : array {
        $uploads['path']   = helpgent_upload_dir();
        $uploads['url']    = helpgent_upload_url();
        $uploads['subdir'] = '';

        return $uploads;
    }

    public function get( array $attachment ) : AttachmentFileDTO {
        $file_title = $attachment['title'];
        $file_size  = $attachment['size'];
        $mime_type  = $attachment['mime_type'];

        return new AttachmentFileDTO( $file_title, $file_size, $mime_type );
    }

    public function create_upload_session( AttachmentDTO $file ) : AttachmentUploadSessionDTO {
        /**
         * @var AttachmentUploadSessionRepository $upload_session_repository
         */
        $upload_session_repository = helpgent_singleton( AttachmentUploadSessionRepository::class );
        
        $upload_token = ! empty( $file->get_upload_token() ) ? $file->get_upload_token() : helpgent_generate_token();

        $upload_session_dto = new AttachmentUploadSessionDTO(
            $file->get_title(),
            $file->get_file_size(),
            $file->get_mime_type(),
            $file->get_storage(),
            $upload_token
        );

        $upload_id = $upload_session_repository->create( $upload_session_dto );
        $upload_session_dto->set_id( $upload_id );
        
        return $upload_session_dto;
    }

    /**
     * @throws Exception
     */
    public function upload_chunk( ChunkFileDTO $chunk_file, AttachmentUploadSessionDTO $upload_session ) : ChunkFileStateDTO {
        $this->add_chunk_content( $chunk_file, $upload_session );

        $last_sent_bytes = $chunk_file->get_range_to() - 1;

        if ( $chunk_file->get_range_to() === $chunk_file->get_file_size() ) {
            $file_size     = $this->trim_chunk_file( $chunk_file->get_file_name() );
            $new_file_name = $this->rename_chunk_file( $chunk_file->get_file_name() );

            $file = new AttachmentFileDTO(
                $new_file_name,
                is_null( $file_size ) ? $chunk_file->get_file_size() : $file_size,
                $chunk_file->get_mime_type()
            );

            return new ChunkFileStateDTO( true, $last_sent_bytes, $file );
        }

        return new ChunkFileStateDTO( false, $last_sent_bytes, null );
    }

    /**
     * @throws Exception
     */
    protected function add_chunk_content( ChunkFileDTO $chunk_file, AttachmentUploadSessionDTO $upload_session ) : void {
        $this->validate_chunk_file( $chunk_file, $upload_session );

        $draft_file_name = pathinfo( $chunk_file->get_file_name(), PATHINFO_FILENAME );
        $draft_file_path = helpgent_upload_dir( $draft_file_name );

        if ( ! file_exists( $draft_file_path ) ) {
            file_put_contents( $draft_file_path, '' );
        }

        file_put_contents( $draft_file_path, trim( $chunk_file->get_content() ), FILE_APPEND );
    }

    /**
     * @throws Exception
     */
    protected function trim_chunk_file( string $file_title ) : ?int {
        return helpgent_trim_attachment_file( pathinfo( $file_title, PATHINFO_FILENAME ) );
    }

    /**
     * @throws Exception
     */
    protected function rename_chunk_file( string $file_title ) : ?string {
        $draft_file_name = pathinfo( $file_title, PATHINFO_FILENAME );
        $draft_file_path = helpgent_upload_dir( $draft_file_name );

        if ( ! file_exists( $draft_file_path ) ) {
            throw new Exception( 'File not found.', 500 );
        }

        return helpgent_rename_attachment_file( $draft_file_name, $file_title );
    }

    protected function validate_chunk_file( ChunkFileDTO $chunk_file, AttachmentUploadSessionDTO $upload_session ) : void {
        $current_from_range = ( $upload_session->get_last_sent_bytes() === 0 ) ? 0 : $upload_session->get_last_sent_bytes() + 1;

        if ( $chunk_file->get_range_from() !== $current_from_range ) {
            throw new Exception( 'Invalid range specified. Current valid from range is ' . $current_from_range, 403 );
        }

        if ( $chunk_file->get_range_from() > $upload_session->get_file_size() ) {
            throw new Exception( 'Invalid range specified. Range from cant be greater then file size', 403 );
        }

        if ( $chunk_file->get_range_to() < 0 ) {
            throw new Exception( 'Invalid range specified. Range to cant be less then 0', 403 );
        }

        if ( $chunk_file->get_range_to() > $upload_session->get_file_size() ) {
            throw new Exception( 'Invalid range specified. Range to cant be greater then file size', 403 );
        }

        $range_length = $chunk_file->get_range_to() - $chunk_file->get_range_from();

        if ( 0 === $range_length ) {
            throw new Exception( 'Invalid range specified. Content length must be grater then 0', 403 );
        }

        if ( $range_length !== strlen( $chunk_file->get_content() ) ) {
            throw new Exception( 'The file content length does not match with the specified range', 422 );
        }
    }

    public function get_file_url( ?string $file_name, ?string $file_id = null ): string {
        return helpgent_upload_url( $file_name );
    }
}