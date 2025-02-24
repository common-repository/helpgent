<?php

namespace HelpGent\App\Repositories;

use Exception;
use HelpGent\App\DTO\GuestDTO;
use HelpGent\App\Models\Guest;
use HelpGent\App\Models\User;

class GuestRepository {
    public function create( GuestDTO $guest_dto ) {

        if ( $this->get_by_email( $guest_dto->get_email() ) ) {
            throw new Exception( esc_html__( "This email address already exists.", 'helpgent' ), 500 );
        }

        $user = User::query()->where( 'user_email', $guest_dto->get_email() )->first();

        if ( $user ) {
            throw new Exception( esc_html__( "This email address is already in the user table.", 'helpgent' ), 501 );
        }

        return Guest::query()->insert_get_id(
            [
                'name'             => $guest_dto->get_name(),
                'email'            => $guest_dto->get_email(),
                'number'           => $guest_dto->get_number(),
                'company'          => $guest_dto->get_company(),
                'acceptance'       => $guest_dto->get_acceptance(),
                'token'            => $guest_dto->get_token(),
                'token_expires_at' => $guest_dto->get_token_expires_at(),
                'created_at'       => helpgent_now()
            ]
        );
    }

    public function get_by_id( int $id ) {
        return Guest::query()->where( 'id', $id )->first();
    }

    public function get_by_email( string $email ) {
        return Guest::query()->where( 'email', $email )->first();
    }

    public function get_by_token( string $token ) {
        return Guest::query()->where( 'token', $token )->first();
    }

    public function update_token( int $id ) {
        $token = helpgent_generate_token();
        Guest::query()->where( 'id', $id )->update(
            [
                'token'            => $token,
                'token_expires_at' => helpgent_now()->add_days( 30 )
            ]
        );
        return $token;
    }
}