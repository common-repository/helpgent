<?php

namespace HelpGent\App\Http\Controllers;

use Exception;
use WP_REST_Request;
use HelpGent\App\DTO\UserResponseReadDTO;
use HelpGent\App\Exceptions\RequestValidatorException;
use HelpGent\App\Http\Controllers\Controller;
use HelpGent\App\Models\ElementAnswers;
use HelpGent\App\Models\Form;
use HelpGent\App\Models\Message;
use HelpGent\App\Providers\EmailNotificationProvider;
use HelpGent\App\Repositories\AddressRepository;
use HelpGent\App\Repositories\ContactInfoRepository;
use HelpGent\App\Repositories\ElementAnswerRepository;
use HelpGent\App\Repositories\FormRepository;
use HelpGent\App\Repositories\OpenEndedTextInnerRepository;
use HelpGent\App\Repositories\ResponseRepository;
use HelpGent\App\Support\Element\Fields\Address;
use HelpGent\App\Support\Element\Fields\ContactInfo;
use HelpGent\App\Support\Element\Fields\OpenEnded;
use HelpGent\App\Utils\Repository;
use HelpGent\WpMVC\RequestValidator\Validator;
use HelpGent\WpMVC\Routing\Response;
use HelpGent\WpMVC\Database\Query\Builder;

class ResponseController extends Controller {
    public ResponseRepository $repository;

    public FormRepository $form_repository;

    public ElementAnswerRepository $element_answer_repository;

    public ContactInfoRepository $contact_info_repository;

    public OpenEndedTextInnerRepository $open_ended_text_inner_repository;

    public AddressRepository $address_repository;

    public function __construct( 
        ResponseRepository $repository, 
        FormRepository $form_repository, 
        ElementAnswerRepository $element_answer_repository,
        ContactInfoRepository $contact_info_repository,
        OpenEndedTextInnerRepository $open_ended_text_inner_repository,
        AddressRepository $address_repository
    ) {
        $this->repository                       = $repository;
        $this->form_repository                  = $form_repository;
        $this->element_answer_repository        = $element_answer_repository;
        $this->contact_info_repository          = $contact_info_repository;
        $this->open_ended_text_inner_repository = $open_ended_text_inner_repository;
        $this->address_repository               = $address_repository;
    }

