<?php

namespace HelpGent\App\Providers;

use HelpGent\App\Models\User;
use HelpGent\WpMVC\Database\Query\JoinClause;
use stdClass;
use WP_REST_Request;
use HelpGent\App\DTO\MessageDTO;
use HelpGent\App\Repositories\GuestRepository;
use HelpGent\App\Repositories\SettingsRepository;
use HelpGent\WpMVC\Contracts\Provider;
use HelpGent\App\Mail\NewResponseMailer;
use HelpGent\App\Mail\Admin\NewResponseMailer as AdminNewResponseMailer;
use HelpGent\App\Mail\NewMessageMailer;
use HelpGent\App\Mail\Admin\NewMessageMailer as AdminNewMessageMailer;
use HelpGent\App\BackgroundProcessors\EmailNotificationProcessor\BackgroundProcessor;

class EmailNotificationProvider implements Provider {
    public function boot() {
        add_action( 'init', [ $this, 'init_background_processor' ], 10 );
        add_action( 'helpgent_after_submit_form', [ $this, 'send_new_response_notification_in_background' ], 10, 3 );
        add_action( 'helpgent_after_store_message', [ $this, 'send_new_message_notification_in_background' ], 10, 4 );
    }

    public function init_background_processor() {
        /**
         * @var BackgroundProcessor $background_processor
         */
        $background_processor = helpgent_singleton( BackgroundProcessor::class );
        $background_processor->init_background_processor();

        $GLOBALS['helpgent_background_email_processor'] = $background_processor;
    }

    public function send_new_response_notification_in_background( ...$args ) {
        $this->run_in_background( [ $this, 'send_new_response_notification' ], $args );
    }

    public function send_new_response_notification( stdClass $response, stdClass $form, array $params ): void {
        $form_options = json_decode( $form->content, true );

        if ( empty( $form_options ) ) {
            return;
        }

        $email_settings = helpgent_get_nested_value( 'global.email_notification', $form_options );

        if ( empty( $email_settings ) ) {
            return;
        }

        $admin = apply_filters( 'helpgent_email_notification_admin_data', null, $form );

        if ( empty( $admin ) ) {
            $admin = $this->get_admin();
        }

        $is_guest        = ! empty( $response->is_guest );
        $created_by_user = $this->get_user_by_id( $response->created_by, $is_guest );

        if ( empty( $admin ) || empty( $created_by_user ) ) {
            return;
        }

        $response_token = $params['response_token'];

        /**
         * @var SettingsRepository $settings_repository
         */
        $settings_repository     = helpgent_singleton( SettingsRepository::class );
        $email_template_settings = $settings_repository->get_email_template_settings();

        $notify_admin = ( bool ) helpgent_get_nested_value( 'admin_notification.notify_on_new_response.isActive', $email_settings, false );
        $notify_admin = apply_filters( 'helpgent_send_admin_email_notification', $notify_admin, $form );

        $notify_user = ( bool ) helpgent_get_nested_value( 'user_notification.notify_on_new_response.isActive', $email_settings, false );
        $notify_user = apply_filters( 'helpgent_send_user_email_notification', $notify_user, $form );

        $site_name = get_site_option( 'blogname', 'HelpGent' );
        $site_url  = get_site_url();

        if ( $notify_admin ) {
            $mailer          = new AdminNewResponseMailer( $response, $email_template_settings, $created_by_user, $admin, $form );
            $mailer->subject = helpgent_get_nested_value( 'admin_notification.new_response_subject.value', $email_settings, '' );
            $mailer->body    = helpgent_get_nested_value( 'admin_notification.new_response_body.value', $email_settings, '' );

            $mailer->placeholders['{{SITE_NAME}}'] = $site_name;
            $mailer->placeholders['{{SITE_URL}}']  = $site_url;
    
            $mailer->headers['Reply-To'] = $created_by_user['email'];

            /**
             * @var AdminNewResponseMailer $mailer
             */
            $mailer = apply_filters( 'helpgent_new_response_mailer_for_admin', $mailer, $response, $form, $response_token, $admin, $created_by_user );

            $mailer->send( $form );
        }

        if ( $is_guest || $notify_user ) {
            $mailer = new NewResponseMailer( $response, $email_template_settings, $created_by_user, $created_by_user, $response_token, $is_guest );

            if ( $is_guest ) {
                $mailer->subject = $this->get_guest_email_subject_for_new_response();
                $mailer->body    = $this->get_guest_email_body_for_new_response();
            } else {
                $mailer->subject = helpgent_get_nested_value( 'user_notification.new_response_subject.value', $email_settings, '' );
                $mailer->body    = helpgent_get_nested_value( "user_notification.new_response_body.value", $email_settings, '' );
            }

            $mailer->placeholders['{{FROM_NAME}}']  = $admin['name'];
            $mailer->placeholders['{{FROM_EMAIL}}'] = $admin['email'];
            $mailer->placeholders['{{SITE_NAME}}']  = $site_name;
            $mailer->placeholders['{{SITE_URL}}']   = $site_url;

            $mailer->headers['Reply-To'] = $admin['email'];

            /**
             * @var NewResponseMailer $mailer
             */
            $mailer = apply_filters( 'helpgent_new_response_mailer_for_user', $mailer, $response, $form, $response_token, $admin, $created_by_user );

            $mailer->send( $form );
        }
    }

