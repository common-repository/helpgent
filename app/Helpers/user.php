<?php

defined( 'ABSPATH' ) || exit;

use HelpGent\App\Models\Guest;
use HelpGent\App\Utils\User;

function helpgent_get_valid_guest() {
    if ( empty( $_COOKIE['helpgent_guest_token'] ) ) {
        return null;
    }

    global $helpgent_guest_user;

    if ( $helpgent_guest_user ) {
        return $helpgent_guest_user;
    }

    $token = sanitize_text_field( wp_unslash( $_COOKIE['helpgent_guest_token'] ) );

    $helpgent_guest_user = Guest::query()->where( 'token', $token )->where( 'token_expires_at', '>', date( helpgent_date_time_format(), time() ) )->first();

    return $helpgent_guest_user;
}

/**
 * Get current user data.
 *
 * @return User|null
 */
function helpgent_get_current_user() {
    global $helpgent_user;

    if ( ! is_null( $helpgent_user ) ) {
        return $helpgent_user;
    }

    $guest = helpgent_get_valid_guest();

    $user = null;

    if ( $guest ) {
        $user = new User(
            $guest->id,
            $guest->email,
            $guest->name,
            "",
            ['helpgent_guest'],
            $guest->created_at,
            1,
            1
        );
    } else {
        $registered_user = wp_get_current_user();

        if ( ! $registered_user ) {
            return $user;
        }

        $user = new User(
            $registered_user->ID,
            $registered_user->user_email,
            $registered_user->display_name,
            $registered_user->user_nicename,
            $registered_user->roles,
            $registered_user->user_registered,
            ! in_array( 'administrator', $registered_user->roles )
        );

        $user->set_wp_user( $registered_user );
    }

    $helpgent_user = $user;

    return $user;
}

function helpgent_guest_login( string $token ): bool {
    wp_logout();

    $guest = Guest::query()->where( 'token', $token )->where( 'token_expires_at', '>', date( helpgent_date_time_format(), time() ) )->first();

    if ( $guest ) {
        /**
         * Remove login attempt data
         */
        session_start();
        unset( $_SESSION['guest_user_login_attempt'] );
        setcookie( "guest_user_login_attempt", "", time() - 100, '/' );
        $current_user_ip = helpgent_get_user_ip_address();
        helpgent_option()->update( "login_{$current_user_ip}", "" );
        session_write_close();
        /**
         * Login guest using cookie
         */
        return setcookie( "helpgent_guest_token", $guest->token, time() + MONTH_IN_SECONDS, '/' );
    }

    return false;
}

function helpgent_guest_logout() {
    return setcookie( "helpgent_guest_token", "", time() - 100, '/' );
}

function helpgent_get_guest_from_cookie() {
    if ( empty( $_COOKIE['helpgent_guest_token'] ) ) {
        return null;
    }

    $token = sanitize_text_field( wp_unslash( $_COOKIE['helpgent_guest_token'] ) );

    $helpgent_guest_user = Guest::query()->where( 'token', $token )->first();

    return $helpgent_guest_user;
}

/**
 * @return bool|WP_Error
 */
function helpgent_guest_middleware_handler() {
    $guest = helpgent_get_guest_from_cookie();

    if ( is_null( $guest ) ) {
        return false;
    }

    if ( $guest->token_expires_at < date( helpgent_date_time_format(), time() ) ) {
        return new WP_Error( 410, esc_html__( 'The guest user token has expired', 'helpgent' ) );
    }

    return true;
}