    public function index( Validator $validator, WP_REST_Request $wp_rest_request ) {
        $validator->validate(
            [
                'per_page' => 'numeric',
                'page'     => 'numeric',
                'order_by' => 'required|string|accepted:read,unread,latest,oldest',
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

        $response_read_dto = new UserResponseReadDTO(
            intval( $wp_rest_request->get_param( 'per_page' ) ),
            intval( $wp_rest_request->get_param( 'page' ) ),
            $wp_rest_request->get_param( 'order_by' ),
            1,
            (string) $wp_rest_request->get_param( 'search' )
        );

        $user = helpgent_get_current_user();

        $response_read_dto->set_created_by( $user->id );
        $response_read_dto->set_is_guest( $user->get_is_guest() );

        return Response::send(
            $this->repository->user_get( $response_read_dto )
        );
    }

    public function get_agent( Validator $validator, WP_REST_Request $wp_rest_request ) {
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

        $message      = Message::query( "message" )->where( "response_id", $wp_rest_request->get_param( "id" ) )->order_by_desc( "id" );
        $current_user = helpgent_get_current_user();

        if ( $current_user->get_is_guest() ) {
            $message->where( "message.is_guest", 0 );
        } else {
            $message->where( "message.created_by", "!=", $current_user->get_id() );
        }

        $message = $message->first();

        if ( ! $message ) {
            return Response::send(
                [
                    'message' => esc_html__( "Agent not found", "helpgent" )
                ], 404
            );
        }

        $user = get_user_by( "id", $message->created_by );

        if ( ! $user ) {
            return Response::send(
                [
                    'message' => esc_html__( "Agent not found", "helpgent" )
                ], 404
            );
        }

        $agent = [
            "name"       => $user->display_name,
            "avatar_url" => get_avatar_url( $user )
        ];

        return Response::send(
            [
                'agent' => $agent
            ]
        );
    }

    public function get_form_info( Validator $validator, WP_REST_Request $wp_rest_request ) {
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

        $form = \HelpGent\App\Models\Response::query( "response" )->select( "form.id", "form.title", "form.content" )->where( "response.id", $wp_rest_request->get_param( 'id' ) )
        ->left_join( Form::get_table_name() . ' as form', 'response.form_id', 'form.id' )->first();

        if ( ! $form ) {
            return Response::send(
                [
                    'form' => esc_html__( "Form not found", "helpgent" )
                ], 404
            );
        }

        $form = Repository::bind_form_featured_image( $form );
        unset( $form->content );

        return Response::send(
            [
                'form' => $form
            ]
        );
    }

    public function store( Validator $validator, WP_REST_Request $wp_rest_request ) {
        try {
            $store = $this->store_submission_data( $validator, $wp_rest_request );

            $this->repository->mark_as_completed( $store['response']->id );
            /**
             * Temporary disable email notification if response created by unknown user.
             * TODO
             */
            if ( 0 === intval( $store['response']->created_by ) ) {   
                remove_action( 'helpgent_after_submit_form', [helpgent_singleton( EmailNotificationProvider::class ), 'send_new_response_notification'] );
            }

            do_action( 'helpgent_after_submit_form', $store['response'], $store['form'], $wp_rest_request );

            return Response::send( [], 201 );
        } catch ( Exception $ex ) {
            if ( 422 === $ex->getCode() ) {
                return Response::send(
                    [
                        'messages' => json_decode( $ex->getMessage() )
                    ], 422
                );
            } else {
                return Response::send( [ 'messages' => $ex->getMessage() ], $ex->getCode() ); 
            }
        }
    }

    /**
     * @param Validator $validator
     * @param WP_REST_Request $wp_rest_request
     * @return object|array 
     */
    public function store_submission_data( Validator $validator, WP_REST_Request $wp_rest_request, bool $allowed_to_save_full_data = false ) {
        $validator->validate(
            [
                'form_id'           => 'required|numeric',
                'response_token'    => 'required|string',
                'data'              => 'required|array',
                'attachment_tokens' => 'required|array'
            ]
        );

        if ( $validator->is_fail() ) {
            throw new Exception( json_encode( $validator->errors ), 422 );
        }

        $form_id = intval( $wp_rest_request->get_param( 'form_id' ) );

        $columns = ['form.id', 'form.title', 'form.status', 'form.content', 'form.created_by'];

        $form_query = Form::query( 'form' )->select( $columns )->where( 'form.id', $form_id )->where( 'form.status', 'publish' )->group_by( $columns );

        /**
         * @var Builder $form_query
         */
        $form_query     = apply_filters( 'helpgent_response_store_from_query', $form_query );
        $join_form_meta = apply_filters( 'helpgent_response_store_from_query_join_meta', false );

        if ( $join_form_meta ) {
            $form_query->left_join( "helpgent_form_meta as form_meta", "form_meta.form_id", "=", "form.id" );
        }

        $form = $form_query->first();

        if ( ! $form ) {
            throw new Exception( esc_html__( "Form not found.", "helpgent" ), 404 );
        }

        $form_content = json_decode( $form->content, true );

        if ( function_exists( "helpgent_pro" ) ) {
            $is_active_incompleted_data = intval( helpgent_get_nested_value( 'global.save_incomplete_data.isActive', $form_content ) );

            if ( ! $allowed_to_save_full_data && $is_active_incompleted_data ) {
                throw new Exception( esc_html__( 'Sending complete data in a single request is not allowed', 'helpgent' ), 500 );
            }
        }

        $response_token = $wp_rest_request->get_param( 'response_token' );
        $response_id    = $this->form_repository->get_meta_value( $form_id, $response_token );
        $response       = $this->repository->get_by_id( $response_id );

        if ( ! $response ) {
            throw new Exception( esc_html__( "Response not found.", "helpgent" ), 404 );
        }

        if ( '1' === $response->is_completed ) {
            throw new Exception( esc_html__( "Response Already Completed", "helpgent" ), 404 );
        }

        $data = $wp_rest_request->get_param( 'data' );

        $elements     = $form_content['elements'];
        $elements_ids = array_column( $elements, 'id' );

        $ignored_elements = helpgent_ignored_elements_on_submission();

        $request                    = new WP_REST_Request( 'POST', '/' );
        $validator->wp_rest_request = $request;
        $errors                     = [];
        $items                      = [];
        $nested_elements            = [];

        /**
         * Validate all element answers one by one
         */
        foreach ( $data as $key => $values ) {
            $element_key = array_search( $values['element_id'], $elements_ids );

            /**
             * Skip if element not found in db elements list
             */
            if ( ! is_int( $element_key ) ) {
                unset( $data[$key] );
                continue;
            }

            $element      = $elements[$element_key];
            $element_type = $element['element_type'];

            /**
             * Skip if element is not allowed to submit
             */
            if ( in_array( $element_type, $ignored_elements ) ) {
                unset( $data[$key] );
                continue;
            }

            $values['form_id'] = $form_id;

            $request->set_body_params( $values );

            try {
                $element_handler = helpgent_element_handler( $element_type );
                $element_handler->validate( $request, $validator, $element );

                if ( OpenEnded::get_key() !== $element_handler::get_key() && ContactInfo::get_key() !== $element_handler::get_key() ) {
                    $element_value = $values[$element_handler::get_key()] ?? null;

                    if ( 0 !== $element_value && empty( $element_value ) ) {
                        continue;
                    }
                }
    
                $dto                    = $element_handler->get_answer_dto( $values, $element, $response_id, $form_id );
                $items[]                = $dto;
                $values['element_type'] = $dto->get_element_type();

                /**
                 * Creating separate array to submit address|contact info|open ended text inner data
                 */
                if ( in_array( $dto->get_element_type(), [Address::get_key(), ContactInfo::get_key(), 'open_ended_text'] ) ) {
                    $values['element']         = $element;
                    $values['element_handler'] = $element_handler;
                    $nested_elements[]         = $values;
                }

            } catch ( RequestValidatorException $exception ) {
                $errors[$values['element_id']] = $exception->get_messages();
            }
        }

        if ( ! empty( $errors ) ) {
            throw new Exception( json_encode( $errors ), 422 );
        }

        /**
         * Insert elements
         */
        $this->element_answer_repository->creates( ...$items );

        if ( ! empty( $nested_elements ) ) {
            /**
             * Get inserted elements id to submit nested data
             */
            $elements = ElementAnswers::query()->select( 'id' )->where( 'response_id', $response_id )->where_in( 'element_type', ['address', 'contact_info', 'open_ended_text'] )->get();

            $open_ended_text_inner_items = [];
            $contact_infos_items         = [];
            $address_items               = [];

            /**
             * Create all nested element dto
             */
            foreach ( $nested_elements as $key => $values ) {
                $element_handler = $values['element_handler'];

                if ( $element_handler instanceof OpenEnded ) {
                    $open_ended_text_inner_items[] = $element_handler->get_text_inner_dto( $values, $values['element'], $elements[$key]->id );
                } elseif ( $element_handler instanceof ContactInfo ) {
                    $contact_infos_items[] = $element_handler->get_contact_info_dto( $values, $values['element'], $elements[$key]->id, $form );
                } elseif ( $element_handler instanceof Address ) {
                    $address_items[] = $element_handler->get_address_dto( $values, $values['element'], $elements[$key]->id );
                }
            }

            /**
             * Insert all nested data
             */
            $this->contact_info_repository->creates( ...$contact_infos_items );
            $this->open_ended_text_inner_repository->creates( ...$open_ended_text_inner_items );
            $this->address_repository->creates( ...$address_items );
        }

        $attachment_tokens = $wp_rest_request->get_param( 'attachment_tokens' );

        if ( ! empty( $attachment_tokens ) ) {
            $this->repository->add_attachments( $response->id, $attachment_tokens );
        }

        return [
            'response' => $response,
            'form'     => $form
        ];
    }
}