    public function send_new_message_notification_in_background( ...$args ) {
        $this->run_in_background( [ $this, 'send_new_message_notification' ], $args );
    }

    public function send_new_message_notification( MessageDTO $message_dto, array $params, stdClass $form, stdClass $response ): void {
        $form_options = json_decode( $form->content, true );

        if ( empty( $form_options ) ) {
            return;
        }

        $notification_settings = helpgent_get_nested_value( 'global.email_notification', $form_options );

        if ( empty( $notification_settings ) ) {
            return;
        }

        $response_user = $this->get_user_by_id( $response->created_by, ! empty( $response->is_guest ) );

        $admin = apply_filters( 'helpgent_email_notification_admin_data', null, $form );

        if ( empty( $admin ) ) {
            $admin = $this->get_admin();
        }

        if ( empty( $admin ) || empty( $response_user ) ) {
            return;
        }

        /**
         * @var SettingsRepository $settings_repository
         */
        $settings_repository     = helpgent_singleton( SettingsRepository::class );
        $email_template_settings = $settings_repository->get_email_template_settings();

        $notify_admin = ( bool ) helpgent_get_nested_value( 'admin_notification.notify_on_user_message.isActive', $notification_settings, false );
        $notify_admin = apply_filters( 'helpgent_send_admin_email_notification', $notify_admin, $form );

        $notify_user = ( bool ) helpgent_get_nested_value( 'user_notification.notify_on_admin_message.isActive', $notification_settings, false );
        $notify_user = apply_filters( 'helpgent_send_user_email_notification', $notify_user, $form );

        $is_message_from_user = $message_dto->get_created_by() === absint( $response->created_by ) && $message_dto->get_is_guest() === absint( $response->is_guest );
        $messaged_by          = $this->get_user_by_id( $message_dto->get_created_by(), ! empty( $message_dto->get_is_guest() ) );

        $site_name = get_site_option( 'blogname', 'HelpGent' );
        $site_url  = get_site_url();

        if ( $is_message_from_user && $notify_admin ) {
            $mailer          = new AdminNewMessageMailer( $message_dto, $email_template_settings, $messaged_by, $admin, $form );
            $mailer->subject = helpgent_get_nested_value( 'admin_notification.user_message_subject.value', $notification_settings, '' );
            $mailer->body    = helpgent_get_nested_value( 'admin_notification.user_message_body.value', $notification_settings, '' );

            $mailer->placeholders['{{SITE_NAME}}'] = $site_name;
            $mailer->placeholders['{{SITE_URL}}']  = $site_url;

            $mailer->headers['Reply-To'] = $response_user['email'];
    
            /**
             * @var AdminNewMessageMailer $mailer
             */
            $mailer = apply_filters( 'helpgent_new_message_mailer_for_user', $mailer, $response, $form, $admin, $response_user, $messaged_by );

            $mailer->send( $form );
        }

        if ( ! $is_message_from_user && $notify_user ) {
            $mailer          = new NewMessageMailer( $message_dto, $email_template_settings, $messaged_by, $response_user );
            $mailer->subject = helpgent_get_nested_value( 'user_notification.admin_message_subject.value', $notification_settings, '' );
            $mailer->body    = helpgent_get_nested_value( 'user_notification.admin_message_body.value', $notification_settings, '' );

            $mailer->placeholders['{{FROM_NAME}}']  = $admin['name'];
            $mailer->placeholders['{{FROM_EMAIL}}'] = $admin['email'];
            $mailer->placeholders['{{SITE_NAME}}']  = $site_name;
            $mailer->placeholders['{{SITE_URL}}']   = $site_url;

            $mailer->headers['Reply-To'] = $admin['email'];

            /**
             * @var NewMessageMailer $mailer 
             */
            $mailer = apply_filters( 'helpgent_new_message_mailer_for_user', $mailer, $response, $form, $admin, $response_user, $messaged_by );

            $mailer->send( $form );
        }
    }

