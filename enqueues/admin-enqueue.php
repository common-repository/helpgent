<?php

use HelpGent\WpMVC\Enqueue\Enqueue;

defined( 'ABSPATH' ) || exit;

include_once __DIR__ . '/register.php';

if ( 'helpgent_page_helpgent' === get_current_screen()->id ) {
    wp_enqueue_media();

    Enqueue::script( 'helpgent/admin', 'build/js/index', ['helpgent/notification'] );
    wp_set_script_translations( 'helpgent/admin', "helpgent" );

    wp_enqueue_style( 'helpgent/style' );
    wp_enqueue_script( 'helpgent/record-rtc' );
}
