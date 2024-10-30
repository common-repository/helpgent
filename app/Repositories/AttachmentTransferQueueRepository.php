<?php

namespace HelpGent\App\Repositories;

use Exception;
use HelpGent\App\EnumeratedList\AttachmentTransferQueueStatus;
use HelpGent\App\EnumeratedList\AttachmentTransferQueueType;
use HelpGent\App\Models\AttachmentTransferQueue;
use HelpGent\App\DTO\AttachmentTransferQueueDTO;
use HelpGent\App\DTO\AttachmentTransferQueueReadQueryDTO;
use HelpGent\App\DTO\QueryResponse;

class AttachmentTransferQueueRepository {
    public function get( AttachmentTransferQueueReadQueryDTO $read_query_dto ) {
        $query = AttachmentTransferQueue::query();

        if ( $read_query_dto->get_columns() ) {
            $query->select( $read_query_dto->get_columns() );
        }

        if ( $read_query_dto->get_type() ) {
            $query->where( 'type', $read_query_dto->get_type() );
        }

        if ( $read_query_dto->get_attachment_id() ) {
            $query->where( 'attachment_id', $read_query_dto->get_attachment_id() );
        }

        if ( $read_query_dto->get_transfer_to() ) {
            $query->where( 'transfer_to', $read_query_dto->get_transfer_to() );
        }

        if ( $read_query_dto->get_transfer_next() ) {
            $query->where( 'transfer_next', $read_query_dto->get_transfer_next() );
        }

        if ( $read_query_dto->get_upload_id() ) {
            $query->where( 'upload_id', $read_query_dto->get_upload_id() );
        }

        if ( $read_query_dto->get_status() ) {
            $query->where( 'status', $read_query_dto->get_status_operator(), $read_query_dto->get_status() );
        }

        if ( $read_query_dto->get_status_in() ) {
            foreach ( $read_query_dto->get_status_in() as $status ) {
                $query->where( 'status', '=', $status, 'or' );
            }
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

        if ( $read_query_dto->get_paginate() ) {
            $data = $query->pagination( $read_query_dto->get_per_page(), $read_query_dto->get_page(), 100, 1 );
        } else {
            $data = $query->get();
        }

        return new QueryResponse( $data, $count_query->count() );
    }

    public function create( AttachmentTransferQueueDTO $attachment_transfer_queue_dto ) {
        return AttachmentTransferQueue::query()->insert_get_id(
            [
                'attachment_id' => $attachment_transfer_queue_dto->get_attachment_id(),
                'type'          => $attachment_transfer_queue_dto->get_type(),
                'transfer_from' => $attachment_transfer_queue_dto->get_transfer_from(),
                'transfer_to'   => $attachment_transfer_queue_dto->get_transfer_to(),
                'transfer_next' => $attachment_transfer_queue_dto->get_transfer_next(),
                'upload_id'     => $attachment_transfer_queue_dto->get_upload_id(),
                'upload_token'  => $attachment_transfer_queue_dto->get_upload_token(),
                'message'       => $attachment_transfer_queue_dto->get_message(),
                'status'        => $attachment_transfer_queue_dto->get_status(),
                'created_at'    => helpgent_now(),
            ]
        );
    }

    public function update( AttachmentTransferQueueDTO $attachment_transfer_queue_dto ) {
        $attachment_transfer_queue = $this->get_by_id( $attachment_transfer_queue_dto->get_id() );

        if ( ! $attachment_transfer_queue ) {
            throw new Exception( esc_html__( 'Attachment not found.', 'helpgent' ), 404 );
        }

        return AttachmentTransferQueue::query()->where( 'id', $attachment_transfer_queue_dto->get_id() )->update(
            [
                'attachment_id' => $attachment_transfer_queue_dto->get_attachment_id(),
                'type'          => $attachment_transfer_queue_dto->get_type(),
                'transfer_from' => $attachment_transfer_queue_dto->get_transfer_from(),
                'transfer_to'   => $attachment_transfer_queue_dto->get_transfer_to(),
                'transfer_next' => $attachment_transfer_queue_dto->get_transfer_next(),
                'upload_id'     => $attachment_transfer_queue_dto->get_upload_id(),
                'upload_token'  => $attachment_transfer_queue_dto->get_upload_token(),
                'message'       => $attachment_transfer_queue_dto->get_message(),
                'status'        => $attachment_transfer_queue_dto->get_status(),
                'updated_at'    => helpgent_now(),
            ]
        );
    }

    public function move_failed_item_to_queue_by_id( int $id ) {
        return AttachmentTransferQueue::query()
            ->where( 'id', $id )
            ->where( 'status', AttachmentTransferQueueStatus::FAILED )
            ->update(
                [ 
                    'status'     => 'in_queue',
                    'message'    => '',
                    'updated_at' => helpgent_now(),
                ] 
            );
    }

    public function move_failed_items_to_queue( ?string $type ) {
        $query = AttachmentTransferQueue::query()->where( 'status', AttachmentTransferQueueStatus::FAILED );

        if ( $type ) {
            $query->where( 'type', $type );
        }
        
        $query->update(
            [ 
                'status'     => AttachmentTransferQueueStatus::IN_QUEUE,
                'message'    => '',
                'updated_at' => helpgent_now(),
            ] 
        );
    }

    public function delete_queues_has_no_session_or_done( array $types = [] ) {
        $query = AttachmentTransferQueue::query()
            ->select( [ 'id' ] )
            ->where_is_null( 'upload_id' )
            ->or_where( 'status', AttachmentTransferQueueStatus::DONE );

        if ( ! empty( $types ) ) {
            $query->where_in( 'type', $types );
        }
        
        return $query->delete();
    }

    public function cancel_queues( array $types = [] ) {
        $query = AttachmentTransferQueue::query()->select( [ 'id' ] );

        if ( ! empty( $types ) ) {
            $query->where_in( 'type', $types );
        }
        
        return $query->update(
            [ 
                'type'          => AttachmentTransferQueueType::CANCELLED,
                'attachment_id' => 0,
                'updated_at'    => helpgent_now(),
            ] 
        );
    }

    public function delete( int $id ) {
        $item = $this->get_by_id( $id );

        if ( ! $item ) {
            throw new Exception( esc_html__( 'Item not found.', 'helpgent' ), 404 );
        }

        return AttachmentTransferQueue::query()->where( 'id', $id )->delete();
    }

    public function delete_where( $column, $operator = null, $value = null ) {
        return AttachmentTransferQueue::query()->where( $column, $operator, $value )->delete();
    }

    public function delete_all() {
        return AttachmentTransferQueue::query()->delete();
    }

    public function get_by_id( int $id ) {
        return AttachmentTransferQueue::query()->where( 'id', $id )->first();
    }

    public function get_by_attachment_id( int $attachment_id ) {
        return AttachmentTransferQueue::query()->where( 'attachment_id', $attachment_id )->first();
    }
}