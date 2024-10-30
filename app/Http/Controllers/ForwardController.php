<?php

namespace HelpGent\App\Http\Controllers;

use HelpGent\App\DTO\MessageDTO;
use HelpGent\App\DTO\MessageForwardDTO;
use HelpGent\App\DTO\ResponseDTO;
use HelpGent\App\Http\Controllers\Controller;
use HelpGent\App\Repositories\MessageRepository;
use HelpGent\App\Repositories\ForwardRepository;
use HelpGent\App\Repositories\ResponseRepository;
use HelpGent\WpMVC\RequestValidator\Validator;
use HelpGent\WpMVC\Routing\Response;
use WP_REST_Request;

class ForwardController extends Controller {
    public ForwardRepository $repository;

    public MessageRepository $message_repository;

    public ResponseRepository $response_repository;

    public function __construct( ForwardRepository $repository, MessageRepository $message_repository, ResponseRepository $response_repository ) {
        $this->repository          = $repository;
        $this->message_repository  = $message_repository;
        $this->response_repository = $response_repository;
    }

    public function to_user( Validator $validator, WP_REST_Request $wp_rest_request ) {
        $validator->validate(
            [
                'parent_message_id' => 'required|numeric',
                'user_id'           => 'required|numeric',
                'message'           => 'string'
            ]
        );

        if ( $validator->is_fail() ) {
            return Response::send(
                [
                    'messages' => $validator->errors
                ], 422
            );
        }

        $parent_message_id = (int) $wp_rest_request->get_param( 'parent_message_id' );
        $parent_message    = $this->message_repository->get_by_id( $parent_message_id );

        /**
         * If parent message not exists then response not found message
         */
        if ( ! $parent_message ) {
            return Response::send(
                [
                    'message' => esc_html__( "Sorry, the message could not be found.", 'helpgent' )
                ], 500
            );
        }

        /**
         * Getting message response record
         */
        $message_response = $this->response_repository->get_by_id( $parent_message->response_id );

        if ( ! $message_response ) {
            return Response::send(
                [
                    'message' => esc_html__( "The message response could not be found.", 'helpgent' )
                ], 500
            );
        }

        /**
         * Create new response
         */
        $user_id      = (int) $wp_rest_request->get_param( 'user_id' );
        $response_dto = new ResponseDTO( (int) $message_response->form_id, $user_id, 0, 1 );
        $response_id  = $this->response_repository->create( $response_dto );

        /**
         * Create message
         */
        $parent_forward_id = intval( $parent_message->forward_id );
        $message           = (string) $wp_rest_request->get_param( 'message' );
        $message_dto       = new MessageDTO( $response_id, $message, helpgent_get_current_user()->get_id(), 0, 0 );
        $message_dto->set_replied_by( 'forward' );

        /**
         * If parent message is a forwarded message then set the new message forward id = parent message forward id
         */
        if ( 0 !== $parent_forward_id ) {
            $message_dto->set_forward_id( $parent_forward_id );
        } else {
            /**
             * Checking if the message is already forwarded then use the for forwarded message id, otherwise creating a new forward item
             */
            $forward = $this->repository->get_by_message( (string) $parent_message->message, intval( $parent_message->attachment_id ) );

            if ( $forward ) {
                $forward_id = $forward->id;
            } else {
                $forward_dto = new MessageForwardDTO( $parent_message->message, $parent_message->attachment_id );
                $forward_id  = $this->repository->create( $forward_dto );
            }

            $message_dto->set_forward_id( $forward_id );
        }

        $this->message_repository->create( $message_dto );

        return Response::send(
            [
                'message' => esc_html__( "Messages forwarded successfully!", "helpgent" )
            ] 
        );
    }

