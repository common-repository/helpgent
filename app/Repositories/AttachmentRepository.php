<?php

namespace HelpGent\App\Repositories;

use Exception;
use HelpGent\App\DTO\ChunkFileDTO;
use HelpGent\App\DTO\ChunkFileStateDTO;
use HelpGent\App\Models\Attachment;
use HelpGent\App\Contracts\MediaDriver;
use HelpGent\App\DTO\AttachmentDTO;
use HelpGent\App\DTO\AttachmentFileDTO;
use HelpGent\App\DTO\AttachmentReadQueryDTO;
use HelpGent\App\DTO\AttachmentUploadSessionDTO;
use HelpGent\App\DTO\QueryResponse;
use HelpGent\App\Models\ResponseAttachment;

class AttachmentRepository {
    public function get( AttachmentReadQueryDTO $read_query_dto ) {
        $query = Attachment::query();

        if ( $read_query_dto->get_title() ) {
            $query->where( 'title', $read_query_dto->get_title() );
        }

        if ( $read_query_dto->get_mime_type() ) {
            $query->where( 'mime_type', $read_query_dto->get_mime_type() );
        }

        if ( $read_query_dto->get_file_size() ) {
            $query->where( 'file_size', $read_query_dto->get_file_size() );
        }

        if ( $read_query_dto->get_storage() ) {
            $query->where( 'storage', $read_query_dto->get_storage_operator(), $read_query_dto->get_storage() );
        }

        if ( $read_query_dto->get_file_id() ) {
            $query->where( 'file_id', $read_query_dto->get_file_id() );
        }

        if ( $read_query_dto->get_created_by() ) {
            $query->where( 'created_by', $read_query_dto->get_created_by() );
        }

        if ( $read_query_dto->get_is_guest() ) {
            $query->where( 'is_guest', $read_query_dto->get_is_guest() );
        }

        $count_query = clone $query;

        // Set Ordering
        switch ( $read_query_dto->get_order_by() ) {
            case 'oldest':
                $query->order_by( 'id' );
                break;

            case 'latest':
                $query->order_by_desc( 'id' );
                break;
        }

        return new QueryResponse( 
            $query->pagination( $read_query_dto->get_per_page(), $read_query_dto->get_page(), 100, 1 ), 
            $count_query->count() 
        );
    }

    public function create( AttachmentDTO $attachment_dto ) {
        return Attachment::query()->insert_get_id(
            [
                'title'        => $attachment_dto->get_title(),
                'mime_type'    => $attachment_dto->get_mime_type(),
                'file_size'    => $attachment_dto->get_file_size(),
                'storage'      => $attachment_dto->get_storage(),
                'file_id'      => $attachment_dto->get_file_id(),
                'upload_token' => $attachment_dto->get_upload_token(),
            ]
        );
    }

    /**
     * @throws Exception
     */
    public function create_wp( AttachmentDTO $attachment_dto ): OBJECT {
        $attachment_args = [
            'post_mime_type' => $attachment_dto->get_mime_type(),
            'post_title'     => $attachment_dto->get_title(),
            'post_content'   => '',
            'guid'           => $attachment_dto->get_file_url(),
            'post_status'    => 'inherit'
        ];

        $attachment_id = wp_insert_attachment( $attachment_args );

        if ( is_wp_error( $attachment_id ) ) {
            throw new Exception( $attachment_id->get_error_message(), 500 );
        }

        $attachment = get_post( $attachment_id );

        if ( ! $attachment || is_wp_error( $attachment ) ) {
            throw new Exception( __( 'Could not create the attachment', 'helpgent' ), 500 );
        }

        return $attachment;
    }

    public function update( AttachmentDTO $attachment_dto ) {
        $attachment = $this->get_by_id( $attachment_dto->get_id() );

        if ( ! $attachment ) {
            throw new Exception( esc_html__( 'Attachment not found.', 'helpgent' ), 404 );
        }

        return Attachment::query()->where( 'id', $attachment_dto->get_id() )->update(
            [
                'title'      => $attachment_dto->get_title(),
                'mime_type'  => $attachment_dto->get_mime_type(),
                'file_size'  => $attachment_dto->get_file_size(),
                'storage'    => $attachment_dto->get_storage(),
                'file_id'    => $attachment_dto->get_file_id(),
                'updated_at' => helpgent_now()
            ]
        );
    }

    public function delete( int $id ) {
        $attachment = $this->get_by_id( $id );

        if ( ! $attachment ) {
            throw new Exception( esc_html__( 'Attachment not found.', 'helpgent' ), 404 );
        }

        return Attachment::query()->where( 'id', $id )->delete();
    }

    /**
     * @throws Exception
     */
    public function upload_and_create( array $file, string $driver ) : AttachmentDTO {
        $uploaded_file = $this->upload( $file, $driver );

        $attachment = new AttachmentDTO(
            $uploaded_file->get_file_name(),
            $uploaded_file->get_mime_type(),
            $uploaded_file->get_file_size(),
            $driver,
        );

        $attachment->set_file_id( $uploaded_file->get_file_id() );
        $attachment->set_upload_token( helpgent_generate_token() );

        $attachment_id = $this->create( $attachment );

        $attachment->set_id( $attachment_id );

        return apply_filters( 'helpgent_after_upload_attachment', $attachment );
    }

    /**
     * @throws Exception
     */
    public function upload( array $file, string $driver ) : AttachmentFileDTO {
        $driver_instance = $this->get_media_driver_instance( $driver );

        return $driver_instance->upload( $file );
    }

    /**
     * @throws Exception Could not create the upload session.
     */
    public function create_upload_session( AttachmentDTO $file, string $driver ) : AttachmentUploadSessionDTO {
        $driver_instance = $this->get_media_driver_instance( $driver );

        return $driver_instance->create_upload_session( $file );
    }

