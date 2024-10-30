<?php

namespace HelpGent\App\Providers\Admin;

use HelpGent\App\Repositories\FormRepository;
use HelpGent\WpMVC\Contracts\Provider;

class MediaServiceProvider implements Provider {
    public function boot() {
        add_action( 'delete_attachment',[ $this, 'action_delete_attachment' ] );
    }

    /**
     * Fires before an attachment is deleted, at the start of wp_delete_attachment().
     *
     * @param int $post_id Attachment ID
     */
    public function action_delete_attachment( int $post_id ) : void {
        /**
         * @var FormRepository $form_repository
         */
        $form_repository = helpgent_singleton( FormRepository::class );
        $form_repository->delete_demo_attachment_by_id( $post_id );
    }
}