<?php

namespace HelpGent\App\Mail;

use HelpGent\App\DTO\MessageDTO;
use HelpGent\App\Repositories\MessageRepository;

class NewMessageMailer extends Mailer {
    public MessageDTO $message;

    public array $created_by;

    public array $to_user;

    public array $site_admin;

    public ?string $dashboard_page_url;

    public function __construct( MessageDTO $message, array $template_settings, array $created_by, array $to_user ) {
        $this->message            = $message;
        $this->template_settings  = $template_settings;
        $this->created_by         = $created_by;
        $this->to_user            = $to_user;
        $this->site_admin         = $this->get_site_admin();
        $this->dashboard_page_url = helpgent_get_dashboard_page_url();
        $this->to                 = $to_user['email'];

        $site_admin_name  = $this->site_admin['name'];
        $site_admin_email = $this->site_admin['email'];
        $this->headers    = [ 'From' => "{$site_admin_name} <{$site_admin_email}>" ];

        $this->prepare_placeholders();
        $this->prepare_email_template_settings();
    }

    public function get_body(): string {
        return $this->get_email_template( $this->prepare_content( $this->body ) );
    }

    public function prepare_placeholders() {
        /**
         * @var MessageRepository $message_repository
         */
        $message_repository = helpgent_singleton( MessageRepository::class );
        $message_data       = $message_repository->get_by_id( $this->message->get_id() );
        $message            = $this->message->get_message();

        if ( ! empty( $this->message->get_attachment_id() ) ) {
            $message = __( 'This message contains media file, so please visit the dashboard page to view it', 'helpgent' );
        }

        $this->placeholders = [
            '{{FROM_NAME}}'      => $this->created_by['name'],
            '{{FROM_EMAIL}}'     => $this->created_by['email'],
            '{{TO_NAME}}'        => $this->to_user['name'],
            '{{TO_EMAIL}}'       => $this->to_user['email'],
            '{{NOW}}'            => ! empty( $message_data ) ? helpgent_now()->wp_date_time_string( $message_data->created_at ) : '',
            '{{DASHBOARD_LINK}}' => $this->get_dashboard_page_link(),
            '{{MESSAGE}}'        => $message,
        ];
    }

    public function get_dashboard_page_link() {
        $dashboard_page_url = $this->dashboard_page_url;

        if ( ! empty( $this->to_user['token'] ) ) {
            $dashboard_page_url = add_query_arg( 'hg_token', $this->to_user['token'], $dashboard_page_url );
        }

        return "<a class='link-success' href='{$dashboard_page_url}'>Take Me to Dashboard</a>";
    }
}