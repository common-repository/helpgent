<?php

namespace HelpGent\App\Http\Controllers;

use Exception;
use HelpGent\App\DTO\MessageDTO;
use HelpGent\App\Http\Controllers\Controller;
use HelpGent\App\Models\Form;
use HelpGent\App\Models\Message;
use HelpGent\App\Repositories\MessageRepository;
use HelpGent\App\Repositories\ResponseRepository;
use HelpGent\WpMVC\RequestValidator\Validator;
use HelpGent\WpMVC\Routing\Response;
use WP_REST_Request;
use HelpGent\WpMVC\Database\Query\Builder;

class MessageController extends Controller {
    public ResponseRepository $response_repository;

    public MessageRepository $repository;

    public function __construct( MessageRepository $repository, ResponseRepository $response_repository ) {
        $this->repository          = $repository;
        $this->response_repository = $response_repository;
    }

    public function index( Validator $validator, WP_REST_Request $wp_rest_request ) {
        $validator->validate(
            [
                'response_id' => 'required|numeric',
                'per_page'    => 'numeric',
                'page'        => 'numeric',
                'search'      => 'string'
            ]
        );

        if ( $validator->is_fail() ) {
            return Response::send(
                [
                    'messages' => $validator->errors
                ], 422
            );
        }

        $user            = helpgent_get_current_user();
        $response_id     = intval( $wp_rest_request->get_param( 'response_id' ) );
        $is_user_allowed = apply_filters( 'helpgent_is_user_allowed_response_message', false, $response_id );

        if ( ! $is_user_allowed ) {
            if ( $user->get_is_user() && ! $this->response_repository->first_by_created_by( $response_id, $user->id, $user->get_is_guest() ) ) {
                return Response::send(
                    [
                        'message' => esc_html__( "Sorry, access to this response's conversations is not allowed.", 'helpgent' )
                    ], 500
                );
            }
        }

        return Response::send(
            $this->repository->get( 
                $response_id, 
                intval( $wp_rest_request->get_param( 'per_page' ) ), 
                intval( $wp_rest_request->get_param( 'page' ) ), 
                (string) $wp_rest_request->get_param( 'search' ) 
            )
        );
    }

