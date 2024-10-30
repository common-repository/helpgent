<?php

namespace HelpGent\App\Http\Controllers\Admin;

use Exception;
use HelpGent\App\DTO\FormDTO;
use HelpGent\App\Http\Controllers\Controller;
use HelpGent\App\Models\ContactInfo;
use HelpGent\App\Models\ElementAnswers;
use HelpGent\App\Repositories\FormRepository;
use HelpGent\App\Repositories\SettingsRepository;
use HelpGent\App\Repositories\TagRepository;
use HelpGent\WpMVC\Database\Query\JoinClause;
use HelpGent\WpMVC\RequestValidator\Validator;
use HelpGent\WpMVC\Routing\Response;
use WP_REST_Request;

class FormController extends Controller {
    public FormRepository $form_repository;

    public SettingsRepository $settings_repository;

    public TagRepository $tag_repository;

    public function __construct( FormRepository $form_repository, SettingsRepository $settings_repository, TagRepository $tag_repository ) {
        $this->form_repository     = $form_repository;
        $this->settings_repository = $settings_repository;
        $this->tag_repository      = $tag_repository;
    }

    public function index( Validator $validator, WP_REST_Request $wp_rest_request ) {
        $validator->validate(
            [
                'per_page'   => 'numeric',
                'page'       => 'numeric',
                's'          => 'string|max:255',
                'type'       => 'string|max:100',
                'date_type'  => 'string|accepted:all,today,yesterday,last_week,last_month,date_frame',
                'sort'       => 'string|accepted:last_modified,date_created,alphabetical,last_submission,unread',
                'date_frame' => 'array',
                'status'     => 'string|accepted:all,draft,publish'
            ]
        );

        if ( $validator->is_fail() ) {
            return Response::send(
                [
                    'messages' => $validator->errors
                ], 422
            );
        }

        $type       = $wp_rest_request->get_param( 'type' );
        $date_type  = $wp_rest_request->get_param( 'date_type' );
        $date_frame = $wp_rest_request->get_param( 'date_frame' );

        if ( empty( $type ) ) {
            $type = 'all';
        }

        if ( empty( $date_type ) ) {
            $date_type = 'all';
        }

        if ( empty( $date_frame ) ) {
            $date_frame = [];
        }

        $response = $this->form_repository->get(
            intval( $wp_rest_request->get_param( 'per_page' ) ),
            intval( $wp_rest_request->get_param( 'page' ) ),
            (string) $wp_rest_request->get_param( 's' ),
            (string) $wp_rest_request->get_param( 'sort' ),
            (string) $wp_rest_request->get_param( 'status' ),
            $date_type,
            $date_frame,
            $type
        );

        return Response::send( $response );
    }