    public function to_response( Validator $validator, WP_REST_Request $wp_rest_request ) {
        $validator->validate(
            [
                'parent_message_id' => 'required|numeric',
                'response_id'       => 'required|numeric',
                'message'           => 'string'
            ]
        );

        if ( $validator->is_fail() ) {
            return Response::send(
                [
                    'messages' => $validator->errors
                ], 422
            );
        }

        
        $parent_message_id = (int) $wp_rest_request->get_param( 'parent_message_id' );
        $parent_message    = $this->message_repository->get_by_id( $parent_message_id );

        /**
         * If parent message not exists then response not found message
         */
        if ( ! $parent_message ) {
            return Response::send(
                [
                    'message' => esc_html__( "Sorry, the message could not be found.", 'helpgent' )
                ], 500
            );
        }

        /**
         * Getting message response record
         */
        $message_response = $this->response_repository->get_by_id( $parent_message->response_id );

        if ( ! $message_response ) {
            return Response::send(
                [
                    'message' => esc_html__( "The message response could not be found.", 'helpgent' )
                ], 500
            );
        }

        $response_id = (int) $wp_rest_request->get_param( 'response_id' );
        $response    = $this->response_repository->get_by_id( $response_id );

        if ( ! $response ) {
            return Response::send(
                [
                    'message' => esc_html__( "Response not found.", 'helpgent' )
                ], 500
            );
        }

        $current_user = helpgent_get_current_user();

        if ( ! current_user_can( 'manage_options' ) ) {
            if ( intval( $message_response->created_by ) !== $current_user->id || intval( $message_response->is_guest ) !== $current_user->get_is_guest() ) {
                return Response::send(
                    [
                        'message' => esc_html__( "Sorry, this message cannot be forwarded.", 'helpgent' )
                    ], 500
                );
            }
            
            if ( intval( $response->created_by ) !== $current_user->id || intval( $response->is_guest ) !== $current_user->get_is_guest() ) {
                return Response::send(
                    [
                        'message' => esc_html__( "Sorry, messages in this response cannot be forwarded.", 'helpgent' )
                    ], 500
                );
            }
        }

        $parent_forward_id = intval( $parent_message->forward_id );
        $message           = (string) $wp_rest_request->get_param( 'message' );
        $message_dto       = new MessageDTO( $response_id, $message, $current_user->id, 0, $current_user->get_is_guest() );
        $message_dto->set_replied_by( 'forward' );

        /**
          * If parent message is a forwarded message then set the new message forward id = parent message forward id
          */
        if ( 0 !== $parent_forward_id ) {
            $message_dto->set_forward_id( $parent_forward_id );
        } else {
            /**
             * Checking if the message is already forwarded then use the for forwarded message id, otherwise creating a new forward item
             */
            $forward = $this->repository->get_by_message( (string) $parent_message->message, intval( $parent_message->attachment_id ) );

            if ( $forward ) {
                $forward_id = $forward->id;
            } else {
                $forward_dto = new MessageForwardDTO( $parent_message->message, $parent_message->attachment_id );
                $forward_id  = $this->repository->create( $forward_dto );
            }

            $message_dto->set_forward_id( $forward_id );
        }

        $this->message_repository->create( $message_dto );
        $this->response_repository->update_updated_at( $message_dto->get_response_id() );

        return Response::send(
            [
                'message' => esc_html__( "Messages forwarded successfully!", "helpgent" )
            ] 
        );
    }

    public function users( Validator $validator, WP_REST_Request $wp_rest_request ) {
        if ( helpgent_get_current_user()->get_is_user() ) {
            return Response::send(
                [
                    'message' => esc_html__( "Sorry, you are not eligible to access the user list", 'helpgent' )
                ], 500
            );
        }

        $validator->validate(
            [
                'search'   => 'string',
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

        return Response::send(
            $this->repository->users(
                intval( $wp_rest_request->get_param( 'per_page' ) ), 
                intval( $wp_rest_request->get_param( 'page' ) ),
                (string) $wp_rest_request->get_param( 'search' )
            )
        );
    }

    public function responses( Validator $validator, WP_REST_Request $wp_rest_request ) {
        $validator->validate(
            [
                'search'      => 'string',
                'per_page'    => 'numeric',
                'page'        => 'numeric',
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

        $user = helpgent_get_current_user();

        return Response::send(
            $this->repository->responses(
                intval( $wp_rest_request->get_param( 'response_id' ) ),
                intval( $wp_rest_request->get_param( 'per_page' ) ), 
                intval( $wp_rest_request->get_param( 'page' ) ),
                (string) $wp_rest_request->get_param( 'search' ),
                $user->get_is_user() ? $user->id : 0,
                $user->get_is_guest()
            )
        );
    }
}