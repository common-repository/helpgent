<?php

namespace HelpGent\Database\Migrations\V1;

use \stdClass;
use HelpGent\App\Models\V1\Form as V1Form;
use HelpGent\App\Models\V1\Conversation as V1Conversation;
use HelpGent\App\Models\V1\ConversationMeta as V1ConversationMeta;
use HelpGent\App\Models\V1\Migration as V1Migration;
use HelpGent\App\Models\Response as V2Response;

class ResponseMigrator extends MigratorBase {
    public static function migrate(): bool {
        $state_key       = V1Conversation::get_table_name();
        $old_forms_query = V1Conversation::query();

        $current_page = self::get_state( $state_key, 'current_page', 1 );
        $results      = $old_forms_query->pagination( 50, intval( $current_page ) );

        if ( empty( $results ) ) {
            return false;
        }

        foreach ( $results as $result ) {
            self::migrate_response( $result );
        }

        self::update_state( $state_key, 'current_page', $current_page + 1 );

        return true;
    }

    public static function migrate_response( stdClass $conversation ) {
        $new_response = [
            'form_id'      => 0,
            'is_read'      => 0,
            'created_by'   => 0,
            'is_guest'     => 0,
            'is_archive'   => $conversation->status !== 'active',
            'is_completed' => 1,
            'is_verified'  => 1,
            'created_at'   => $conversation->created_at,
            'updated_at'   => $conversation->updated_at,
        ];

        $user = self::get_user( $conversation->created_by );

        $new_response['created_by'] = $user['id'];
        $new_response['is_guest']   = $user['is_guest'];

        $meta_query_results = V1ConversationMeta::query()->where( 'conversation_id', $conversation->id )->get();

        $meta_data = array_reduce(
            $meta_query_results, function( $meta_data, $item ) {
                $key               = $item->meta_key;
                $meta_data[ $key ] = $item->meta_value;
                return $meta_data;
            }, [] 
        );

        if ( ! empty( $meta_data['form_id'] ) ) {
            $form_ref = V1Migration::query()
                ->where( 'from_table', V1Form::get_table_name() )
                ->where( 'old_id', $meta_data['form_id'] )
                ->first();

            $new_response['form_id'] = ! empty( $form_ref ) ? $form_ref->new_id : 0;
        }

        if ( ! empty( $meta_data['admin_read'] ) ) {
            $new_response['is_read'] = 1;
        }

        $new_response_id = V2Response::query()->insert_get_id( $new_response );

        if ( empty( $new_response_id ) ) {
            return;
        }

        V1Migration::query()->insert(
            [
                'from_table' => V1Conversation::get_table_name(),
                'to_table'   => V2Response::get_table_name(),
                'old_id'     => $conversation->id,
                'new_id'     => $new_response_id,
            ]
        );
    }
}