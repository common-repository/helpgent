<?php

namespace HelpGent\App\Http\Controllers\Admin;

use Exception;
use HelpGent\App\DTO\AdminResponseReadDTO;
use HelpGent\App\Http\Controllers\Controller;
use HelpGent\App\Models\Guest;
use HelpGent\App\Models\GuestMeta;
use HelpGent\App\Models\User;
use HelpGent\App\Models\UserMeta;
use HelpGent\App\Repositories\FormRepository;
use HelpGent\App\Repositories\ResponseRepository;
use HelpGent\App\Repositories\ResponseTagRepository;
use HelpGent\WpMVC\Database\Query\JoinClause;
use HelpGent\WpMVC\RequestValidator\Validator;
use HelpGent\WpMVC\Routing\Response;
use WP_REST_Request;

class ResponseController extends Controller {
    public ResponseRepository $repository;

    public FormRepository $form_repository;

    public ResponseTagRepository $response_tag_repository;

    public function __construct( ResponseRepository $repository, FormRepository $form_repository, ResponseTagRepository $response_tag_repository ) {
        $this->repository              = $repository;
        $this->form_repository         = $form_repository;
        $this->response_tag_repository = $response_tag_repository;
    }

    public function index( Validator $validator, WP_REST_Request $wp_rest_request ) {
        $validator->validate(
            [
                'form_id'      => 'required|numeric',
                'per_page'     => 'numeric',
                'page'         => 'numeric',
                'is_archive'   => 'required|numeric|accepted:0,1',
                'order_by'     => 'required|string|accepted:read,unread,latest,oldest',
                'is_completed' => 'numeric|accepted:0,1',
                'tag_ids'      => 'array',
                'search'       => 'string',
                'from_date'    => 'date:Y-m-d',
                'to_date'      => 'date:Y-m-d'
            ] 
        );

        if ( $validator->is_fail() ) {
            return Response::send(
                [
                    'messages' => $validator->errors
                ], 422
            );
        }

        $from_date = $wp_rest_request->get_param( 'from_date' );

        if ( ! empty( $from_date ) ) {
            $from_date = helpgent_now()->create_from_format( helpgent_date_time_format(), $from_date . ' 00:00:00' );
        }

        $to_date = $wp_rest_request->get_param( 'to_date' );

        if ( ! empty( $to_date ) ) {
            $to_date = helpgent_now()->create_from_format( helpgent_date_time_format(), $to_date . ' 24:00:00' );
        }

        $response_read_dto = new AdminResponseReadDTO(
            intval( $wp_rest_request->get_param( 'per_page' ) ),
            intval( $wp_rest_request->get_param( 'page' ) ),
            $wp_rest_request->get_param( 'order_by' ),
            intval( $wp_rest_request->get_param( 'is_archive' ) ),
            $wp_rest_request->has_param( 'tag_ids' ) ? $wp_rest_request->get_param( 'tag_ids' ) : [],
            (string) $wp_rest_request->get_param( 'search' ),
            $from_date,
            $to_date
        );

        $response_read_dto->set_form_id( intval( $wp_rest_request->get_param( 'form_id' ) ) );

        if ( $wp_rest_request->has_param( 'is_completed' ) ) {
            $response_read_dto->set_is_completed( intval( $wp_rest_request->get_param( 'is_completed' ) ) );
        }

        return Response::send(
            $this->repository->get( $response_read_dto )
        );
    }

    public function form( Validator $validator, WP_REST_Request $wp_rest_request ) {
        $validator->validate(
            [
                'form_id' => 'required|numeric'
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
                [
                    'form' => $this->repository->form( intval( $wp_rest_request->get_param( 'form_id' ) ) )
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

        try {
            $response_id = $wp_rest_request->get_param( 'id' );
            $delete      = $this->repository->delete( $response_id );

            if ( 0 === $delete ) {
                return Response::send(
                    [
                        'message' => esc_html__( 'Oops, something went wrong. Please try again.', 'helpgent' )
                    ], 500
                );
            }

            return Response::send(
                [
                    'message' => esc_html__( 'The response has been deleted successfully.', 'helpgent' )
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

    public function setup_tag( Validator $validator, WP_REST_Request $wp_rest_request ) {
        $validator->validate(
            [
                'tag_id'      => 'required|integer',
                'response_id' => 'required|integer'
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
            $this->response_tag_repository->add_or_remove( 
                $wp_rest_request->get_param( 'response_id' ), 
                $wp_rest_request->get_param( 'tag_id' ),
                get_current_user_id()
            );

            return Response::send(
                [
                    'message' => esc_html__( "The response tag has been updated successfully.", 'helpgent' )
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

    public function update_read( Validator $validator, WP_REST_Request $wp_rest_request ) {
        $validator->validate(
            [
                'id'      => 'required|numeric',
                'is_read' => 'required|integer|accepted:0,1'
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
            $this->repository->update_read( 
                $wp_rest_request->get_param( 'id' ), 
                $wp_rest_request->get_param( 'is_read' )
            );

            return Response::send(
                [
                    'message' => esc_html__( "Response read status updated successfully!", 'helpgent' )
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

    public function update_archive_status( Validator $validator, WP_REST_Request $wp_rest_request ) {
        $validator->validate(
            [
                'id'         => 'required|numeric',
                'is_archive' => 'required|integer|accepted:0,1'
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
            $this->repository->update_archive_status( 
                $wp_rest_request->get_param( 'id' ), 
                $wp_rest_request->get_param( 'is_archive' )
            );

            return Response::send(
                [
                    'message' => esc_html__( "Response archive status updated successfully!", 'helpgent' )
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

    public function user( Validator $validator, WP_REST_Request $wp_rest_request ) {
        $validator->validate(
            [
                'id' => 'numeric'
            ] 
        );

        if ( $validator->is_fail() ) {
            return Response::send(
                [
                    'messages' => $validator->errors
                ], 422
            );
        }

        $response_id = intval( $wp_rest_request->get_param( 'id' ) );

        $response = $this->repository->get_by_id( $response_id );

        if ( ! $response ) {
            return Response::send(
                [
                    'message' => esc_html__( "Response not found", "helpgent" )
                ], 404
            );
        }

        $user_id = $response->created_by;

        if ( '0' === $user_id ) {
            return Response::send(
                [
                    'message' => esc_html__( "User not found", "helpgent" )
                ], 404
            );
        }

        if ( '1' === $response->is_guest ) {
            $user = Guest::query( 'guest' )->select( 'guest.name', 'guest.email', 'guest.created_at', 'guest.number', 'guest.company', 'meta.meta_value as about' )->where( 'guest.id', $user_id )->left_join(
                GuestMeta::get_table_name() . ' as meta', function( JoinClause $join ) {
                    $join->on_column( 'guest.id', 'meta.user_id' )->on( "meta.meta_key", "about" );
                }
            )->first();
        } else {
            $user = User::query( 'user' )->select( 'user.ID as id', 'user.display_name as name', 'user.user_email as email', 'user.user_registered as created_at', 'meta.meta_value as about' )->where( 'user.ID', $user_id )->left_join(
                UserMeta::get_table_name() . ' as meta', function( JoinClause $join ) {
                    $join->on_column( "user.ID", "meta.user_id" )->on( "meta.meta_key", "helpgent_about" );
                }
            )->first();

            if ( $user ) {
                $user->avatar_url = get_avatar_url( $user->id );
            }
        }

        if ( empty( $user ) ) {
            return Response::send(
                [
                    'message' => esc_html__( "User not found", "helpgent" )
                ], 404
            );
        }

        return Response::send(
            [
                'user' => $user
            ]
        );
    }
}