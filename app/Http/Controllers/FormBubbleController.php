<?php

namespace HelpGent\App\Http\Controllers;

use HelpGent\App\Http\Controllers\Controller;
use HelpGent\App\Repositories\FormRepository;
use HelpGent\WpMVC\RequestValidator\Validator;
use HelpGent\WpMVC\Routing\Response;
use WP_REST_Request;

class FormBubbleController extends Controller {
    public function index( Validator $validator, WP_REST_Request $wp_rest_request, FormRepository $form_repository ) {
        $validator->validate(
            [
                'page_id' => 'required|numeric',
            ]
        );

        if ( $validator->is_fail() ) {
            return Response::send(
                [
                    'messages' => $validator->errors
                ], 422
            );
        }
        $forms = $form_repository->get_bubble_by_page_id( intval( $wp_rest_request->get_param( 'page_id' ) ) );

        return Response::send(
            [
                'forms' => $forms
            ]
        );
    }
}