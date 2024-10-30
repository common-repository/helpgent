<?php

namespace HelpGent\App\Providers;

use HelpGent\App\Repositories\FormRepository;
use HelpGent\WpMVC\Contracts\Provider;
use HelpGent\WpMVC\Enqueue\Enqueue;
use HelpGent\WpMVC\View\View;

class ShortCodeServiceProvider implements Provider {
    public function boot() {
        add_action( 'init', [ $this, 'action_init' ] );
    }

    /**
     * Fires after WordPress has finished loading but before any headers are sent.
     *
     */
    public function action_init() : void {
        add_shortcode( "helpgent-form", [$this, 'content'] );
        add_shortcode( "helpgent_user_dashboard", [$this, 'user_dashboard'] );
        add_shortcode( "helpgent_messages", [$this, 'user_dashboard'] );
    }

    public function content( $attr ) {

        if ( ! is_array( $attr ) || empty( $attr['id'] ) ) {
            return;
        }

        $id          = intval( $attr['id'] );
        $full_screen = in_array( 'full-screen', $attr, true );

        /**
         * @var FormRepository $form_repository
         */
        $form_repository = helpgent_singleton( FormRepository::class );

        $form = $form_repository->get_by_id_publish( $id );

        if ( ! $form ) {
            return;
        }

        include_once helpgent_dir( 'enqueues/register.php' );
        include_once helpgent_dir( 'enqueues/enqueue-common.php' );

        wp_enqueue_script( 'helpgent/form/shortcode' );

        return View::get( 'form-content', compact( 'form', 'full_screen' ) );
    }

    public function user_dashboard() {        
        include_once helpgent_dir( 'enqueues/register.php' );
        include_once helpgent_dir( 'enqueues/enqueue-common.php' );

        Enqueue::script( 'helpgent/userdashboard/shortcode', 'build/js/frontend/UserDashboard/index', ['helpgent/notification'] );
        return View::get( 'user-dashboard' );
    }
}