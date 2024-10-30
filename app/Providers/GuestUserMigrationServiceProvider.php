<?php

namespace HelpGent\App\Providers;

use HelpGent\WpMVC\Contracts\Provider;
use HelpGent\App\Models\Guest as GuestModel;
use HelpGent\App\Models\GuestMeta as GuestMetaModel;
use HelpGent\App\Models\Response as ResponseModel;
use HelpGent\App\Models\Message as MessageModel;
use stdClass;

class GuestUserMigrationServiceProvider implements Provider {
    public function boot() {
        add_action( 'user_register', [ $this, 'maybe_migrate_guest_user' ], 10, 2 );
    }

    public function maybe_migrate_guest_user( int $user_id, array $user_data ) {
        $guest_user = GuestModel::query()->where( 'email', $user_data['user_email'] )->first();

        if ( ! $guest_user ) {
            return;
        }

        // Migrate User Data
        $this->migrate_guest_user_data( $user_id, $guest_user );

        // Migrate Messages
        $this->migrate_guest_user_messages( $user_id, $guest_user );

        // Migrate Response
        $this->migrate_guest_user_response( $user_id, $guest_user );

        // Delete Guest User
        $this->delete_guest_user( $guest_user->id );
    }

    public function migrate_guest_user_data( int $user_id, stdClass $guest_user ): void {
        if ( ! $user_id ) {
            return;
        }

        if ( ! empty( $guest_user->number ) ) {
            update_user_meta( $user_id, 'helpgent_user_number', $guest_user->number );
        }

        if ( ! empty( $guest_user->company ) ) {
            update_user_meta( $user_id, 'helpgent_user_company', $guest_user->company );
        }
    }

    public function migrate_guest_user_response( int $user_id, stdClass $guest_user ): void {
        ResponseModel::query()
            ->where( 'created_by', $guest_user->id )
            ->where( 'is_guest', 1 )
            ->update( 
                [
                    'created_by' => $user_id,
                    'is_guest'   => 0,
                ] 
            );
    }

    public function migrate_guest_user_messages( int $user_id, stdClass $guest_user ): void {
        MessageModel::query()
            ->where( 'created_by', $guest_user->id )
            ->where( 'is_guest', 1 )
            ->update( 
                [
                    'created_by' => $user_id,
                    'is_guest'   => 0,
                ] 
            );
    }

    public function delete_guest_user( int $user_id ): void {
        GuestModel::query()->where( 'id', $user_id )->delete();
        GuestMetaModel::query()->where( 'user_id', $user_id )->delete();
    }
}