    public function store( Validator $validator, WP_REST_Request $wp_rest_request ) {
        $validator->validate(
            [
                'response_id'   => 'required|numeric',
                'replied_by'    => 'required|string|max:50|accepted:video,voice,text,reply,screen_record',
                'message'       => 'string',
                'attachment_id' => 'integer',
                'parent_id'     => 'integer|min:1'
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
         * Requested message and attachment validation
         */
        $attachment_id = intval( $wp_rest_request->get_param( 'attachment_id' ) );
        $message       = (string) $wp_rest_request->get_param( 'message' );
        
        if ( empty( $message ) && 0 >= $attachment_id ) {
            return Response::send(
                [
                    'messages' => [
                        'message' => [
                            "The message field is required"
                        ]
                    ]
                ], 422
            );
        }

        $user        = helpgent_get_current_user();
        $response_id = intval( $wp_rest_request->get_param( 'response_id' ) );

        $is_user_allowed = apply_filters( 'helpgent_is_user_allowed_response_message', false, $response_id );

        if ( ! $is_user_allowed ) {
            if ( $user->get_is_user() && ! $this->response_repository->first_by_created_by( $response_id, $user->id, $user->get_is_guest() ) ) {
                return Response::send(
                    [
                        'message' => esc_html__( "Sorry, access to this response's conversations is not allowed.", 'helpgent' )
                    ], 500
                );
            }
        }

        $response = $this->response_repository->get_by_id( $response_id );

        $columns = ['form.id', 'form.title', 'form.status', 'form.content', 'form.created_by'];

        $form_query = Form::query( 'form' )->select( $columns )->where( 'form.id', $response->form_id )->group_by( $columns );

        /**
         * @var Builder $form_query
         */
        $form_query     = apply_filters( 'helpgent_message_store_from_query', $form_query );
        $join_form_meta = apply_filters( 'helpgent_message_store_from_query_join_meta', false );

        if ( $join_form_meta ) {
            $form_query->left_join( "helpgent_form_meta as form_meta", "form_meta.form_id", "=", "form.id" );
        }

        $form = $form_query->first();

        $message_dto = new MessageDTO(
            $response_id,
            $message,
            $user->id,
            $attachment_id,
            $user->get_is_guest(),
            intval( $wp_rest_request->get_param( 'parent_id' ) )
        );
        $message_dto->set_form_id( $form->id );
        $message_dto->set_replied_by( $wp_rest_request->get_param( 'replied_by' ) );

        try {

            do_action( 'helpgent_before_store_message', $message_dto, $wp_rest_request, $form, $response );
            
            $message_id = $this->repository->create( $message_dto );

            $this->response_repository->update_updated_at( $response_id );

            $message_dto->set_id( $message_id );

            do_action( 'helpgent_after_store_message', $message_dto, $wp_rest_request, $form, $response );
            return Response::send( [], 201 );
        } catch ( Exception $exception ) {
            return Response::send(
                [
                    'message' => $exception->getMessage()
                ],
                $exception->getCode()
            );
        }
    }

    public function update( Validator $validator, WP_REST_Request $wp_rest_request ) {
        $validator->validate(
            [
                'id'          => 'required|numeric',
                'response_id' => 'required|numeric',
                'message'     => 'required|string'
            ]
        );

        if ( $validator->is_fail() ) {
            return Response::send(
                [
                    'messages' => $validator->errors
                ], 422
            );
        }

        $user        = helpgent_get_current_user();
        $response_id = intval( $wp_rest_request->get_param( 'response_id' ) );

        $is_user_allowed = apply_filters( 'helpgent_is_user_allowed_response_message', false, $response_id );

        if ( ! $is_user_allowed ) {
            if ( $user->get_is_user() && ! $this->response_repository->first_by_created_by( $response_id, $user->id, $user->get_is_guest() ) ) {
                return Response::send(
                    [
                        'message' => esc_html__( "Sorry, access to this response's conversations is not allowed.", 'helpgent' )
                    ], 500
                );
            }
        }

        $message = $wp_rest_request->get_param( 'message' );

        $message_dto = new MessageDTO( $response_id, $message );

        $message_dto->set_id( intval( $wp_rest_request->get_param( 'id' ) ) );

        try {
            do_action( 'helpgent_before_update_message', $message_dto, $wp_rest_request );

            $this->repository->update( $message_dto );

            do_action( 'helpgent_before_update_message', $message_dto, $wp_rest_request );
            return Response::send( [] );
        } catch ( Exception $exception ) {
            return Response::send(
                [
                    'message' => $exception->getMessage()
                ],
                $exception->getCode()
            );
        }
    }

    public function read( Validator $validator, WP_REST_Request $wp_rest_request ) {
        $validator->validate(
            [
                'id'          => 'required|numeric',
                'response_id' => 'required|numeric',
                'is_read'     => 'required|accepted:0,1'
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
            $this->repository->update_read_status(
                absint( $wp_rest_request->get_param( 'id' ) ),
                absint( $wp_rest_request->get_param( 'response_id' ) ),
                $wp_rest_request->get_param( 'is_read' )
            );
            return Response::send( [] );
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
                'id'          => 'required|numeric',
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

        $user        = helpgent_get_current_user();
        $response_id = intval( $wp_rest_request->get_param( 'response_id' ) );

        $is_user_allowed = apply_filters( 'helpgent_is_user_allowed_response_message', false, $response_id );

        if ( ! $is_user_allowed ) {
            if ( $user->get_is_user() && ! $this->response_repository->first_by_created_by( $response_id, $user->id, $user->get_is_guest() ) ) {
                return Response::send(
                    [
                        'message' => esc_html__( "Sorry, access to this response's conversations is not allowed.", 'helpgent' )
                    ], 500
                );
            }
        }
    
        try {
            $this->repository->delete( intval( $wp_rest_request->get_param( 'id' ) ), $response_id );
            return Response::send( [] );
        } catch ( Exception $exception ) {
            return Response::send(
                [
                    'message' => $exception->getMessage()
                ],
                $exception->getCode()
            );
        }
    }

    public function attachment( Validator $validator, WP_REST_Request $wp_rest_request ) {
        $validator->validate(
            [
                'type'        => 'required|string|accepted:all,voice,video,link',
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

        $user        = helpgent_get_current_user();
        $response_id = intval( $wp_rest_request->get_param( 'response_id' ) );

        $is_user_allowed = apply_filters( 'helpgent_is_user_allowed_response_message', false, $response_id );

        if ( ! $is_user_allowed ) {
            if ( $user->get_is_user() && ! $this->response_repository->first_by_created_by( $response_id, $user->id, $user->get_is_guest() ) ) {
                return Response::send(
                    [
                        'message' => esc_html__( "Sorry, access to this response's conversations is not allowed.", 'helpgent' )
                    ], 500
                );
            }
        }

        return Response::send(
            $this->repository->attachment( 
                $response_id, 
                $wp_rest_request->get_param( 'type' ),
                intval( $wp_rest_request->get_param( 'per_page' ) ), 
                intval( $wp_rest_request->get_param( 'page' ) )
            )
        );
    }

    public function get_by_id( int $id ) {
        return Message::query()->where( 'id', $id )->first();
    }
}