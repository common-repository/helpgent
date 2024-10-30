<?php

namespace HelpGent\App\Mail;

use stdClass;

class GuestLogin extends Mailer {
    public stdClass $guest;

    public array $site_admin;

    public ?string $login_link;

    public function __construct( array $template_settings, stdClass $guest ) {
        $this->guest             = $guest;
        $this->template_settings = $template_settings;
        $this->site_admin        = $this->get_site_admin();
        $this->login_link        = add_query_arg( 'hg_token', $guest->token, helpgent_get_dashboard_page_url() );
        $this->to                = $guest->email;

        $site_admin_name  = $this->site_admin['name'];
        $site_admin_email = $this->site_admin['email'];
        $this->headers    = [ 'From' => "{$site_admin_name} <{$site_admin_email}>", 'Reply-To' => $guest->email ];
        $this->subject    = "Login {{SITE_NAME}}";
        $this->prepare_placeholders();
        $this->prepare_email_template_settings();
    }

    public function get_body(): string {
        $mail_body = <<<TEMPLATE
Hello {{TO_NAME}},

Welcome to our platform!

We're excited to provide you with a seamless login experience. A guest token has been generated for you, granting access to your dashboard and ongoing conversations. This token is valid for 30 days from now.

To access your dashboard and continue your conversations, simply click on the following link: {{LOGIN_LINK}}

Thank you, 
The Administrator of {{SITE_NAME}}
TEMPLATE;

        $mail_body = apply_filters( "helpgent_guest_user_login_email_template", $mail_body );

        return $this->get_email_template( $this->prepare_content( $mail_body ) );
    }

    public function prepare_placeholders() {

        $this->placeholders = [
            '{{TO_NAME}}'       => $this->guest->name,
            '{{TO_EMAIL}}'      => $this->guest->email,
            '{{DATE_AND_TIME}}' => ! empty( $message_data ) ? helpgent_now()->wp_date_time_string( $message_data->created_at ) : '',
            '{{LOGIN_LINK}}'    => $this->get_dashboard_page_link(),
            '{{SITE_NAME}}'     => get_site_option( 'blogname', 'HelpGent' ),
            '{{SITE_URL}}'      => get_site_url()
        ];
    }

    public function get_dashboard_page_link() {
        if ( empty( $this->login_link ) ) {
            return;
        }

        $label = __( 'Login', 'helpgent' );
        return "<a class='link-success' href='{$this->login_link}'>{$label}</a>";
    }
}