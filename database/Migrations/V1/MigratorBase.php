<?php

namespace HelpGent\Database\Migrations\V1;

use \WP_User_Query;
use HelpGent\App\Models\V1\GuestUser as V1GuestUser;

class MigratorBase {
    public static $migration_version = '1.0.0';

    public static function reset_state() {
        $migration_version = self::$migration_version;
        delete_option( "helpgent_v{$migration_version}_migration_state" );
    }

    public static function get_state( string $group = '', string $key = '', $default = '' ) {
        $migration_version = self::$migration_version;
        $migration_state   = get_option( "helpgent_v{$migration_version}_migration_state", [] );

        if ( ! empty( $group ) ) {
            $group = isset( $migration_state[ $group ] ) ? $migration_state[ $group ] : [];

            if ( empty( $key ) ) {
                return $group;
            }

            return isset( $group[ $key ] ) ? $group[ $key ] : $default;
        }

        return $migration_state;
    }

    public static function update_state( string $group, string $key, $value ): array {
        $migration_version = self::$migration_version;
        $migration_state   = get_option( "helpgent_v{$migration_version}_migration_state", [] );

        if ( isset( $migration_state[ $group ] ) ) {
            $migration_state[ $group ] = [];
        }

        $migration_state[ $group ][ $key ] = $value;

        update_option( "helpgent_v{$migration_version}_migration_state", $migration_state );

        return $migration_state;
    }

    protected static function get_admin_user_id(): int {
        $user_query = new WP_User_Query(
            [
                'role'   => 'Administrator',
                'number' => 1,
            ]
        );

        if ( $user_query->have_posts() ) {
            return 0;
        }

        $users = $user_query->get_results();
        return $users[0]->ID;
    }

    protected static function get_user( string $email ) {
        $guest_user = self::get_guest_user( $email );

        if ( ! empty( $guest_user ) ) {
            return [
                'id'       => $guest_user->id,
                'is_guest' => 1,
            ];
        } 
        
        $user = get_user_by( 'email', $email );

        return [
            'id'       => $user !== false ? $user->ID : 0,
            'is_guest' => 0,
        ];
    }

    protected static function get_guest_user( string $email ) {
        return V1GuestUser::query()->where( 'email', $email )->first();
    }
}