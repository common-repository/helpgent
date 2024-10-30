<?php

namespace HelpGent\Database\Migrations\V1;

use \stdClass;
use HelpGent\App\Models\V1\GuestUser as V1GuestUser;
use HelpGent\App\Models\V1\GuestUserMeta as V1GuestUserMeta;
use HelpGent\App\Models\V1\AuthToken as V1AuthToken;
use HelpGent\App\Models\V1\Migration as V1Migration;
use HelpGent\App\Models\Guest as V2GuestUser;

class GuestUserMigrator extends MigratorBase {
    public static function migrate(): bool {
        $state_key       = V1GuestUser::get_table_name();
        $old_forms_query = V1GuestUser::query();

        $current_page = self::get_state( $state_key, 'current_page', 1 );
        $results      = $old_forms_query->pagination( 50, intval( $current_page ) );

        if ( empty( $results ) ) {
            return false;
        }

        foreach ( $results as $result ) {
            self::migrate_guest_user( $result );
        }

        self::update_state( $state_key, 'current_page', $current_page + 1 );

        return true;
    }

    public static function migrate_guest_user( stdClass $guest_user ) {
        $new_data = [
            'name'             => $guest_user->name,
            'email'            => $guest_user->email,
            'number'           => '',
            'token'            => '',
            'token_expires_at' => '',
            'created_at'       => $guest_user->created_at,
        ];

        $meta_query_results = V1GuestUserMeta::query()
            ->where( 'user_id', $guest_user->id )
            ->where( 'meta_key', 'phone' )
            ->first();

        if ( ! empty( $meta_query_results ) ) {
            $new_data['number'] = $meta_query_results->meta_value;
        }

        $token_query_results = V1AuthToken::query()->where( 'email', $guest_user->email )->first();

        if ( ! empty( $token_query_results ) ) {
            $new_data['token']            = $token_query_results->token;
            $new_data['token_expires_at'] = $token_query_results->expires_at;
        }

        $new_id = V2GuestUser::query()->insert_get_id( $new_data );

        if ( empty( $new_id ) ) {
            return;
        }

        V1Migration::query()->insert(
            [
                'from_table' => V1GuestUser::get_table_name(),
                'to_table'   => V2GuestUser::get_table_name(),
                'old_id'     => $guest_user->id,
                'new_id'     => $new_id,
            ]
        );
    }
}