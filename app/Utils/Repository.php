<?php

namespace HelpGent\App\Utils;

use HelpGent\App\Models\Address;
use HelpGent\App\Models\Attachment;
use HelpGent\App\Models\ContactInfo;
use HelpGent\App\Models\Message;
use HelpGent\App\Models\MessageForward;
use HelpGent\App\Models\OpenEndedTextInner;
use HelpGent\App\Models\ElementAnswers;
use HelpGent\App\Models\ResponseAttachment;
use HelpGent\App\Models\ResponseMeta;
use HelpGent\App\Models\ResponseTag;
use HelpGent\App\Repositories\AttachmentRepository;
use HelpGent\App\Repositories\FormRepository;
use HelpGent\WpMVC\Database\Query\Builder;
use HelpGent\WpMVC\Database\Query\JoinClause;
use stdClass;

class Repository {
    public static function user_select_query( Builder $query ):Builder {
        return $query->select( 'users.ID', 'users.display_name', 'users.user_email' );
    }

    public static function attachment_query():Builder {
        return static::attachment_select_query( Attachment::query() );
    }

    public static function attachment_select_query( Builder $query ):Builder {
        return $query->select( 'id, title, mime_type, file_size, file_id, storage' );
    }

    public static function guest_user_select_query( Builder $query ):Builder {
        return $query->select( 'helpgent_guest_users.id', 'helpgent_guest_users.name', 'helpgent_guest_users.email' );
    }

    public static function delete_attachment( int $file_id ) {
        /**
         * @var AttachmentRepository $attachment_repository
         */
        $attachment_repository = helpgent_singleton( AttachmentRepository::class );
        $file                  = $attachment_repository->get_by_id( $file_id );
    
        if ( $file ) {
            $attachment_repository->delete_file( $file->title, $file->file_id, $file->storage );
            $attachment_repository->delete( $file->id );
        }
    }

    public static function bind_form_featured_image( stdClass $form ):stdClass {
        $content = json_decode( $form->content, true );
        if ( isset( $content['elements'][0]['media']['type'] ) && 'image' === $content['elements'][0]['media']['type'] ) {
            $form->featured_image = $content['elements'][0]['media']['url'];
            return $form;
        }
        /**
         * @var FormRepository $form_repository
         */
        $form_repository = helpgent_singleton( FormRepository::class );
        $form->color     = $form_repository->get_meta( $form->id, 'color' )->meta_value ?? null;
        return $form;
    }

    public static function bind_form_media_settings( stdClass $form ):stdClass {
        $content = json_decode( $form->content, true );

        if ( ! isset( $content['global']['media'] ) ) {
            return $form;
        }

        $media = $content['global']['media'];

        $form->media_settings = [
            'max_upload_size'      => isset( $media['max_upload_size']['value'] ) ? intval( $media['max_upload_size']['value'] ) : 300,
            'max_upload_size_unit' => isset( $media['max_upload_size']['unit'] ) ? $media['max_upload_size']['unit'] : 'mb',
            'max_video_duration'   => isset( $media['max_video_duration']['value'] ) ? floatval( $media['max_video_duration']['value'] ) : 2,
            'max_voice_duration'   => isset( $media['max_voice_duration']['value'] ) ? floatval( $media['max_voice_duration']['value'] ) : 2,
            'video_resolution'     => isset( $media['video_resolution']['value'] ) ? floatval( $media['video_resolution']['value'] ) : 720,
        ];

        return $form;
    }

    public static function bind_file_url( stdClass $file ):stdClass {
        /**
         * @var AttachmentRepository $attachment_repository
         */
        $attachment_repository = helpgent_singleton( AttachmentRepository::class );
        $file->url             = $attachment_repository->get_file_url( $file->title, $file->file_id, $file->storage );
        return $file;
    }

    public static function clean_file( stdClass $file ):stdClass {
        unset( $file->storage );
        unset( $file->file_id );
        return $file;
    }

    public static function get_fields_labels( array $fields ) {
        $labels = [];
        foreach ( $fields as $key => $field ) {
            $labels[$key] = $field['label'];
        }
        return $labels;
    }

    public static function delete_messages_of_unknown_responses() {
        return Message::query()->left_join( 'helpgent_responses', "helpgent_messages.response_id", "=", "helpgent_responses.id" )
            ->where_is_null( "helpgent_responses.id" )
            ->delete();
    }

    public static function delete_answers_of_unknown_responses() {
        $contact_info_table = ContactInfo::get_table_name();

        return ElementAnswers::query( 'answer' )->left_join( 'helpgent_responses as response', "answer.response_id", "=", "response.id" )->where_is_null( "response.id" )
        ->left_join(
            "{$contact_info_table} as contact", function( JoinClause $join ) {
                $join->on_column( "contact.answer_id", "answer.id" );
            }
        )->where_is_null( "contact.is_lead" )->delete();
    }

    public static function delete_metas_of_unknown_responses() {
        return ResponseMeta::query( 'meta' )->left_join( 'helpgent_responses', "meta.response_id", "=", "helpgent_responses.id" )->where_is_null( "helpgent_responses.id" )->delete();
    }

    public static function delete_response_attachment_of_unknown_responses() {
        return ResponseAttachment::query( 'response_attachment' )->left_join( 'helpgent_responses', "response_attachment.response_id", "=", "helpgent_responses.id" )->where_is_null( "helpgent_responses.id" )->delete();
    }

    public static function delete_responses_tags_of_unknown_responses() {
        return ResponseTag::query( 'response_tag' )->left_join( 'helpgent_responses', "response_tag.response_id", "=", "helpgent_responses.id" )->where_is_null( "helpgent_responses.id" )->delete();
    }

    public static function delete_contact_info_of_unknown_answers() {
        return ContactInfo::query( 'contact_info' )->left_join(
            'helpgent_element_answers as element_answer', function( JoinClause $join ) {
                $join->on_column( "element_answer.id",  "contact_info.answer_id" )->on( 'element_answer.element_type', 'contact_info' );
            }
        )->where_is_null( "element_answer.id" )->where( 'contact_info.is_lead', 0 )->delete();
    }

    public static function delete_address_of_unknown_answers() {
        return Address::query( 'address' )->left_join(
            'helpgent_element_answers as element_answer', function( JoinClause $join ) {
                $join->on_column( "element_answer.id",  "address.answer_id" )->on( 'element_answer.element_type', 'address' );
            }
        )->where_is_null( "element_answer.id" )->delete();
    }

    public static function delete_open_ended_text_inners_of_unknown_answers() {
        return OpenEndedTextInner::query( 'text_inners' )->left_join(
            'helpgent_element_answers as element_answer', function( JoinClause $join ) {
                $join->on_column( "element_answer.id", "text_inners.answer_id" )->on( 'element_answer.element_type', 'open_ended_text' );
            }
        )->where_is_null( "element_answer.id" )->delete();
    }

    public static function delete_responses_tags_of_unknown_tags() {
        return ResponseTag::query( 'response_tag' )->left_join( 'helpgent_tags', "helpgent_tags.id", "=", "response_tag.tag_id" )->where_is_null( "response_tag.tag_id" )->delete();
    }

    public static function delete_unused_forward_messages() {
        return MessageForward::query( 'forward' )->left_join( 'helpgent_messages', "forward.id", "=", "helpgent_messages.forward_id" )
        ->where_is_null( "helpgent_messages.forward_id" )->delete();
    }
}