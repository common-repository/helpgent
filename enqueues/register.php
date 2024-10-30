<?php

use HelpGent\WpMVC\Enqueue\Enqueue;

defined( 'ABSPATH' ) || exit;

Enqueue::register_script( 'helpgent/hooks', 'build/hooks/index' );
Enqueue::register_script( 'helpgent/notification', 'build/js/notification' );
Enqueue::register_style( 'helpgent/notification', 'build/css/notification' );
Enqueue::register_script( 'helpgent/modules', 'build/modules' );
Enqueue::register_script( 'helpgent/components', 'build/components' );
Enqueue::register_script( 'helpgent/store', 'build/js/queryStore' );
Enqueue::register_style( 'helpgent/style', 'build/css/global', ['helpgent/notification', 'wp-components'] );
Enqueue::register_script( 'helpgent/form/shortcode', 'build/js/frontend/ChatForm/index' );

wp_register_script( 'helpgent/record-rtc', helpgent_url( 'assets/js/RecordRTC.min.js' ), [], helpgent_version() );

$user = wp_get_current_user();

wp_localize_script(
    'helpgent/modules', 'helpgent_current_user', [
        'id'           => $user->ID,
        'display_name' => $user->display_name
    ]
);

$data = [
    'baseUrl'     => false,
    'locale'      => determine_locale(),
    'domainMap'   => [],
    'domainPaths' => [],
];

$lang_dir    = WP_LANG_DIR;
$content_dir = WP_CONTENT_DIR;
$abspath     = ABSPATH;

// Note: str_starts_with() is not used here, as wp-includes/compat.php may not be loaded at this point.
if ( strpos( $lang_dir, $content_dir ) === 0 ) {
    $data['baseUrl'] = content_url( substr( trailingslashit( $lang_dir ), strlen( trailingslashit( $content_dir ) ) ) );
} elseif ( strpos( $lang_dir, $abspath ) === 0 ) {
    $data['baseUrl'] = site_url( substr( trailingslashit( $lang_dir ), strlen( untrailingslashit( $abspath ) ) ) );
}

Enqueue::script( 'helpgent/i18n', 'build/js/i18n-loader' );

$data['domainMap']   = (object) $data['domainMap']; // Ensure it becomes a json object.
$data['domainPaths'] = (object) $data['domainPaths']; // Ensure it becomes a json object.

wp_add_inline_script( 'helpgent/i18n', 'if (typeof wp.helpgent18nLoader === "undefined") { wp.helpgent18nLoader = {}; } wp.helpgent18nLoader.state = ' . wp_json_encode( $data, JSON_UNESCAPED_SLASHES ) . ';' );