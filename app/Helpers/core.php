<?php

defined( 'ABSPATH' ) || exit;

use HelpGent\WpMVC\App;
use HelpGent\DI\Container;
use HelpGent\App\Repositories\SettingsRepository;

function helpgent():App {
    return App::$instance;
}

function helpgent_config( string $config_key ) {
    return helpgent()::$config->get( $config_key );
}

function helpgent_app_config( string $config_key ) {
    return helpgent_config( "app.{$config_key}" );
}

function helpgent_version() {
    return helpgent_app_config( 'version' );
}

function helpgent_container():Container {
    return helpgent()::$container;
}

function helpgent_singleton( string $class ) {
    return helpgent_container()->get( $class );
}

function helpgent_make( string $class ) {
    return helpgent_container()->make( $class );
}

function helpgent_url( string $url = '' ) {
    return helpgent()::get_url( $url );
}

function helpgent_dir( string $dir = '' ) {
    return helpgent()::get_dir( $dir );
}

function helpgent_render( string $content ) {
    //phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
    echo $content;
}

/**
 * @param string $file
 * @return string Path
 */
function helpgent_upload_dir( string $file = '' ) : string {
    return WP_CONTENT_DIR . '/uploads/helpgent/' . ltrim( $file, '/' );
}

/**
 * @param string $file
 * @return string Path
 */
function helpgent_upload_url( string $file = '' ) : string {
    return WP_CONTENT_URL . '/uploads/helpgent/' . ltrim( $file, '/' );
}

function helpgent_font_family_dir( string $file = '' ) {
    return WP_CONTENT_DIR . '/helpgent-font-family/' . ltrim( $file, '/' );
}

function helpgent_font_family_url( string $file = '' ) {
    $content_url = ltrim( WP_CONTENT_URL, 'https:' );
    $content_url = ltrim( $content_url, 'http:' );
    return $content_url . '/helpgent-font-family/' . ltrim( $file, '/' );
}

function helpgent_frontend_localizations() {
    $localizations                               = helpgent_common_localizations();
    $localizations['supported_video_extensions'] = wp_get_video_extensions();
    $localizations['supported_file_extensions']  = wp_get_mime_types();
    $localizations['font_family_url']            = helpgent_font_family_url();
    $localizations['current_page_id']            = helpgent_get_current_page_id();
    $localizations['is_user_logged_in']          = is_user_logged_in() ? "1" : "0";

    return $localizations;
}

function helpgent_common_localizations() {
    /**
     * @var SettingsRepository $settings_repository
     */
    $settings_repository = helpgent_singleton( SettingsRepository::class );

    return [
        'rest_url'                  => get_rest_url( null, 'helpgent' ),
        'rest_nonce'                => wp_create_nonce( 'wp_rest' ),
        'google_recaptcha_site_key' => $settings_repository->get_by_key( "google_recaptcha_site_key" ),
        'google_map_api_key'        => $settings_repository->get_by_key( "google_map_api_key" ),
        'media_config'              => helpgent_config( 'media' ),
    ];
}