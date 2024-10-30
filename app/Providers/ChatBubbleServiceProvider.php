<?php

namespace HelpGent\App\Providers;

use HelpGent\App\Repositories\FormRepository;
use HelpGent\WpMVC\Contracts\Provider;
use HelpGent\WpMVC\View\View;

class ChatBubbleServiceProvider implements Provider {
    public function boot() {
        add_action( 'wp_footer', [ $this, 'action_wp_footer' ] );
    }

    /**
     * Prints scripts or data before the closing body tag on the front end.
     */
    public function action_wp_footer() : void {
        //phpcs:ignore WordPress.Security.NonceVerification.Recommended
        if ( isset( $_REQUEST['elementor-preview'] ) ) {
            return;
        }

        $print_bubbles = apply_filters( 'print_chat_bubbles', ! helpgent_is_preview() );

        if ( ! $print_bubbles ) {
            return;
        }
        /**
         * @var FormRepository $form_repository
         */
        $form_repository = helpgent_singleton( FormRepository::class );
        $forms           = $form_repository->get_bubble_by_page_id( helpgent_get_current_page_id() );

        View::render( 'chat-bubbles', compact( 'forms' ) );
    }
}