    public function store( Validator $validator, WP_REST_Request $wp_rest_request ) {
        $validator->validate(
            [
                'title'           => 'required|string|max:255|min:5',
                'status'          => 'required|string|accepted:publish,draft',
                'content'         => 'required|json',
                'is_chat_bubble'  => 'required|accepted:0,1',
                'available_pages' => 'required|array'
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
            $form_dto = new FormDTO(
                $wp_rest_request->get_param( 'title' ),
                $wp_rest_request->get_param( 'status' ),
                $wp_rest_request->get_param( 'content' ),
                intval( $wp_rest_request->get_param( 'is_chat_bubble' ) ),
                $wp_rest_request->get_param( 'available_pages' ),
                get_current_user_id(),
            );

            $form_id = $this->form_repository->create( $form_dto );

            $form_dto->set_id( $form_id );

            do_action( "helpgent_after_create_form", $form_dto );

            return Response::send(
                [
                    'form_id' => $form_id,
                    'message' => esc_html__( 'The form has been created successfully.', 'helpgent' )
                ], 201
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

    public function show( Validator $validator, WP_REST_Request $wp_rest_request ) {
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
            return Response::send(
                [
                    'form'                    => $this->form_repository->get_single( intval( $wp_rest_request->get_param( 'id' ) ) ),
                    'email_template_settings' => $this->settings_repository->get_email_template_settings()
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

    public function duplicate( Validator $validator, WP_REST_Request $wp_rest_request ) {
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
            $main_form = $this->form_repository->get_single( intval( $wp_rest_request->get_param( 'id' ) ) );

            $new_form_dto = new FormDTO(
                $main_form->title . ' copy',
                'draft',
                $main_form->content,
                intval( $main_form->is_chat_bubble ),
                $main_form->available_pages,
                get_current_user_id(),
            );

            $new_form_id = $this->form_repository->create( $new_form_dto );

            $new_form_dto->set_id( $new_form_id );

            do_action( "helpgent_after_create_form", $new_form_dto );

            return Response::send(
                [
                    'form_id' => $new_form_id,
                    'message' => esc_html__( 'The form has been duplicated successfully.', 'helpgent' )
                ], 201
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

    public function update( Validator $validator, WP_REST_Request $wp_rest_request ) {
        $validator->validate(
            [
                'id'                      => 'required|numeric',
                'title'                   => 'required|string|max:255|min:5',
                'status'                  => 'required|string|accepted:publish,draft',
                'content'                 => 'required|json',
                'email_template_settings' => 'json',
                'is_chat_bubble'          => 'required|accepted:0,1',
                'available_pages'         => 'required|array'
            ]
        );

        if ( $validator->is_fail() ) {
            return Response::send(
                [
                    'messages' => $validator->errors
                ], 422
            );
        }

        $form_dto = new FormDTO(
            $wp_rest_request->get_param( 'title' ),
            $wp_rest_request->get_param( 'status' ),
            $wp_rest_request->get_param( 'content' ),
            intval( $wp_rest_request->get_param( 'is_chat_bubble' ) ),
            $wp_rest_request->get_param( 'available_pages' ),
            0
        );

        $form_dto->set_id( $wp_rest_request->get_param( 'id' ) );

        try {
            $update = $this->form_repository->update( $form_dto );

            do_action( 'helpgent_after_update_form', $form_dto );

            $email_template = (string) $wp_rest_request->get_param( 'email_template_settings' );

            if ( ! empty( $email_template ) ) {
                $this->settings_repository->update_email_template_settings( $email_template );
            }

            if ( 1 !== $update ) {
                return Response::send(
                    [
                        'message' => esc_html__( 'Oops, something went wrong. Please try again.', 'helpgent' )
                    ], 500
                );
            }

            return Response::send(
                [
                    'message' => esc_html__( 'The form has been updated successfully.', 'helpgent' )
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

    public function update_status( Validator $validator, WP_REST_Request $wp_rest_request ) {
        $validator->validate(
            [
                'id'     => 'required|numeric',
                'status' => 'required|string|accepted:publish,draft'
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
            $this->form_repository->update_status(
                $wp_rest_request->get_param( 'id' ),
                $wp_rest_request->get_param( 'status' )
            );

            return Response::send(
                [
                    'message' => esc_html__( "The form status has been updated successfully.", 'helpgent' )
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

    public function update_title( Validator $validator, WP_REST_Request $wp_rest_request ) {
        $validator->validate(
            [
                'id'    => 'required|numeric',
                'title' => 'required|string|max:255|min:5'
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
            $this->form_repository->update_title(
                $wp_rest_request->get_param( 'id' ),
                $wp_rest_request->get_param( 'title' )
            );

            return Response::send(
                [
                    'message' => esc_html__( "The form title has been updated successfully.", 'helpgent' )
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
            $form_id = $wp_rest_request->get_param( 'id' );
            $form    = $this->form_repository->delete( $form_id );

            do_action( 'helpgent_after_delete_form', $form_id, $form );

            return Response::send(
                [
                    'message' => esc_html__( 'The form has been deleted successfully.', 'helpgent' )
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

    public function delete_bulk_form( Validator $validator, WP_REST_Request $wp_rest_request ) {
        $validator->validate(
            [
                'ids' => 'required|array'
            ]
        );

        if ( $validator->is_fail() ) {
            return Response::send(
                [
                    'messages' => $validator->errors
                ], 422
            );
        }

        $form_ids = $wp_rest_request->get_param( 'ids' );

        if ( empty( $form_ids ) || ! helpgent_is_one_level_array( $form_ids ) ) {
            return Response::send(
                [
                    'message' => esc_html__( 'Sorry, Something was wrong.', 'helpgent' )
                ]
            );
        }

        try {
            $forms = $this->form_repository->deletes( $form_ids );

            foreach ( $forms as $form ) {
                do_action( 'helpgent_after_delete_form', $form->id, $form );
            }

            return Response::send(
                [
                    'message' => esc_html__( 'Forms have been successfully deleted.', 'helpgent' )
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

    public function update_bulk_status( Validator $validator, WP_REST_Request $wp_rest_request ) {
        $validator->validate(
            [
                'ids'    => 'required|array',
                'status' => 'required|string|accepted:publish,draft'
            ]
        );

        if ( $validator->is_fail() ) {
            return Response::send(
                [
                    'messages' => $validator->errors
                ], 422
            );
        }

        $form_ids = $wp_rest_request->get_param( 'ids' );

        if ( empty( $form_ids ) || ! helpgent_is_one_level_array( $form_ids ) ) {
            return Response::send(
                [
                    'message' => esc_html__( 'Sorry, Something was wrong.', 'helpgent' )
                ]
            );
        }

        try {
            $this->form_repository->update_bulk_status( $form_ids, $wp_rest_request->get_param( 'status' ) );

            return Response::send(
                [
                    'message' => esc_html__( 'Forms status have been updated successfully.', 'helpgent' )
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

    public function auto_save( Validator $validator, WP_REST_Request $wp_rest_request ) {
        $validator->validate(
            [
                'id'    => 'required|numeric',
                'draft' => 'required|json'
            ]
        );

        if ( $validator->is_fail() ) {
            return Response::send(
                [
                    'messages' => $validator->errors
                ], 422
            );
        }

        $this->form_repository->update_draft(
            intval( $wp_rest_request->get_param( 'id' ) ),
            $wp_rest_request->get_param( 'draft' )
        );

        return Response::send( ['message' => esc_html__( "Draft content saved", 'helpgent' )] );
    }

    public function tags( Validator $validator, WP_REST_Request $wp_rest_request ) {
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

        return Response::send(
            [
                'tags' => $this->tag_repository->get_by_form_id( intval( $wp_rest_request->get_param( 'id' ) ) )
            ]
        );
    }

    public function select( Validator $validator, WP_REST_Request $wp_rest_request ) {
        $validator->validate(
            [
                'per_page' => 'numeric',
                'page'     => 'numeric',
                'search'   => 'string',
                'ids'      => 'array'
            ]
        );

        if ( $validator->is_fail() ) {
            return Response::send(
                [
                    'messages' => $validator->errors
                ], 422
            );
        }

        $ids = $wp_rest_request->get_param( 'ids' );

        if ( $wp_rest_request->has_param( 'ids' ) && ! helpgent_is_one_level_array( $ids ) ) {
            return Response::send(
                [
                    'messages' => [
                        'ids' => "Ids must be one level array"
                    ]
                ], 422
            );
        }

        $forms = $this->form_repository->select_list(
            intval( $wp_rest_request->get_param( 'per_page' ) ),
            intval( $wp_rest_request->get_param( 'page' ) ),
            (string) $wp_rest_request->get_param( 'search' ),
            is_array( $ids ) ? $ids : []
        );

        $forms = array_map( fn( $form ) => [ 'value' => $form->id, 'label' =>  $form->title ], $forms );

        return Response::send( $forms );
    }

    public function insert_media( Validator $validator, WP_REST_Request $wp_rest_request ) {
        $validator->validate(
            [
                'url' => 'required|url'
            ]
        );

        if ( $validator->is_fail() ) {
            return Response::send(
                [
                    'messages' => $validator->errors
                ], 422
            );
        }

        $attachment_url = $wp_rest_request->get_param( 'url' );

        try {
            $data = [
                'data' => [
                    'status' => 201
                ]
            ];
            return Response::send( array_merge( $this->form_repository->insert_media( $attachment_url ), $data ), 201 );
        } catch ( Exception $exception ) {
            return Response::send(
                [
                    'message' => $exception->getMessage()
                ],
                $exception->getCode()
            );
        }
    }

    public function delete_element_option( Validator $validator, WP_REST_Request $wp_rest_request ) {
        $validator->validate(
            [
                'id'         => 'required|numeric',
                'element_id' => 'required|uuid',
                'value'      => 'required|string'
            ]
        );

        if ( $validator->is_fail() ) {
            return Response::send(
                [
                    'messages' => $validator->errors
                ], 422
            );
        }

        $response = [
            'message' => esc_html__( "Option answers removed successfully!", "helpgent" )
        ];

        $form_id    = $wp_rest_request->get_param( 'id' );
        $element_id = $wp_rest_request->get_param( 'element_id' );
        $value      = $wp_rest_request->get_param( 'value' );

        $form = $this->form_repository->get_by_id( $form_id );

        if ( ! $form ) {
            return Response::send(
                [
                    'message' => esc_html__( "Form not found.", "helpgent" )
                ], 404
            );
        }

        /**
         * Remove option from form BEGIN
         */
        $content  = json_decode( $form->content, true );
        $elements = &$content['elements'];

        $element_key = array_search( $element_id, array_column( $elements, 'id' ) );

        if ( ! is_int( $element_key ) ) {
            return Response::send( $response );
        }

        $options    = &$elements[$element_key]['controls']['general']['options'];
        $option_key = array_search( $value, array_column( $options, 'id' ) );

        if ( ! is_int( $option_key ) ) {
            return Response::send( $response );
        }

        unset( $options[$option_key] );

        $options = array_values( $options );

        $this->form_repository->update_content( $form_id, json_encode( $content ) );

        /**
         * Remove option from form END
         */

        /**
         * Remove answers BEGIN
         */
        $answer = ElementAnswers::query()->where( 'form_id', $form_id )->where( 'element_id', $element_id )->where( 'value', 'like', "%{$value}%" )->first();

        if ( ! $answer ) {
            return Response::send( $response );
        }

        if ( in_array( $answer->element_type, ['single_select', 'dropdown'] ) ) {
            ElementAnswers::query()->where( 'form_id', $form_id )->where( 'element_id', $element_id )->where( 'value', $value )->delete();
        } elseif ( 'multi_select' === $answer->element_type ) {
            ElementAnswers::query()->where( 'form_id', $form_id )->where( 'element_id', $element_id )->where( 'value', '["' . $value . '"]' )->delete();
            global $wpdb;
            $wpdb->query( $wpdb->prepare( "update {$wpdb->prefix}helpgent_element_answers set value = JSON_REMOVE(value, JSON_UNQUOTE(JSON_SEARCH(value, 'one', %s))) where form_id = %s and element_id = %s and value like %s", $value, $form_id, $element_id, "%{$value}%" ) );
        }

        return Response::send( $response );
    }

    public function delete_element( Validator $validator, WP_REST_Request $wp_rest_request ) {
        $validator->validate(
            [
                'id'          => 'required|numeric',
                'element_id'  => 'required|uuid',
                'new_element' => 'json'
            ]
        );

        if ( $validator->is_fail() ) {
            return Response::send(
                [
                    'messages' => $validator->errors
                ], 422
            );
        }

        $response = [
            'message' => esc_html__( "Element answers removed successfully!", "helpgent" )
        ];

        $form_id    = $wp_rest_request->get_param( 'id' );
        $element_id = $wp_rest_request->get_param( 'element_id' );

        $form = $this->form_repository->get_by_id( $form_id );

        if ( ! $form ) {
            return Response::send( $response );
        }

        /**
         * Delete element from form content
         */
        $content  = json_decode( $form->content, true );
        $elements = $content['elements'];

        $element_key = array_search( $element_id, array_column( $elements, 'id' ) );

        if ( ! is_int( $element_key ) ) {
            return Response::send( $response );
        }

        $new_element = $wp_rest_request->get_param( 'new_element' );

        if ( ! empty( $new_element ) ) {
            $elements[$element_key] = json_decode( $new_element );
        } else {
            unset( $elements[$element_key] );
        }

        $content['elements'] = array_values( $elements );

        $this->form_repository->update_content( $form_id, json_encode( $content ) );

        /**
         * Remove element answers
         */

        $contact_info_table = ContactInfo::get_table_name();

        ElementAnswers::query( "answer" )->where( 'answer.form_id', $form_id )->where( 'answer.element_id', $element_id )->left_join(
            "{$contact_info_table} as contact", function( JoinClause $join ) {
                $join->on_column( "contact.answer_id", "answer.id" );
            }
        )->where_is_null( "contact.is_lead" )->delete();

        return Response::send( $response );
    }
}
