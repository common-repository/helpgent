<?php

namespace HelpGent\App\Http\Controllers;

use HelpGent\App\Models\GuestMeta;
use HelpGent\App\Models\UserMeta;
use WP_Error;
use WP_REST_Request;
use HelpGent\App\Utils\AttemptValidator;
use HelpGent\App\DTO\GuestDTO;
use HelpGent\App\DTO\ResponseDTO;
use HelpGent\App\Http\Controllers\Controller;
use HelpGent\App\Mail\GuestLogin;
use HelpGent\App\Mail\GuestTokenRenew;
use HelpGent\App\Models\Guest;
use HelpGent\App\Models\User;
use HelpGent\App\Models\Response as ResponseModel;
use HelpGent\App\Repositories\FormRepository;
use HelpGent\App\Repositories\GuestRepository;
use HelpGent\App\Repositories\ResponseRepository;
use HelpGent\App\Repositories\SettingsRepository;
use HelpGent\WpMVC\RequestValidator\Validator;
use HelpGent\WpMVC\Routing\Response;

class UserController extends Controller {
    public FormRepository $form_repository;

    public ResponseRepository $response_repository;

    public GuestRepository $guest_repository;

    public SettingsRepository $settings_repository;

    public function __construct(
        FormRepository $form_repository,
        ResponseRepository $response_repository,
        GuestRepository $guest_repository,
        SettingsRepository $settings_repository
    ) {
        $this->form_repository     = $form_repository;
        $this->response_repository = $response_repository;
        $this->guest_repository    = $guest_repository;
        $this->settings_repository = $settings_repository;
    }

    public function get() {
        $current_user = helpgent_get_current_user();

        $user = [
            'id'               => $current_user->get_id(),
            'is_guest'         => $current_user->get_is_guest(),
            'name'             => $current_user->get_name(),
            'email'            => $current_user->get_email(),
            'created_at'       => $current_user->get_created_at(),
            'is_administrator' => false
        ];

        if ( 1 === $current_user->get_is_guest() ) {
            $user_meta = GuestMeta::query()->where( 'user_id', $current_user->get_id() )->where( 'meta_key', 'about' )->first();
            $totals    = ResponseModel::query()->select( 'count(id) as response', 'count(distinct form_id) as form' )->where( 'created_by', $current_user->get_id() )->get();

            $user['about']                  = $user_meta->meta_value ?? null;
            $user['guest_user_auto_remove'] = intval( helpgent_get_setting( 'guest_user_auto_remove' ) );
            $user['totals']                 = $totals;

            $registration_page_id = $this->settings_repository->get_by_key( 'user_registration_page' );

            if ( ! empty( $registration_page_id ) ) {
                $user['registration_page'] = get_permalink( intval( $registration_page_id ) );
            } else {
                $user['registration_page'] = null;
            }
        } else {
            $user['first_name']       = $current_user->get_wp_user()->first_name;
            $user['last_name']        = $current_user->get_wp_user()->last_name;
            $user['avatar_url']       = get_avatar_url( $current_user->get_id() );
            $user['is_administrator'] = in_array( 'administrator', $current_user->get_roles(), true );

            $user_metas = UserMeta::query()->where( 'user_id', $current_user->get_id() )->where_in( 'meta_key', ['helpgent_about', 'helpgent_timezone'] )->get();

            foreach ( $user_metas as $user_meta ) {
                if ( 'helpgent_about' === $user_meta->meta_key ) {
                    $user['about'] = $user_meta->meta_value;
                } elseif ( 'helpgent_timezone' ) {
                    $user['timezone'] = $user_meta->meta_value;
                }
            }
        }

        return Response::send(
            [
                'user' => $user
            ]
        );
    }

    public function logout() {
        wp_logout();

        return Response::send( ['message' => esc_html__( 'Logged out', 'helpgent' )] );
    }

