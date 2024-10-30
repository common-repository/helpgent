<?php

namespace HelpGent\App\Http\Controllers;

use Exception;
use HelpGent\App\Repositories\AnswerRepository;
use HelpGent\WpMVC\RequestValidator\Validator;
use HelpGent\WpMVC\Routing\Response;
use WP_REST_Request;

class AnswerController extends Controller {
    public AnswerRepository $answer_repository;

    public function __construct( AnswerRepository $answer_repository ) {
        $this->answer_repository = $answer_repository;
    }

    public function index( Validator $validator, WP_REST_Request $wp_rest_request ) {
        $validator->validate(
            [
                'response_id' => 'required|numeric'
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
            return Response::send( $this->answer_repository->get( $wp_rest_request->get_param( 'response_id' ) ) );
        } catch ( Exception $ex ) {
            return Response::send(
                [
                    'message' => $ex->getMessage()
                ], $ex->getCode()
            );
        }
    }
}


