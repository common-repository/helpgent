<?php

namespace HelpGent\App\BackgroundProcessors;

use HelpGent\App\Models\Attachment;
use HelpGent\App\Models\Guest;
use HelpGent\App\Models\GuestMeta;
use HelpGent\App\Models\Response;
use HelpGent\App\Repositories\AttachmentRepository;
use HelpGent\App\Utils\Repository;
use HelpGent\WpMVC\Database\Query\JoinClause;

class HelpgentBackgroundProcess extends CoreBackgroundProcess {
    protected $action = 'background_process';

    public function task( $item ) {
        $key = array_key_first( $item );

        if ( ! $key ) {
            $this->after_complete();
            return false;
        }

        switch ( $key ) {
            case 'remove_users':
                if ( ! $this->remove_users( $item[$key] ) ) {
                    array_shift( $item );
                }
                break;
            case 'remove_guest_users':
                if ( ! $this->remove_guest_users() ) {
                    array_shift( $item );
                }
                break;
            case 'remove_unverified_response':
                if ( ! $this->remove_unverified_responses( $item[$key] ) ) {
                    array_shift( $item );
                }
                break;
            case 'unknown_attachment':
                if ( ! $this->remove_unknown_attachment( $item[$key] ) ) {
                    array_shift( $item );
                }
                break;
            case 'expired_attachment':
                if ( ! $this->remove_expired_attachment( $item[$key] ) ) {
                    array_shift( $item );
                }
                break;
        }

        if ( empty( $item ) ) {
            $this->after_complete();
        }

        return $item;
    }

    protected function remove_guest_users() {
        $guest_user_ids = array_column( Guest::query()->select( 'id' )->where( 'created_at', '<', helpgent_now()->sub_days( 30 )->format( helpgent_date_time_format() ) )->get(), 'id' );

        GuestMeta::query()->where_in( 'user_id', $guest_user_ids )->delete();
        Response::query()->where( 'is_guest', 1 )->where_in( 'created_by', $guest_user_ids )->delete();
        Guest::query()->where( 'id', $guest_user_ids )->delete();

        return false;
    }

    protected function remove_users( array &$users ) {
        $key = array_key_first( $users['user_ids'] );

        if ( ! is_int( $key ) ) {
            return false;
        }

        wp_delete_user( $users['user_ids'][$key]->id );

        array_shift( $users['user_ids'] );
    
        return $users;
    }

    protected function remove_unverified_responses( array $data ) {
        Response::query()->where( 'created_by', '!=', 0 )->where_raw( "(is_verified is null or is_verified = 0 )" )->where( 'created_at', '<=', $data['created_at'] )->delete();

        Repository::delete_metas_of_unknown_responses();
        Repository::delete_answers_of_unknown_responses();

        Repository::delete_contact_info_of_unknown_answers();
        Repository::delete_address_of_unknown_answers();
        Repository::delete_open_ended_text_inners_of_unknown_answers();

        Repository::delete_messages_of_unknown_responses();
        Repository::delete_responses_tags_of_unknown_responses();
        Repository::delete_response_attachment_of_unknown_responses();
        Repository::delete_unused_forward_messages();

        return false;
    }

    protected function remove_expired_attachment( array $data ) {
        $attachment = Attachment::query()->where( 'created_at', '<', $data['expired_date'] )->first();
        return $this->remove_attachment( $attachment );
    }

    protected function remove_unknown_attachment( array $data ) {
        $attachment = Attachment::query( "attachment" )->select( "attachment.id, attachment.title, attachment.file_id, attachment.storage" )
        ->where( "attachment.created_at", "<", $data['created_at'] )

        /**
         * If attachment not found in answers table
         */
        ->left_join(
            "helpgent_element_answers", function( JoinClause $join ) {
                $join->on_column( "attachment.id", "=", "helpgent_element_answers.attachment_id" )
                ->on_in( "helpgent_element_answers.element_type", ['open_ended_video', 'open_ended_voice', 'open_ended_screen'] )
                ->or_on_raw( "(helpgent_element_answers.element_type = 'file_upload' and JSON_CONTAINS(helpgent_element_answers.value, JSON_ARRAY(attachment.id)))" );
            }
        )->where_is_null( "helpgent_element_answers.value" )->where_raw( "(helpgent_element_answers.attachment_id is null or helpgent_element_answers.attachment_id = 0)" )

        /**
         * If attachment not found in open ended text inner table
         */
        ->left_join( "helpgent_open_ended_text_inners", "helpgent_open_ended_text_inners.file", "=", "attachment.id" )->where_is_null( "helpgent_open_ended_text_inners.file" )

        /**
         * If attachment not found in messages table
         */
        ->left_join( "helpgent_messages", "helpgent_messages.attachment_id", "=", "attachment.id" )->where_is_null( "helpgent_messages.attachment_id" )

        /**
         * If attachment not found in message forward table
         */
        ->left_join( "helpgent_message_forwards", "helpgent_message_forwards.attachment_id", "=", "attachment.id" )->where_is_null( "helpgent_message_forwards.attachment_id" )
        ->first();

        return $this->remove_attachment( $attachment );
    }

    protected function remove_attachment( $attachment ) {
        if ( ! $attachment ) {
            return false;
        }
        /**
         * @var AttachmentRepository $attachment_repository
         */
        $attachment_repository = helpgent_singleton( AttachmentRepository::class );

        $attachment_repository->delete_file( $attachment->title, $attachment->file_id, $attachment->storage );
        $attachment_repository->delete( $attachment->id );

        return true;
    }

    public function after_complete() {
        update_option( 'helpgent_is_running_background_process', 0 );
    }
}