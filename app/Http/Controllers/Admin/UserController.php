<?php

namespace HelpGent\App\Http\Controllers\Admin;

use Exception;
use HelpGent\App\Repositories\UserRepository;
use HelpGent\WpMVC\RequestValidator\Validator;
use HelpGent\App\Http\Controllers\Controller;
use HelpGent\WpMVC\Routing\Response;
use WP_REST_Request;

class UserController extends Controller {
    public UserRepository $repository;

    public function __construct( UserRepository $repository ) {
        $this->repository = $repository;
    }

    public function guests( Validator $validator, WP_REST_Request $wp_rest_request ) {
        $validator->validate(
            [
                'per_page' => 'numeric',
                'page'     => 'numeric'
            ]
        );

        if ( $validator->is_fail() ) {
            return Response::send(
                [
                    'messages' => $validator->errors
                ], 422
            );
        }

        $response = $this->repository->get_guest(
            intval( $wp_rest_request->get_param( 'per_page' ) ),
            intval( $wp_rest_request->get_param( 'page' ) )
        );

        return Response::send( $response );
    }

    public function export_guests() {
        try {
            return Response::send(
                [
                    'csv_path' => $this->repository->export(),
                    'message'  => esc_html__( 'The guest list has been successfully exported.', 'helpgent' )
                ]
            );
        } catch ( Exception $ex ) {
            return Response::send(
                [
                    'message' => $ex->getMessage()
                ], $ex->getCode()
            );
        }
    }
}