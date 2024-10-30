<?php

namespace HelpGent\App\Mail;

use HelpGent\WpMVC\View\View;

abstract class Mailer {
    public array $template_settings;

    public string $subject;
    
    public string $body;

    public string $to;
    
    public array $headers = [];

    public array $placeholders = [];

    public string $content_type = 'text/html';

    public string $email_header_color = '#6551f2';

    public bool $enable_email_header = true;

    public bool $enable_email_footer = true;

    public string $footer_email_text = '';

    abstract public function get_body(): string;

    public function get_subject() {
        return html_entity_decode( $this->prepare_content( $this->subject ) );
    }

    public function get_site_admin(): array {
        $site_admin_name  = apply_filters( 'helpgent_email_from_name', get_option( 'blogname' ) );
        $site_admin_email = apply_filters( 'helpgent_email_from_email', get_option( 'admin_email' ) );

        return [ 'name' => $site_admin_name, 'email' => $site_admin_email ];
    }

    protected function prepare_content( string $content ): string {
        return nl2br( strtr( $content, $this->placeholders ) );
    }

    public function prepare_email_template_settings(): void {
        $this->email_header_color  = helpgent_get_nested_value( 'header_color.value', $this->template_settings, $this->email_header_color );
        $this->enable_email_header = ( bool ) helpgent_get_nested_value( 'enable_header.isActive', $this->template_settings, $this->enable_email_header );
        $this->enable_email_footer = ( bool ) helpgent_get_nested_value( 'enable_footer.isActive', $this->template_settings, $this->enable_email_footer );
        $this->footer_email_text   = helpgent_get_nested_value( 'footer_text.value', $this->template_settings, $this->footer_email_text );
    }

    public function get_email_header(): string {
        if ( ! $this->enable_email_header ) {
            return '';
        }

        $data = [
            'email_header_color' => $this->email_header_color,
            'subject'            => $this->get_subject()
        ];

        return View::get( 'admin/email/default/header', $data );
    }

    public function get_email_footer(): string {
        if ( ! $this->enable_email_footer ) {
            return '';
        }

        $footer_text = ! empty( $this->footer_email_text )  ? $this->footer_email_text : 'Built with <i style="margin: 0 4px; position: relative; top: 2px;"> ❤️ </i> by <a target="_blank" href="https://wpwax.com/">wpWax</a>';
        
        return View::get( 'admin/email/default/footer', [ 'footer_text' => $footer_text ] );
    }

    public function get_email_template( string $message ) {
        $data = [
            'header'  => $this->get_email_header(),
            'footer'  => $this->get_email_footer(),
            'message' => $message,
        ];

        return View::get( 'admin/email/default/layout', $data );
    }

    public function send( ...$args ): bool {
        $headers   = $this->headers;
        $headers[] = "content-type: {$this->content_type}";
        $body      = $this->get_body();

        $is_allowed = apply_filters( 'helpgent_before_sending_email', true );

        if ( ! $is_allowed ) {
            return false;
        }
        
        $email = wp_mail( $this->to, $this->get_subject(), $body, $headers );

        do_action( 'helpgent_after_sending_email', $email, ...$args );
        return $email;
    }
}