    public function run_in_background( callable $callback, array $args ) {
        /**
         * @var BackgroundProcessor $helpgent_background_email_processor
         */
        global $helpgent_background_email_processor;

        if ( ! ( $helpgent_background_email_processor instanceof BackgroundProcessor ) ) {
            return;
        }

        foreach ( $args as $key => $value ) {
            if ( $value instanceof WP_REST_Request ) {
                $args[ $key ] = $value->get_params();
            }
        }

        $helpgent_background_email_processor->dispatch( $callback, $args );
    }

    public function get_admin(): ?array {
        global $wpdb;

        $user = User::query( 'user' )->join(
            'usermeta', function( JoinClause $join ) use ( $wpdb ) {
                $join->on_column( 'user.ID', '=', 'usermeta.user_id' )->on( 'usermeta.meta_key', "{$wpdb->prefix}capabilities" )->on( 'usermeta.meta_value', 'like', '%administrator%' );
            }
        )->first();

        if ( ! $user ) {
            return null;
        }

        return [ 
            'id'    => $user->ID, 
            'name'  => $user->display_name, 
            'email' => $user->user_email 
        ];
    }

    public function get_user_by_id( int $id, bool $is_guest ): ?array {

        if ( $is_guest ) {
            /**
             * @var GuestRepository $guest_repository
             */
            $guest_repository = helpgent_singleton( GuestRepository::class );
            $guest_user       = $guest_repository->get_by_id( $id );

            if ( empty( $guest_user ) ) {
                return null;
            }

            return [ 'name' => $guest_user->name, 'email' => $guest_user->email, 'token' => $guest_user->token ];
        }

        $wp_user = get_user_by( 'id', $id );

        if ( ! empty( $wp_user ) ) {
            return [ 'name' => $wp_user->display_name, 'email' => $wp_user->user_email ];
        }

        return null;
    }

    public function get_guest_email_subject_for_new_response():string {
        return apply_filters( 'helpgent_guest_email_subject_for_new_response', 'Action Required: Verify Your Form Submission' );
    }

    public function get_guest_email_body_for_new_response(): string {
        $hours                     = intval( helpgent_get_setting( 'remove_unverified_response_after_hours', 48 ) );
        $response_auto_remove_note = 0 < $hours ? "Please be informed that unverified conversations will be automatically deleted within {$hours} hours to maintain security and prevent misuse." : "";

        $template = <<<TEMPLATE
Greetings {{TO_NAME}},

We hope this email finds you well. Recently, a new form has been submitted using your email address. To ensure the security and privacy of your data, we are sending you this verification email. 

Date and Time: {{NOW}}
IP Address: {{IP_ADDRESS}}

To verify and access the conversation, please click the button below: {{VERIFICATION_LINK}}

If you did not make this submission, please click the following link: {{CANCEL_LINK}}

$response_auto_remove_note
TEMPLATE;

        return apply_filters( 'helpgent_guest_email_body_for_new_response', $template );
    }
}