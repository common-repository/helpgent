<?php

namespace HelpGent\App\Providers\Admin;

use HelpGent\WpMVC\Contracts\Provider;

class UserDashboardPageProvider implements Provider {
    public function boot() {}

    public static function setup_dashboard_page(): void {
        $user_dashboard_page_id     = absint( helpgent_get_setting( 'user_dashboard_page', 0 ) );
        $user_dashboard_page_status = ! empty( $user_dashboard_page_id ) ? get_post_status( $user_dashboard_page_id ) : false;

        if ( ! empty( $user_dashboard_page_id ) && false !== $user_dashboard_page_status ) {
            return;
        }

        $dashboard_page_id = self::create_user_dashboard_page();

        if ( ! $dashboard_page_id ) {
            return;
        }

        helpgent_update_setting( 'user_dashboard_page', $dashboard_page_id );
    }

    protected static function create_user_dashboard_page(): ?int {
        $post_id = wp_insert_post(
            [
                'post_type'    => 'page',
                'post_title'   => 'Dashboard',
                'post_status'  => 'publish',
                'post_content' => '<!-- wp:shortcode -->
                [helpgent_user_dashboard]
                <!-- /wp:shortcode -->',
            ]
        );

        if ( is_wp_error( $post_id ) ) {
            return null;
        }

        return $post_id;
    }
}