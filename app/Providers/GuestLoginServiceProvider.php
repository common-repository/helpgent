<?php

namespace HelpGent\App\Providers;

use HelpGent\App\Repositories\FormRepository;
use HelpGent\App\Repositories\ResponseRepository;
use HelpGent\WpMVC\Contracts\Provider;

class GuestLoginServiceProvider implements Provider {
    public function boot() {
        add_action( 'init', [ $this, 'action_init' ] );
        add_action( 'wp_login', [ $this, 'action_wp_login' ], 10, 2 );
    }

    /**
     * Fires after the user has successfully logged in.
     *
     * @param string   $user_login Username.
     * @param \WP_User $user       WP_User object of the logged-in user.
     */
    public function action_wp_login( string $user_login, \WP_User $user ) : void {
        helpgent_guest_logout();
    }

    /**
     * Fires after WordPress has finished loading but before any headers are sent.
     *
     */
    public function action_init() : void {
        if ( ! empty( $_GET['hg_token'] ) ) { //phpcs:ignore WordPress.Security.NonceVerification.Recommended
            $token = sanitize_text_field( wp_unslash( $_GET['hg_token'] ) ); //phpcs:ignore WordPress.Security.NonceVerification.Recommended
            helpgent_guest_login( $token );

            if ( empty( $_GET['hg_response_token'] ) || empty( $_GET['form_id'] ) ) { //phpcs:ignore WordPress.Security.NonceVerification.Recommended
                wp_safe_redirect( helpgent_get_dashboard_page_url() );
                exit;
            }

            $form_id        = sanitize_text_field( wp_unslash( $_GET['form_id'] ) ); //phpcs:ignore WordPress.Security.NonceVerification.Recommended
            $response_token = sanitize_text_field( wp_unslash( $_GET['hg_response_token'] ) );//phpcs:ignore WordPress.Security.NonceVerification.Recommended

            /**
             * @var FormRepository $form_repository
             */
            $form_repository = helpgent_singleton( FormRepository::class );
            $response_id     = $form_repository->get_meta_value( $form_id, $response_token );

            if ( $response_id ) {
                /**
                 * @var ResponseRepository $response_repository
                 */
                $response_repository = helpgent_singleton( ResponseRepository::class );

                if ( ! empty( $_GET['verify'] ) ) { //phpcs:ignore WordPress.Security.NonceVerification.Recommended
                    $response_repository->verify( $response_id );
                }

                if ( ! empty( $_GET['cancel'] ) ) { //phpcs:ignore WordPress.Security.NonceVerification.Recommended
                    $response_repository->cancel( $response_id );
                }

                $form_repository->delete_meta( $form_id, $response_token );
            }

            wp_safe_redirect( helpgent_get_dashboard_page_url() );
            exit;
        }
    }
}