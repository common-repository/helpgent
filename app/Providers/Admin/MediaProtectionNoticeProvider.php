<?php

namespace HelpGent\App\Providers\Admin;

use HelpGent\WpMVC\View\View;
use HelpGent\WpMVC\Contracts\Provider;
use HelpGent\App\Providers\MediaProtectionProvider;

class MediaProtectionNoticeProvider implements Provider {
    public function boot() {
        add_action( 'admin_init', [ $this, 'close_nginx_setup_notice' ] );
        add_action( 'admin_init', [ $this, 'setup_admin_notice' ] );
    }

    public function close_nginx_setup_notice() : void {
        // phpcs:ignore WordPress.Security.NonceVerification.Recommended
        if ( empty( $_GET['helpgent-dismiss-nginx-setup-notice'] ) ) {
            return;
        }

        update_option( 'helpgent_dismiss_nginx_setup_notice', true );
    }

    public function setup_admin_notice() : void {
        if ( 'nginx' === helpgent_get_server_name() ) {
            $this->maybe_show_nginx_notice();
        }
    }

    public function maybe_show_nginx_notice() : void {
        if ( get_option( 'helpgent_dismiss_nginx_setup_notice', false ) ) {
            return;
        }

        add_action( 'admin_notices', [ $this, 'show_nginx_setup_notice' ] );
    }

    public function show_nginx_setup_notice() {
        $rules = MediaProtectionProvider::get_nginx_rewrite_rules();

        // phpcs:ignore WordPress.Security.ValidatedSanitizedInput.InputNotValidated, WordPress.Security.ValidatedSanitizedInput.InputNotSanitized, WordPress.Security.NonceVerification.Recommended
        $current_url    = home_url() . wp_unslash( $_SERVER['REQUEST_URI'] );
        $dismiss_link   = add_query_arg( 'helpgent-dismiss-nginx-setup-notice', true, $current_url );
        $textarea_style = 'color: #106AC2; line-height: 1.25em; font-family: Monospace, Mono; width: 100%;';

        $data = [
            'rules'            => "# HelpGent Rewrite Rule.\n$rules",
            'textarea_style'   => $textarea_style,
            'instruction_link' => 'https://wpwax.com/docs/helpgent/configuring-nginx-server',
            'dismiss_link'     => $dismiss_link,
        ];

        View::render( 'admin/notice/nginx-setup-notice', $data );
    }

    public static function nginx_settings_notice_button_data() {
        $rules = MediaProtectionProvider::get_nginx_rewrite_rules();

        $description = <<<TEXT
<p>Add the following rewrite rule to your NGINX server's configuration</p>
<code class="helpgent-code helpgent-multiline-code"># HelpGent Rewrite Rule.
{$rules}
</code>
TEXT;

        return [
            'is_nginx'     => 'nginx' === helpgent_get_server_name(),
            'label'        => __( 'NGINX Server Configuration', 'helpgent' ),
            'description'  => $description,
            'callToAction' => [
                'url'   => 'https://wpwax.com/docs/helpgent/configuring-nginx-server',
                'label' => 'Show Instruction',
            ],
        ];
    }
}