<?php

namespace HelpGent\App\Mail\Admin;

use stdClass;
use HelpGent\App\Mail\Mailer;

class NewResponseMailer extends Mailer {
    public stdClass $response;

    public array $created_by;

    public array $to_user;

    public array $site_admin;

    public ?string $dashboard_page_url;

    public function __construct( stdClass $response, array $template_settings, array $created_by, array $to_user, stdClass $form ) {
        $this->response           = $response;
        $this->template_settings  = $template_settings;
        $this->created_by         = $created_by;
        $this->to_user            = $to_user;
        $this->dashboard_page_url = apply_filters( 'helpgent_admin_email_dashboard_url', admin_url( "admin.php?page=helpgent#/forms/{$response->form_id}/responses" ), $form );
        $this->to                 = $to_user['email'];

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
            '{{FROM_NAME}}'      => $this->created_by['name'],
            '{{FROM_EMAIL}}'     => $this->created_by['email'],
            '{{TO_NAME}}'        => $this->to_user['name'],
            '{{TO_EMAIL}}'       => $this->to_user['email'],
            '{{NOW}}'            => helpgent_now()->wp_date_time_string( $this->response->created_at ),
            '{{DASHBOARD_LINK}}' => "<a class='link-primary' href='{$this->dashboard_page_url}'>Take Me to Dashboard</a>",
            '{{IP_ADDRESS}}'     => $this->response->ip
        ];
    }
}