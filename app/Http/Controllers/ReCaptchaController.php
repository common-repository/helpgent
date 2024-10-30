<?php

namespace HelpGent\App\Http\Controllers;

use HelpGent\App\Http\Controllers\Controller;
use HelpGent\App\Repositories\SettingsRepository;
use HelpGent\WpMVC\RequestValidator\Validator;
use HelpGent\WpMVC\Routing\Response;
use WP_REST_Request;

class ReCaptchaController extends Controller {
    public function site_verify( Validator $validator, WP_REST_Request $wp_rest_request ) {
        $validator->validate(
            [
                'client_response' => 'required|string'
            ]
        );

        if ( $validator->is_fail() ) {
            return Response::send(
                [
                    'messages' => $validator->errors
                ], 422
            );
        }

        /**
         * @var SettingsRepository $settings_repository
         */
        $settings_repository = helpgent_singleton( SettingsRepository::class );

        $response = wp_remote_post(
            'https://www.google.com/recaptcha/api/siteverify', [
                'body' => [
                    'secret'   => $settings_repository->get_by_key( "google_recaptcha_secret_key" ),
                    'response' => $wp_rest_request->get_param( 'client_response' ),
                ]
            ]
        );

        if ( 200 === wp_remote_retrieve_response_code( $response ) ) {
            return Response::send(
                [
                    'data' => json_decode( wp_remote_retrieve_body( $response ) )
                ]
            );
        }

        return Response::send(
            [
                'data' => [
                    'success' => false
                ]
            ]
        );
    }
}