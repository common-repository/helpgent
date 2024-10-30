<?php

namespace HelpGent\App\Http\Controllers\Admin;

use Exception;
use HelpGent\App\DTO\TagDTO;
use HelpGent\App\Http\Controllers\Controller;
use HelpGent\App\Repositories\TagRepository;
use HelpGent\WpMVC\RequestValidator\Validator;
use HelpGent\WpMVC\Routing\Response;
use WP_REST_Request;

class TagController extends Controller {
    public TagRepository $repository;

    public function __construct( TagRepository $repository ) {
        $this->repository = $repository;
    }

    public function index( Validator $validator, WP_REST_Request $wp_rest_request ) {
        $validator->validate(
            [
                'per_page' => 'numeric|min:1',
                'page'     => 'numeric|min:1',
                'search'   => 'string'
            ]
        );

        if ( $validator->is_fail() ) {
            return Response::send(
                [
                    'messages' => $validator->errors
                ], 422
            );
        }

        return Response::send(
            $this->repository->get(
                intval( $wp_rest_request->get_param( 'per_page' ) ),
                intval( $wp_rest_request->get_param( 'page' ) ),
                (string) $wp_rest_request->get_param( 'search' )
            )
        );
    }

    public function store( Validator $validator, WP_REST_Request $wp_rest_request ) {
        $validator->validate(
            [
                'title'   => 'required|string|max:255',
                'color'   => 'required|string|max:20',
                'form_id' => 'required|integer'
            ]
        );

        if ( $validator->is_fail() ) {
            return Response::send(
                [
                    'messages' => $validator->errors
                ], 422
            );
        }

        $tag_dto = new TagDTO(
            $wp_rest_request->get_param( 'title' ),
            $wp_rest_request->get_param( 'color' ),
            intval( $wp_rest_request->get_param( 'form_id' ) ),
            get_current_user_id()
        );

        try {
            $tag_id = $this->repository->create( $tag_dto );

            return Response::send(
                [
                    'tag_id'  => $tag_id,
                    'message' => esc_html__( 'A new tag has been created successfully.', 'helpgent' )
                ]
            );

        } catch ( Exception $exception ) {
            $code = $exception->getCode();

            if ( 500 === $code ) {
                return Response::send( json_decode( $exception->getMessage(), true ),  $code );
            }

            return Response::send(
                [
                    'message' => $exception->getMessage()
                ],
                $code
            );
        }
    }

    public function update( Validator $validator, WP_REST_Request $wp_rest_request ) {
        $validator->validate(
            [
                'id'      => 'required|numeric',
                'title'   => 'required|string|max:255',
                'color'   => 'required|string|max:20',
                'form_id' => 'required|integer'
            ]
        );

        if ( $validator->is_fail() ) {
            return Response::send(
                [
                    'messages' => $validator->errors
                ], 422
            );
        }

        $tag_dto = new TagDTO(
            $wp_rest_request->get_param( 'title' ),
            $wp_rest_request->get_param( 'color' ),
            intval( $wp_rest_request->get_param( 'form_id' ) ),
            get_current_user_id()
        );
        $tag_dto->set_id( $wp_rest_request->get_param( 'id' ) );

        try {
            $this->repository->update( $tag_dto );

            return Response::send(
                [
                    'message' => esc_html__( 'The tag has been updated successfully.', 'helpgent' )
                ]
            );

        } catch ( Exception $exception ) {
            return Response::send(
                [
                    'message' => $exception->getMessage()
                ],
                $exception->getCode()
            );
        }
    }

    public function delete( Validator $validator, WP_REST_Request $wp_rest_request ) {
        $validator->validate(
            [
                'id' => 'required|numeric',
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
            $delete = $this->repository->delete( $wp_rest_request->get_param( 'id' ) );

            if ( 0 === $delete ) {
                return Response::send(
                    [
                        'message' => esc_html__( 'Oops, something went wrong. Please try again.', 'helpgent' )
                    ], 500
                );
            }

            return Response::send(
                [
                    'message' => esc_html__( 'The tag has been deleted successfully.', 'helpgent' )
                ]
            );
        } catch ( Exception $exception ) {
            return Response::send(
                [
                    'message' => $exception->getMessage()
                ],
                $exception->getCode()
            );
        }
    }
}