    public function update( Validator $validator, WP_REST_Request $wp_rest_request ) {
        $validator->validate(
            [
                'name'       => 'required|string|max:100',
                'first_name' => 'required|string|max:50',
                'last_name'  => 'required|string|max:50',
                'timezone'   => 'required|string|max:50',
                'about'      => 'required|string|max:180',
                'avatar'     => 'file|mimes:jpg,jpeg,png|max:10'
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

        wp_update_user(
            [
                'ID'           => $user->get_id(),
                'display_name' => sanitize_text_field( $wp_rest_request->get_param( 'name' ) ),
                'first_name'   => sanitize_text_field( $wp_rest_request->get_param( 'first_name' ) ),
                'last_name'    => sanitize_text_field( $wp_rest_request->get_param( 'last_name' ) ),
            ]
        );

        update_user_meta( $user->get_id(), 'helpgent_timezone', sanitize_text_field( $wp_rest_request->get_param( 'timezone' ) ) );
        update_user_meta( $user->get_id(), 'helpgent_about', sanitize_text_field( $wp_rest_request->get_param( 'about' ) ) );


        /**
         * Upload custom avatar
         */
        $files = $wp_rest_request->get_file_params();

        if ( ! empty( $files['avatar'] ) ) {
            $upload_avatar = helpgent_upload_attachment( $files['avatar'] );

            if ( $upload_avatar ) {
                $old_avatar_id = get_user_meta( $user->get_id(), 'helpgent_avatar', true );

                if ( ! empty( $old_avatar_id ) ) {
                    wp_delete_attachment( $old_avatar_id, true );
                }
    
                update_user_meta( $user->get_id(), 'helpgent_avatar', $upload_avatar['attachment_id'] );
            }
        }

        return Response::send(
            [
                'message' => esc_html__( "Profile information has been successfully updated.", "helpgent" )    
            ] 
        );
    }

    public function update_password( Validator $validator, WP_REST_Request $wp_rest_request ) {
        $validator->validate(
            [
                'old_password' => 'required|string|max:100',
                'password'     => 'required|string|min:8|max:100|confirmed'
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

        if ( ! wp_check_password( $wp_rest_request->get_param( 'old_password' ), $user->get_wp_user()->user_pass ) ) {
            return Response::send(
                [
                    'messages' => [
                        'password' => [
                            esc_html__( "The old password you entered is incorrect.", "helpgent" )
                        ]
                    ]
                ], 422
            );
        }

        $new_password = sanitize_text_field( $wp_rest_request->get_param( 'password' ) );

        if ( $wp_rest_request->get_param( 'password' ) !== $new_password ) {
            return Response::send(
                [
                    'messages' => [
                        'password' => [
                            esc_html__( "Sorry, Something was wrong.", "helpgent" )
                        ]
                    ]
                ], 422
            );
        }

        wp_set_password( $new_password, $user->get_id() );

        // Reauthenticate the user with the new credentials
        wp_signon(
            [
                'user_login'    => wp_get_current_user()->user_login,
                'user_password' => $new_password,
                'remember'      => false
            ], false 
        );

        return Response::send(
            [
                'message' => esc_html__( "The password has been successfully updated.", "helpgent" )    
            ]
        );
    }

    public function update_email( Validator $validator, WP_REST_Request $wp_rest_request ) {
        $validator->validate(
            [
                'email' => 'required|string|email|max:100|confirmed'
            ]
        );

        if ( $validator->is_fail() ) {
            return Response::send(
                [
                    'messages' => $validator->errors
                ], 422
            );
        }

        $email = sanitize_email( $wp_rest_request->get_param( 'email' ) );

        if ( $wp_rest_request->get_param( 'email' ) !== $email ) {
            return Response::send(
                [
                    'messages' => [
                        'email' => [
                            esc_html__( "Please enter a valid email", "helpgent" )
                        ]
                    ]
                ]
            );
        }

        wp_update_user(
            [
                'ID'         => helpgent_get_current_user()->get_id(),
                'user_email' => $email
            ]
        );

        return Response::send(
            [
                'message' => esc_html__( "The email has been successfully updated.", "helpgent" )    
            ]
        );
    }

    public function user_type( Validator $validator, WP_REST_Request $wp_rest_request ) {
        $validator->validate(
            [
                'email' => 'required|string|email'
            ]
        );

        if ( $validator->is_fail() ) {
            return Response::send(
                [
                    'messages' => $validator->errors
                ], 422
            );
        }

        $email = $wp_rest_request->get_param( 'email' );

        $guest = Guest::query()->select( 1 )->where( 'email', $email )->first();

        if ( $guest ) {
            return Response::send(
                [
                    'user_type' => 'guest'
                ]
            );
        }

        $user = User::query()->select( 1 )->where( 'user_email', $email )->first();

        if ( $user ) {
            return Response::send( ['user_type' => 'registered'] );
        }

        return Response::send( [], 404 );
    }

    public function verify_registered_user( Validator $validator, WP_REST_Request $wp_rest_request ) {
        $validator->validate(
            [
                'email'    => 'required|string|email',
                'password' => 'required|string'
            ]
        );

        if ( $validator->is_fail() ) {
            return Response::send(
                [
                    'messages' => $validator->errors
                ], 422
            );
        }

        $user = User::query()->select( 'ID, user_pass' )->where( 'user_email', $wp_rest_request->get_param( 'email' ) )->first();

        if ( ! $user ) {
            return Response::send( ['message' => esc_html__( 'User not found.', 'helpgent' )], 404 );
        }

        if ( ! wp_check_password( $wp_rest_request->get_param( 'password' ), $user->user_pass ) ) {
            return Response::send( ['message' => esc_html__( 'The entry password is incorrect.', 'helpgent' )], 403 );
        }

        return Response::send( ['status' => 'verify'] );
    }

    public function register_guest( Validator $validator, WP_REST_Request $wp_rest_request ) {
        $validator->validate(
            [
                'name'         => 'string|max:255',
                'phone_number' => 'string|max:255',
                'company_name' => 'string|max:255',
                'email'        => 'required|string|email|max:255',
                'form_id'      => 'required|numeric'
            ]
        );

        if ( $validator->is_fail() ) {
            return Response::send(
                [
                    'messages' => $validator->errors
                ], 422
            );
        }

        $form = $this->form_repository->get_by_id_publish( $wp_rest_request->get_param( 'form_id' ) );

        if ( ! $form ) {
            return Response::send( ['message' => esc_html__( 'Form not found.', 'helpgent' )], 404 );
        }

        $email = $wp_rest_request->get_param( 'email' );

        $user = User::query()->select( 1 )->where( 'user_email', $email )->first();

        if ( $user ) {
            return Response::send( ['message' => 'You already a registered user please login'], 401 );
        }

        $guest = Guest::query()->select( 'id' )->where( 'email', $email )->first();

        if ( $guest ) {
            $guest_id = $guest->id;
        } else {
            $guest_dto = new GuestDTO(
                $email,
                (string) $wp_rest_request->get_param( 'name' ),
                (string) $wp_rest_request->get_param( 'phone_number' ),
                (string) $wp_rest_request->get_param( 'company_name' ),
                helpgent_generate_token(),
                helpgent_now()->add_days( 30 )
            );

            $form_elements = json_decode( $form->content, true )['elements'];

            $user_validation_element_key = array_search( 'user_validation', array_column( $form_elements, 'element_type' ) );

            if ( is_int( $user_validation_element_key ) ) {
                $is_visible_acceptance = intval( helpgent_get_nested_value( 'guest_field.acceptance.isVisible', $form_elements[$user_validation_element_key] ) );
                if ( 1 === $is_visible_acceptance ) {
                    $guest_dto->set_acceptance( 1 );
                }
            }

            /**
             * @var GuestRepository $guest_repository
             */
            $guest_repository = helpgent_singleton( GuestRepository::class );
            $guest_id         = $guest_repository->create( $guest_dto );
        }

        $response_dto = new ResponseDTO( $form->id, $guest_id, 1 );

        return Response::send(
            [
                'response_token' => $this->response_repository->create_and_get_token( $response_dto )
            ]
        );
    }

    public function generate_guest_user_token( Validator $validator, WP_REST_Request $wp_rest_request ) {
        $validator->validate(
            [
                'form_id' => 'required|numeric',
                'email'   => 'required|string|email'
            ] 
        );

        if ( $validator->is_fail() ) {
            return Response::send(
                [
                    'messages' => $validator->errors
                ], 422
            );
        }

        $form = $this->form_repository->get_by_id_publish( $wp_rest_request->get_param( 'form_id' ) );

        if ( ! $form ) {
            return Response::send( ['message' => esc_html__( 'Form not found.', 'helpgent' )], 404 );
        }

        $guest = Guest::query()->select( 'id' )->where( 'email', $wp_rest_request->get_param( 'email' ) )->first();

        if ( ! $guest ) {
            return Response::send( ['message' => esc_html__( 'Guest user not found.', 'helpgent' )], 404 );
        }

        $response_dto = new ResponseDTO( $form->id, $guest->id, 1 );

        return Response::send(
            [
                'response_token' => $this->response_repository->create_and_get_token( $response_dto )
            ]
        );
    }

    public function generate_unknown_token( Validator $validator, WP_REST_Request $wp_rest_request ) {
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

        $form = $this->form_repository->get_by_id_publish( $wp_rest_request->get_param( 'form_id' ) );

        if ( ! $form ) {
            return Response::send( ['message' => esc_html__( 'Form not found.', 'helpgent' )], 404 );
        }

        $response_dto = new ResponseDTO( $form->id, 0, 1 );

        return Response::send(
            [
                'response_token' => $this->response_repository->create_and_get_token( $response_dto )
            ]
        );
    }

    /**
     * This method only for Auth user
     *
     * @param Validator $validator
     * @param WP_REST_Request $wp_rest_request
     * @return array
     */
    public function generate_register_user_token( Validator $validator, WP_REST_Request $wp_rest_request ) {
        $validation_rules = [
            'form_id' => 'required|numeric'
        ];

        $is_user_logged_in = is_user_logged_in();

        if ( ! $is_user_logged_in ) {
            $validation_rules['email']    = 'required|string|email';
            $validation_rules['password'] = 'required|string';
        }

        $validator->validate( $validation_rules );

        if ( $validator->is_fail() ) {
            return Response::send(
                [
                    'messages' => $validator->errors
                ], 422
            );
        }

        $form = $this->form_repository->get_by_id_publish( $wp_rest_request->get_param( 'form_id' ) );

        if ( ! $form ) {
            return Response::send( ['message' => esc_html__( 'Form not found.', 'helpgent' )], 404 );
        }

        if ( ! $is_user_logged_in ) {
            $user = User::query()->select( 'ID, user_pass' )->where( 'user_email', $wp_rest_request->get_param( 'email' ) )->first();
            
            if ( ! $user ) {
                return Response::send( ['message' => esc_html__( 'User not found.', 'helpgent' )], 404 );
            }
            
            if ( ! wp_check_password( $wp_rest_request->get_param( 'password' ), $user->user_pass ) ) {
                return Response::send( ['message' => esc_html__( 'The entry password is incorrect.', 'helpgent' )], 403 );
            }

            $response_dto = new ResponseDTO( $form->id, $user->ID );
        } else {
            $user         = helpgent_get_current_user();
            $response_dto = new ResponseDTO( $form->id, $user->get_id() );
        }

        $response_dto->set_is_verified( 1 );

        return Response::send(
            [
                'response_token' => $this->response_repository->create_and_get_token( $response_dto )
            ]
        );
    }

    public function login_guest( Validator $validator, WP_REST_Request $wp_rest_request ) {
        $validator->validate(
            [
                'email' => 'required|email'
            ]
        );

        if ( $validator->is_fail() ) {
            return Response::send(
                [
                    'messages' => $validator->errors
                ], 422
            );
        }

        $email = $wp_rest_request->get_param( 'email' );
        $guest = $this->guest_repository->get_by_email( $email );

        if ( ! $guest ) {
            return Response::send(
                [
                    'messages' => esc_html__( "Guest user not found.", "helpgent" )
                ], 404
            );
        }

        $current_user_ip       = helpgent_get_user_ip_address();
        $attempt_key           = "login_{$current_user_ip}";
        $total_allowed_attempt = apply_filters( 'helpgent_guest_login_total_allowed_attempt', 2 );
        $waiting_time          = apply_filters( 'helpgent_guest_login_waiting_time', HOUR_IN_SECONDS );

        $attempt  = new AttemptValidator( $attempt_key, $total_allowed_attempt, $waiting_time );
        $validate = $attempt->validate();

        if ( $validate instanceof WP_Error ) {
            return Response::send(
                [
                    'message' => $validate->get_error_message()
                ], $validate->get_error_code()
            );
        }

        $mailer = new GuestLogin( $this->settings_repository->get_email_template_settings(), $guest );
        $mailer->send();

        return Response::send(
            [
                'message' => sprintf( esc_html__( "A login link has been sent to the email %s. Please check your inbox.", "helpgent" ), $email )
            ]
        );
    }

    public function token_renew() {
        $guest = helpgent_get_guest_from_cookie();

        if ( empty( $guest ) ) {
            return Response::send(
                [
                    'message' => esc_html__( "Guest user not found.", "helpgent" )
                ], 404
            );
        }

        if ( $guest->token_expires_at > date( helpgent_date_time_format(), time() ) ) {
            return Response::send(
                [
                    'message' => esc_html__( "Token renewal is not possible as the existing token is still valid.", 'helpgent' )
                ], 422
            );
        }

        $attempt_key           = "guest_token_renew_{$guest->id}";
        $total_allowed_attempt = apply_filters( 'helpgent_guest_login_total_allowed_attempt', 2 );
        $waiting_time          = apply_filters( 'helpgent_guest_login_waiting_time', HOUR_IN_SECONDS );

        $attempt  = new AttemptValidator( $attempt_key, $total_allowed_attempt, $waiting_time );
        $validate = $attempt->validate();

        if ( $validate instanceof WP_Error ) {
            return Response::send(
                [
                    'message' => $validate->get_error_message()
                ], $validate->get_error_code()
            );
        }

        $guest->token = $this->guest_repository->update_token( $guest->id );

        $mailer = new GuestTokenRenew( $this->settings_repository->get_email_template_settings(), $guest );
        $mailer->send();

        helpgent_guest_logout();

        return Response::send(
            [
                'message' => sprintf( esc_html__( "We've sent a login link to the email %s please check your inbox.", "helpgent" ), $guest->email )
            ]
        );
    }

    public function delete( Validator $validator, WP_REST_Request $wp_rest_request ) {
        $user = helpgent_get_current_user();

        if ( in_array( 'administrator', $user->roles, true ) ) {
            return Response::send(
                [
                    'message' => esc_html__( "Sorry, Administrator account can't be deleted form here.", "helpgent" ),
                ], 500
            ); 
        }

        update_user_meta( $user->get_id(), "helpgent_delete_scheduled", time() );

        return Response::send(
            [
                'message' => esc_html__( "The account delete request was sent.", "helpgent" ),
            ]
        );
    }
}