    /**
     * @throws Exception
     */
    public function upload_chunk_and_create( ChunkFileDTO $chunk_file, AttachmentUploadSessionDTO $upload_session ) : ChunkFileStateDTO {
        $upload_status = self::upload_chunk( $chunk_file, $upload_session );
        $attachment    = null;

        if ( $upload_status->get_is_done() && $upload_status->get_file() ) {
            $uploaded_file = $upload_status->get_file();

            $uploaded_file->set_mime_type( $upload_session->get_mime_type() );
            $uploaded_file->set_upload_token( $upload_session->get_upload_token() );

            $attachment = new AttachmentDTO(
                $uploaded_file->get_file_name(),
                $upload_session->get_mime_type(),
                $uploaded_file->get_file_size(),
                $upload_session->get_storage()
            );

            $attachment->set_storage( $upload_session->get_storage() );
            $attachment->set_upload_token( $upload_session->get_upload_token() );

            if ( $uploaded_file->get_file_id() ) {
                $attachment->set_file_id( $uploaded_file->get_file_id() );
            }
            
            $attachment->set_upload_token( $uploaded_file->get_upload_token() );
            $attachment_id = $this->create( $attachment );
            
            $attachment->set_id( $attachment_id );
            
            $attachment = apply_filters( 'helpgent_after_upload_attachment', $attachment );
            
            $uploaded_file->set_storage( $attachment->get_storage() );
            $uploaded_file->set_id( $attachment->get_id() );

            $upload_status->set_file( $uploaded_file );
        }

        return $upload_status;
    }

    /**
     * @throws Exception
     */
    public function upload_chunk( ChunkFileDTO $chunk_file, AttachmentUploadSessionDTO $upload_session ) : ChunkFileStateDTO {
        $driver_instance = $this->get_media_driver_instance( $upload_session->get_storage() );
        $upload_status   = $driver_instance->upload_chunk( $chunk_file, $upload_session );

        $attachment_upload_session_repository = $this->get_attachment_upload_session_repository();

        // Update The Session
        $upload_session->set_last_sent_bytes( $upload_status->get_last_sent_bytes() );
        $attachment_upload_session_repository->update( $upload_session );


        if ( $upload_status->get_is_done() && $upload_status->get_file() ) {
            // Delete The Upload Session
            $attachment_upload_session_repository->delete( $upload_session->get_id() );
        }

        return $upload_status;
    }

    public function delete_file( ?string $file_name, ?string $file_id, string $driver ) : bool {
        try {
            $driver_instance = $this->get_media_driver_instance( $driver );
            return $driver_instance->delete( $file_name, $file_id );
        } catch ( Exception $exception ) {
            return false;
        }
    }

    public function get_file_url( ?string $file_name, ?string $file_id, $driver ) {
        try {
            $driver_instance = $this->get_media_driver_instance( $driver );
            return $driver_instance->get_file_url( $file_name, $file_id );
        } catch ( Exception $exception ) {
            return '';
        }
    }

    /**
     * @return MediaDriver
     * @throws Exception Please use a valid media driver.
     */
    protected function get_media_driver_instance( string $driver ) : MediaDriver {
        $driver_class = helpgent_config( "media.drivers.{$driver}" );

        if ( ! class_exists( $driver_class ) ) {
            throw new Exception( __( 'Please use a valid media driver.', 'helpgent' ), 500 );
        }

        return helpgent_singleton( ( string ) $driver_class );
    }

    public function get_by_id( int $id ) {
        return Attachment::query()->where( 'id', $id )->first();
    }

    public function get_by_upload_token( int $id, string $upload_token ) {
        return Attachment::query()->where( 'id', $id )->where( 'upload_token', $upload_token )->first();
    }

    public function get_by_title( string $title ) {
        return Attachment::query()->where( 'title', $title )->first();
    }

    public function get_attachment_upload_session( int $id, string $upload_token ): AttachmentUploadSessionDTO {
        $upload_session_repository = $this->get_attachment_upload_session_repository();

        $session_data = $upload_session_repository->get_by_upload_token( $id, $upload_token );

        if ( empty( $session_data ) ) {
            throw new Exception( __( 'Upload session could not be found.', 'helpgent' ), 404 );
        }

        $session = new AttachmentUploadSessionDTO(
            $session_data->title,
            $session_data->file_size,
            $session_data->mime_type,
            $session_data->storage,
            $upload_token,
        );

        $session->set_id( $session_data->id );
        $session->set_last_sent_bytes( $session_data->last_sent_bytes );
        $session->set_ref( $session_data->ref );

        return $session;
    }

    public function get_storage_summary(): array {
        $data    = Attachment::query()->select( 'storage', 'count(*) as total_files' )->group_by( 'storage' )->get();
        $summery = [];
        
        foreach ( $data as $data_item ) {
            $key       = $data_item->storage;
            $data_item = (array) $data_item;
            unset( $data_item['storage'] );
            $summery[ $key ] = (array) $data_item;
        }

        if ( empty( $summery ) ) {
            return [
                'local' => [
                    'total_files' => 0,
                ]
            ];
        }

        return $summery;
    }

    public function get_attachment_upload_session_repository(): AttachmentUploadSessionRepository {
        return helpgent_singleton( AttachmentUploadSessionRepository::class );
    }

    public function add_response( int $attachment_id, int $response_id ) {
        $attachment_response = ResponseAttachment::query()->where( 'attachment_id', $attachment_id )->where( 'response_id', $response_id )->first();
        if ( empty( $attachment_response ) ) {
            ResponseAttachment::query()->insert(
                [
                    'attachment_id' => $attachment_id,
                    'response_id'   => $response_id
                ]
            );
        }
    }
}