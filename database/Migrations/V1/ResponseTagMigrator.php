<?php

namespace HelpGent\Database\Migrations\V1;

use \stdClass;
use HelpGent\App\Models\V1\Conversation as V1Conversation;
use HelpGent\App\Models\V1\ConversationTermRelationship as V1ConversationTermRelationship;
use HelpGent\App\Models\V1\Term as V1Term;
use HelpGent\App\Models\V1\Migration as V1Migration;
use HelpGent\App\Models\Response as V2Response;
use HelpGent\App\Models\Tag as V2Tag;
use HelpGent\App\Models\ResponseTag as V2ResponseTag;

class ResponseTagMigrator extends MigratorBase {
    public static function migrate(): bool {
        $state_key       = V1ConversationTermRelationship::get_table_name();
        $old_forms_query = V1ConversationTermRelationship::query();

        $current_page = self::get_state( $state_key, 'current_page', 1 );
        $results      = $old_forms_query->pagination( 50, intval( $current_page ) );

        if ( empty( $results ) ) {
            return false;
        }

        foreach ( $results as $result ) {
            self::migrate_response_tag( $result );
        }

        self::update_state( $state_key, 'current_page', $current_page + 1 );

        return true;
    }

    public static function migrate_response_tag( stdClass $conversation_term ) {
        $response_ref = V1Migration::query()
            ->where( 'from_table', V1Conversation::get_table_name() )
            ->where( 'old_id', $conversation_term->conversation_id )
            ->first();

        if ( empty( $response_ref ) ) {
            return;
        }

        $response_data = V2Response::query()->where( 'id', $response_ref->new_id )->first();

        if ( empty( $response_data ) ) {
            return;
        }

        $tag_ref = V1Migration::query()
            ->where( 'from_table', V1Term::get_table_name() )
            ->where( 'old_id', $conversation_term->term_taxonomy_id )
            ->get();

        if ( empty( $tag_ref ) ) {
            return;
        }

        $tag_ids = array_map(
            function( $item ) {
                return intval( $item->new_id );
            }, $tag_ref 
        );

        $tag_data = V2Tag::query()
            ->where_in( 'id', $tag_ids )->where( 'form_id', $response_data->form_id )
            ->first();

        if ( empty( $tag_data ) ) {
            return;
        }

        $response_tag_exist = V2ResponseTag::query()->select( 1 )->where( 'tag_id', $tag_data->id )->where( 'response_id', $response_ref->new_id )->first();

        if ( $response_tag_exist ) {
            return;
        }

        V2ResponseTag::query()->insert(
            [
                'response_id' => $response_ref->new_id,
                'tag_id'      => $tag_data->id,
                'created_by'  => self::get_admin_user_id(),
            ]
        );
    }
}