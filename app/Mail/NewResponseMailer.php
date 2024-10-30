<?php

namespace HelpGent\App\Mail;

use stdClass;

class NewResponseMailer extends Mailer {
    public stdClass $response;

    public array $created_by;

    public array $to_user;

    public array $site_admin;

    public string $response_token;

    public ?string $dashboard_page_url;

    public bool $is_guest;

    public function __construct( stdClass $response, array $template_settings, array $created_by, array $to_user, string $response_token, bool $is_guest ) {
        $this->response           = $response;
        $this->template_settings  = $template_settings;
        $this->created_by         = $created_by;
        $this->to_user            = $to_user;
        $this->response_token     = $response_token;
        $this->dashboard_page_url = helpgent_get_dashboard_page_url();
        $this->to                 = $to_user['email'];
        $this->is_guest           = $is_guest;
        
        $site_admin    = $this->get_site_admin();
        $this->headers = [ 'From' => "{$site_admin['name']} <{$site_admin['email']}>" ];

        $this->prepare_placeholders();
        $this->prepare_email_template_settings();
    }

    public function get_body(): string {
        return $this->get_email_template( $this->prepare_content( $this->body ) );
    }

    public function prepare_placeholders() {
        $this->placeholders = [
            '{{FROM_NAME}}'  => $this->created_by['name'],
            '{{FROM_EMAIL}}' => $this->created_by['email'],
            '{{TO_NAME}}'    => $this->to_user['name'],
            '{{TO_EMAIL}}'   => $this->to_user['email'],
            '{{NOW}}'        => helpgent_now()->wp_date_time_string( $this->response->created_at ),
            '{{IP_ADDRESS}}' => $this->response->ip
        ];

        if ( $this->is_guest ) {
            $this->placeholders['{{VERIFICATION_LINK}}'] = $this->get_dashboard_page_link( 'Verify and Take Me to Dashboard', 'verify' );
            $this->placeholders['{{CANCEL_LINK}}']       = $this->get_dashboard_page_link( "No, It Wasn't Me", 'cancel', true );
        } else {
            $this->placeholders['{{DASHBOARD_LINK}}'] = "<a class='link-primary' href='{$this->dashboard_page_url}'>Take Me to Dashboard</a>";
        }
    }

    public function get_dashboard_page_link( string $label, ?string $arg = null, bool $danger = true ) {
        $dashboard_page_url = $this->dashboard_page_url;

        $args = [
            'hg_response_token' => $this->response_token,
            $arg                => 1,
            'form_id'           => $this->response->form_id
        ];

        if ( ! empty( $this->to_user['token'] ) ) {
            $args['hg_token'] = $this->to_user['token'];
        }

        $dashboard_page_url = add_query_arg( $args, $this->dashboard_page_url );

        $class = $danger ? 'link-danger' : 'link-primary';
        return "<a class='{$class}' href='{$dashboard_page_url}'>{$label}</a>";
    }
}