<?php

namespace HelpGent\App\Http\Controllers\Admin;

use Exception;
use HelpGent\App\Http\Controllers\Controller;
use HelpGent\App\Repositories\ResponseRepository;
use HelpGent\App\Repositories\SummaryRepository;
use HelpGent\WpMVC\Routing\Response;
use WP_REST_Request;
use HelpGent\WpMVC\RequestValidator\Validator;

class SummaryController extends Controller {
    public SummaryRepository $summary_repository;

    public ResponseRepository $response_repository;

    public function __construct( SummaryRepository $summary_repository, ResponseRepository $response_repository ) {
        $this->summary_repository  = $summary_repository;
        $this->response_repository = $response_repository;
    }

    public function index( Validator $validator, WP_REST_Request $wp_rest_request ) {
        $validator->validate(
            [
                'id'           => 'required|numeric',
                'element_id'   => 'required|uuid',
                'element_type' => 'required|string'
            ]
        );

        if ( $validator->is_fail() ) {
            return Response::send(
                [
                    'messages' => $validator->errors
                ], 422
            );
        }

        try {
            return Response::send(
                $this->summary_repository->get( 
                    intval( $wp_rest_request->get_param( 'id' ) ), 
                    $wp_rest_request->get_param( 'element_id' ),
                    $wp_rest_request->get_param( 'element_type' ) ,
                    intval( $wp_rest_request->get_param( 'page' ) ),
                    intval( $wp_rest_request->get_param( 'per_page' ) )
                )
            );
        } catch ( Exception $ex ) {
            return Response::send(
                [
                    'message' => $ex->getMessage()
                ], $ex->getCode()
            );
        }
    }

    public function element( Validator $validator, WP_REST_Request $wp_rest_request ) {
        $validator->validate(
            [
                'id' => 'required|numeric'
            ]
        );

        if ( $validator->is_fail() ) {
            return Response::send(
                [
                    'messages' => $validator->errors
                ], 422
            );
        }

        $form_id = intval( $wp_rest_request->get_param( 'id' ) );

        try {
            return Response::send(
                [
                    'elements' => $this->summary_repository->get_elements( $form_id ),
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