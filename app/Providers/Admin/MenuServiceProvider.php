<?php

namespace HelpGent\App\Providers\Admin;

use HelpGent\WpMVC\Contracts\Provider;
use HelpGent\WpMVC\View\View;

class MenuServiceProvider implements Provider
{
    public $pro_url = 'https://wpwax.com/helpgent';

    public function boot() {
        add_action( 'admin_menu', [$this, 'action_admin_menu'] );
        add_action( 'admin_head', [ $this, 'action_admin_head' ] );
    }

    /**
     * Loading menu activation js code only helpgent admin page
     */
    public function action_admin_head() : void {
        ?>
        <style>
            .wp-submenu-wrap a[href="<?php helpgent_render( $this->pro_url )?>"] {
                color: #f06060 !important;
                font-weight: bold;
            }
        </style>

        <?php
        if ( 'helpgent_page_helpgent' === get_current_screen()->id ) {
            View::render( 'font-family' );
            View::render( 'admin/menu-js', ['pro_url' => $this->pro_url] );
        }
    }

    public function action_admin_menu() {
        $page_url = admin_url( 'admin.php?page=helpgent' );
        $icon_dir = helpgent_dir( 'assets/svg/helpgent-icon.svg' );
        $icon     = file_get_contents( $icon_dir );
        $icon     = 'data:image/svg+xml;base64,' . base64_encode( $icon );

        add_menu_page( esc_html__( 'HelpGent', 'helpgent' ), esc_html__( 'HelpGent', 'helpgent' ), 'manage_options', 'helpgent-menu', function () { }, $icon, 5 );
        add_submenu_page( 'helpgent-menu', esc_html__( 'All Forms', 'helpgent' ), esc_html__( 'All Forms', 'helpgent' ), 'manage_options', 'helpgent', [$this, 'content'] );
        add_submenu_page( 'helpgent-menu', esc_html__( 'Tags', 'helpgent' ), esc_html__( 'Tags', 'helpgent' ), 'manage_options', $page_url . '#/tags' );
        add_submenu_page( 'helpgent-menu', esc_html__( 'Contacts', 'helpgent' ), esc_html__( 'Contacts', 'helpgent' ), 'manage_options', $page_url . '#/contacts' );
        add_submenu_page( 'helpgent-menu', esc_html__( 'Settings', 'helpgent' ), esc_html__( 'Settings', 'helpgent' ), 'manage_options', $page_url . '#/settings' );
        add_submenu_page( 'helpgent-menu', esc_html__( 'Media Migration', 'helpgent' ), esc_html__( 'Media Migration', 'helpgent' ), 'manage_options', $page_url . '#/media-migration' );

        if ( ! function_exists( 'helpgent_pro' ) ) {
            add_submenu_page( 'helpgent-menu', esc_html__( 'Go Pro', 'helpgent' ), esc_html__( 'Go Pro', 'helpgent' ), 'manage_options', $this->pro_url );
        }

        remove_submenu_page( 'helpgent-menu', 'helpgent-menu' );
    }

    public function content() {
        ob_start();
        wp_editor( '', 'email_template_editor' );
        $email_template_editor = ob_get_clean();
        helpgent_render( '<div class="helpgent-root" data-email_template_editor="' . base64_encode( $email_template_editor ) . '"></div>' );
    }
}