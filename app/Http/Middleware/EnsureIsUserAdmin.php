<?php

namespace HelpGent\App\Http\Middleware;

use WP_REST_Request;
use WP_Error;
use HelpGent\WpMVC\Routing\Contracts\Middleware;

class EnsureIsUserAdmin implements Middleware
{
    /**
    * Handle an incoming request.
    *
    * @param  WP_REST_Request  $wp_rest_request
    * @return bool|WP_Error
    */
    public function handle( WP_REST_Request $wp_rest_request ) {
        return current_user_can( 'manage_options' );
    }
}