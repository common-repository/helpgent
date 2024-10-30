<?php

namespace HelpGent\Database\Migrations\V1;

use \stdClass;
use HelpGent\App\Models\V1\Conversation as V1Conversation;
use HelpGent\App\Models\V1\Message as V1Message;
use HelpGent\App\Models\V1\Attachment as V1Attachment;
use HelpGent\App\Models\V1\Migration as V1Migration;

use HelpGent\App\Models\Response as V2Response;
use HelpGent\App\Models\Message as V2Message;
use HelpGent\App\Models\MessageForward as V2MessageForward;
use HelpGent\App\Models\ResponseAttachment as V2ResponseAttachment;

class MessageMigrator extends MigratorBase {
    public static function migrate(): bool {
        $state_key       = V1Message::get_table_name();
        $old_forms_query = V1Message::query();

        $current_page = self::get_state( $state_key, 'current_page', 1 );
        $results      = $old_forms_query->pagination( 50, intval( $current_page ) );

        if ( empty( $results ) ) {
            return false;
        }

        foreach ( $results as $result ) {
            self::migrate_message( $result );
        }

        self::update_state( $state_key, 'current_page', $current_page + 1 );

        return true;
    }

    public static function migrate_message( stdClass $message ): void {
        $new_message = [
            'response_id'   => 0,
            'message'       => $message->message,
            'attachment_id' => 0,
            'is_read'       => 1,
            'is_guest'      => 0,
            'created_by'    => 0,
            'replied_by'    => '',
            'parent_id'     => 0,
            'forward_id'    => 0,
            'agent_trigger' => 0,
            'status'        => 'publish',
            'created_at'    => $message->created_at,
            'updated_at'    => $message->updated_at,
        ];

        // response_id
        $response_ref = V1Migration::query()
            ->where( 'from_table', V1Conversation::get_table_name() )
            ->where( 'old_id', $message->conversation_id )
            ->first();

        $new_message['response_id'] = ! empty( $response_ref ) ? $response_ref->new_id : 0;

        $response_form_id = null;

        if ( ! empty( $new_message['response_id'] ) ) {
            $response_data    = V2Response::query()->where( 'id', $new_message['response_id'] )->first();
            $response_form_id = ! empty( $response_data ) ? (int) $response_data->form_id : 0;
        }

        // attachment_id
        if ( ! empty( $message->attachment_id ) ) {
            $attachment_ref = V1Migration::query()
            ->where( 'from_table', V1Attachment::get_table_name() )
            ->where( 'old_id', $message->attachment_id )
            ->first();

            $new_message['attachment_id'] = ! empty( $attachment_ref ) ? $attachment_ref->new_id : 0;
        }

        if ( ! empty( $new_message['response_id'] ) && ! empty( $new_message['attachment_id'] ) ) {
            $response_attachment_data = V2ResponseAttachment::query()
                ->where( 'response_id', $new_message['response_id'] )
                ->where( 'attachment_id', $new_message['attachment_id'] )
                ->first();

            if ( empty( $response_attachment_data ) ) {
                V2ResponseAttachment::query()->insert(
                    [
                        'response_id'   => $new_message['response_id'],
                        'attachment_id' => $new_message['attachment_id'],
                    ]
                );
            }
        }

        // created_by, is_guest
        $user = self::get_user( $message->user_email );

        $new_message['created_by'] = $user['id'];
        $new_message['is_guest']   = $user['is_guest'];

        // replied_by
        $replied_by_map = [
            'text'  => 'text',
            'audio' => 'voice',
            'video' => 'video',
        ];

        $replied_by = isset( $replied_by_map[ $message->message_type ] ) ? $replied_by_map[ $message->message_type ] : 'text';

        if ( ! empty( $message->parent_data ) ) {
            $replied_by = 'forward';
        }

        if ( ! empty( $message->parent ) ) {
            $replied_by = 'reply';
        }

        $new_message['replied_by'] = $replied_by;

        if ( 'reply' === $replied_by ) {
            $replay_ref = V1Migration::query()
            ->where( 'from_table', V1Message::get_table_name() )
            ->where( 'old_id', $message->parent )
            ->first();

            $new_message['parent_id'] = ! empty( $replay_ref ) ? $replay_ref->new_id : 0;
        }

        if ( 'forward' === $replied_by && ! empty( $message->parent_data ) ) {
            $forward_data = maybe_unserialize( $message->parent_data );

            $forward_attachment_id = 0;
            $forward_response_id   = 0;
            
            if ( ! empty( $new_message['response_id'] ) ) {
                $response_data = V2Response::query()->where( 'id', $new_message['response_id'] )->first();
                $form_id       = ! empty( $response_data ) ? $response_data->form_id : 0;
            }

            if ( ! empty( $forward_data['conversation_id'] ) ) {
                $forward_response_ref = V1Migration::query()
                    ->where( 'from_table', V1Conversation::get_table_name() )
                    ->where( 'old_id', $forward_data['conversation_id'] )
                    ->first();

                $forward_response_id = ! empty( $forward_response_ref ) ? $forward_response_ref->new_id : 0;
            }

            if ( 0 === $response_form_id && ! empty( $forward_response_id ) ) {
                $forward_response_data = V2Response::query()->where( 'id', $forward_response_id )->first();
    
                if ( ! empty( $forward_response_data ) ) {
                    $response_form_id = $forward_response_data->form_id;
                    V2Response::query()->where( 'id', $new_message['response_id'] )->update(
                        [
                            'form_id' => $forward_response_data->form_id,
                        ]
                    );
                }
            }

            if ( ! empty( $forward_data['attachment_id'] ) ) {
                $attachment_ref = V1Migration::query()
                    ->where( 'from_table', V1Attachment::get_table_name() )
                    ->where( 'old_id', $forward_data['attachment_id'] )
                    ->first();

                $forward_attachment_id = ! empty( $attachment_ref ) ? $attachment_ref->new_id : 0;
            }

            if ( ! empty( $forward_response_id ) && ! empty( $forward_attachment_id ) ) {
                $forward_attachment_data = V2ResponseAttachment::query()
                    ->where( 'response_id', $forward_response_id )
                    ->where( 'attachment_id', $forward_attachment_id )
                    ->first();
    
                if ( empty( $forward_attachment_data ) ) {
                    V2ResponseAttachment::query()->insert(
                        [
                            'response_id'   => $forward_response_id,
                            'attachment_id' => $forward_attachment_id,
                        ]
                    );
                }
            }

            $forward_message = [
                'message'       => $forward_data['message'],
                'attachment_id' => $forward_attachment_id,
                'created_at'    => $forward_data['created_at'],
                'updated_at'    => $forward_data['updated_at'],
            ];

            $new_message['forward_id'] = V2MessageForward::query()->insert_get_id( $forward_message );
        }

        if ( empty( $response_form_id ) ) {
            V2Response::query()->where( 'id', $new_message['response_id'] )->update(
                [
                    'form_id' => get_option( 'helpgent_legacy_form', 0 ),
                ]
            );
        }

        $new_message_id = V2Message::query()->insert_get_id( $new_message );

        if ( empty( $new_message_id ) ) {
            if ( ! empty( $new_message['forward_id'] ) ) {
                V2MessageForward::query()->where( 'id', $new_message['forward_id'] )->delete();
            }
            return;
        }

        V1Migration::query()->insert(
            [
                'from_table' => V1Message::get_table_name(),
                'to_table'   => V2Message::get_table_name(),
                'old_id'     => $message->id,
                'new_id'     => $new_message_id,
            ]
        );
    }
}