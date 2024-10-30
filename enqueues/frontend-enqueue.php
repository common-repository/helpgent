<?php

use HelpGent\App\Repositories\FormRepository;
use HelpGent\WpMVC\Database\Query\Builder;
use HelpGent\WpMVC\Enqueue\Enqueue;

defined( 'ABSPATH' ) || exit;

wp_register_script( 'helpgent' , false );
wp_enqueue_script( 'helpgent' );
wp_localize_script( 'helpgent', 'helpgent_localization', helpgent_frontend_localizations() );

include_once __DIR__ . '/register.php';

/**
 * Enqueue form bubble required scripts if the current page has the bubble.
 * 
 * 
 * @var FormRepository $form_repository
 */
$form_repository = helpgent_singleton( FormRepository::class );

add_filter(
    'helpgent_chat_bubble_form_query', function( Builder $query ) {
        return $query->select( 1 );
    }, 99 
);

if ( ! empty( $form_repository->get_bubble_by_page_id( helpgent_get_current_page_id() ) ) ) {
    include_once __DIR__ . '/enqueue-common.php';

    Enqueue::script( 'helpgent/form/bubble', 'build/js/frontend/ChatBubble/index' );
}