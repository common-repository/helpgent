<?php

namespace HelpGent\App\Http\Middleware;

use WP_REST_Request;
use WP_Error;
use HelpGent\WpMVC\Routing\Contracts\Middleware;

class CORS implements Middleware {
    /**
    * Handle an incoming request.
    *
    * @param  WP_REST_Request  $wp_rest_request
    * @return bool|WP_Error
    */
    public function handle( WP_REST_Request $wp_rest_request ) {
        $allowed = false;

        //phpcs:ignore WordPress.Security.ValidatedSanitizedInput.MissingUnslash, WordPress.Security.ValidatedSanitizedInput.InputNotSanitized
        if ( ! empty( $_SERVER['HTTP_REFERER'] ) && $this->get_url_host( $_SERVER['HTTP_REFERER'] ) === $this->get_url_host( get_site_url() ) ) {
            $allowed = true;
        }

        return apply_filters( 'helpgent_allowed_cors_origin', $allowed );
    }

    protected function get_url_host( string $url ) {
        return ltrim( parse_url( $url, PHP_URL_HOST ), 'www.' );
    }
}