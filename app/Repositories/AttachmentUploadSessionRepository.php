<?php

namespace HelpGent\App\Repositories;

use Exception;
use HelpGent\App\Models\AttachmentUploadSession;
use HelpGent\App\DTO\AttachmentUploadSessionDTO;
use HelpGent\App\DTO\AttachmentTransferQueueReadQueryDTO;
use HelpGent\App\DTO\QueryResponse;

class AttachmentUploadSessionRepository {
    public function get( AttachmentTransferQueueReadQueryDTO $read_query_dto ) {
        $query       = AttachmentUploadSession::query()->where( 'status', $read_query_dto->get_status() );
        $count_query = AttachmentUploadSession::query()->where( 'status', $read_query_dto->get_status() );

        return new QueryResponse( 
            $query->pagination( $read_query_dto->get_per_page(), $read_query_dto->get_page(), 100, 1 ), 
            $count_query->count() 
        );
    }

    public function create( AttachmentUploadSessionDTO $attachment_upload_session_dto ) {
        return AttachmentUploadSession::query()->insert_get_id(
            [
                'title'           => $attachment_upload_session_dto->get_title(),
                'file_size'       => $attachment_upload_session_dto->get_file_size(),
                'mime_type'       => $attachment_upload_session_dto->get_mime_type(),
                'storage'         => $attachment_upload_session_dto->get_storage(),
                'last_sent_bytes' => $attachment_upload_session_dto->get_last_sent_bytes(),
                'ref'             => $attachment_upload_session_dto->get_ref(),
                'upload_token'    => $attachment_upload_session_dto->get_upload_token(),
                'created_at'      => helpgent_now(),
            ]
        );
    }

    public function update( AttachmentUploadSessionDTO $attachment_upload_session_dto ) {
        $attachment_transfer_queue = $this->get_by_id( $attachment_upload_session_dto->get_id() );

        if ( ! $attachment_transfer_queue ) {
            throw new Exception( esc_html__( 'Session not found.', 'helpgent' ), 404 );
        }

        return AttachmentUploadSession::query()->where( 'id', $attachment_upload_session_dto->get_id() )->update(
            [
                'title'           => $attachment_upload_session_dto->get_title(),
                'file_size'       => $attachment_upload_session_dto->get_file_size(),
                'mime_type'       => $attachment_upload_session_dto->get_mime_type(),
                'storage'         => $attachment_upload_session_dto->get_storage(),
                'last_sent_bytes' => $attachment_upload_session_dto->get_last_sent_bytes(),
                'ref'             => $attachment_upload_session_dto->get_ref(),
                'upload_token'    => $attachment_upload_session_dto->get_upload_token(),
                'updated_at'      => helpgent_now(),
            ]
        );
    }

    public function delete( int $id ) {
        $item = $this->get_by_id( $id );

        if ( ! $item ) {
            throw new Exception( esc_html__( 'Session not found.', 'helpgent' ), 404 );
        }

        return AttachmentUploadSession::query()->where( 'id', $id )->delete();
    }

    public function get_by_id( int $id ) {
        return AttachmentUploadSession::query()->where( 'id', $id )->first();
    }

    public function get_by_upload_token( int $id, string $upload_token ) {
        return AttachmentUploadSession::query()->where( 'id', $id )->where( 'upload_token', $upload_token )->first();
    }
}