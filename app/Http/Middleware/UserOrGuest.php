<?php

namespace HelpGent\App\Http\Middleware;

use WP_REST_Request;
use WP_Error;
use HelpGent\WpMVC\Routing\Contracts\Middleware;

class UserOrGuest implements Middleware {
    /**
    * Handle an incoming request.
    *
    * @param  WP_REST_Request  $wp_rest_request
    * @return bool|WP_Error
    */
    public function handle( WP_REST_Request $wp_rest_request ) {
        if ( is_user_logged_in() ) {
            return ! current_user_can( 'manage_options' );
        }

        return helpgent_guest_middleware_handler();
    }
}