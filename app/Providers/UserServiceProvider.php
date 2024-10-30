<?php

namespace HelpGent\App\Providers;

use HelpGent\WpMVC\Contracts\Provider;
use HelpGent\App\Repositories\ResponseRepository;

class UserServiceProvider implements Provider {
    public function boot() {
        add_action( 'deleted_user', [ $this, 'action_deleted_user' ] );
        add_action( 'wp_login', [ $this, 'action_wp_login' ], 10, 2 );
        add_filter( 'get_avatar_url', [ $this, 'filter_get_avatar_url' ], 10, 2 );
    }

    /**
     * Filters the avatar URL.
     *
     * @param string $url         The URL of the avatar.
     * @param mixed  $user The avatar to retrieve. Accepts a user ID, Gravatar MD5 hash, user email, WP_User object, WP_Post object, or WP_Comment object.
     * @return string The URL of the avatar.
     */
    public function filter_get_avatar_url( string $url, $user ) : string {
        /**
         * if user variable value is a user id.
         */
        if ( is_int( $user ) ) {
            $attachment_id = get_user_meta( $user, 'helpgent_avatar', true );
            /**
             * if user variable value is a user email.
             */
        } elseif ( is_string( $user ) ) {
            $user_object = get_user_by( 'email', $user );
            if ( $user_object instanceof \WP_User ) {
                $attachment_id = get_user_meta( $user_object->ID, 'helpgent_avatar', true );
            }
            /**
             * f user variable value is a wp user object.
             */
        } elseif ( $user instanceof \WP_User ) {
            $attachment_id = get_user_meta( $user->ID, 'helpgent_avatar', true );
        }

        if ( empty( $attachment_id ) ) {
            return $url;
        }

        $avatar_url = wp_get_attachment_url( $attachment_id );

        if ( ! $avatar_url ) {
            return $url;
        }

        return $avatar_url;
    }

    /**
     * Fires after the user has successfully logged in.
     *
     * @param string   $user_login Username.
     * @param \WP_User $user       WP_User object of the logged-in user.
     */
    public function action_wp_login( string $user_login, \WP_User $user ) : void {
        delete_user_meta( $user->ID, 'helpgent_delete_scheduled' );
    }

    /**
     * Fires immediately after a user is deleted from the site.
     *
     * @param int $id ID of the deleted user.
     */
    public function action_deleted_user( int $id ) : void {
        /**
         * @var ResponseRepository $response_repository
         */
        $response_repository = helpgent_singleton( ResponseRepository::class );
        $response_repository->delete_user_response( $id );
    }
}