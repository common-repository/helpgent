<?php

namespace HelpGent\Database\Migrations\V1;

use \stdClass;
use HelpGent\App\Models\V1\Conversation as V1Conversation;
use HelpGent\App\Models\V1\Term as V1Term;
use HelpGent\App\Models\V1\ConversationTermRelationship as V1ConversationTermRelationship;
use HelpGent\App\Models\V1\Migration as V1Migration;
use HelpGent\App\Models\Tag as V2Tag;
use HelpGent\App\Models\Response as V2Response;

class TagMigrator extends MigratorBase {
    public static function migrate(): bool {
        $state_key       = V1Term::get_table_name();
        $old_forms_query = V1Term::query();

        $current_page = self::get_state( $state_key, 'current_page', 1 );
        $results      = $old_forms_query->pagination( 50, intval( $current_page ) );

        if ( empty( $results ) ) {
            return false;
        }

        foreach ( $results as $result ) {
            self::migrate_tag( $result );
        }

        self::update_state( $state_key, 'current_page', $current_page + 1 );

        return true;
    }

    public static function migrate_tag( stdClass $term ) {
        $conversation_terms = V1ConversationTermRelationship::query()
            ->where( 'term_taxonomy_id', $term->term_id )
            ->get();

        if ( empty( $conversation_terms ) ) {
            return;
        }

        foreach ( $conversation_terms as $conversation_term ) {
            $response_ref = V1Migration::query()
                ->where( 'from_table', V1Conversation::get_table_name() )
                ->where( 'old_id', $conversation_term->conversation_id )
                ->first();

            if ( empty( $response_ref ) ) {
                continue;
            }

            $response_data = V2Response::query()->where( 'id', $response_ref->new_id )->first();

            if ( empty( $response_data ) ) {
                continue;
            }

            $item_exists = V2Tag::query()
                ->where( 'title', $term->name )
                ->where( 'form_id', $response_data->form_id )
                ->first();

            if ( $item_exists ) {
                continue;
            }

            $new_id = V2Tag::query()->insert_get_id(
                [
                    'title'      => $term->name,
                    'form_id'    => $response_data->form_id,
                    'created_by' => self::get_admin_user_id(),
                    'color'      => 'rgb(230, 230, 230)',
                ]
            );

            if ( empty( $new_id ) ) {
                continue;
            }
    
            V1Migration::query()->insert(
                [
                    'from_table' => V1Term::get_table_name(),
                    'to_table'   => V2Tag::get_table_name(),
                    'old_id'     => $term->term_id,
                    'new_id'     => $new_id,
                ]
            );
        }
    }
}