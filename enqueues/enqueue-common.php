<?php

defined( 'ABSPATH' ) || exit;

wp_enqueue_script( 'helpgent/helper' );
wp_enqueue_style( 'helpgent/style' );
wp_enqueue_script( 'helpgent/record-rtc' );

do_action( 'helpgent_after_enqueued_common_scripts' );