<?php

defined( 'ABSPATH' ) || exit;

use HelpGent\App\Utils\DateTime;
use HelpGent\App\Repositories\OptionRepository;
use HelpGent\App\Repositories\SettingsRepository;
use HelpGent\App\Repositories\FormRepository;
use HelpGent\App\Repositories\ResponseRepository;
use HelpGent\App\Support\Element\Element;
use HelpGent\WpMVC\Database\Query\Builder;

require_once __DIR__ . '/core.php';
require_once __DIR__ . '/media.php';
require_once __DIR__ . '/user.php';

function helpgent_now() {
    return DateTime::now();
}

function helpgent_is_valid_date( string $date, string $format ) {
    $date_time = \DateTime::createFromFormat( $format, $date );
    return $date_time && $date_time->format( $format ) === $date;
}

function helpgent_generate_token() {
    $time   = microtime( true );
    $random = bin2hex( random_bytes( 5 ) );
    $token  = $random . $time;
    return $token;
}

function helpgent_generate_unique_key( string $prefix = '' ) {
    return $prefix . '_' . uniqid();
}

function helpgent_generate_unique_file_name( string $file_name ) {
    $name = pathinfo( $file_name, PATHINFO_FILENAME );
    $ext  = pathinfo( $file_name, PATHINFO_EXTENSION );
    $ext  = ! empty( $ext ) ? ".{$ext}" : '';

    return wp_unique_filename( helpgent_upload_dir(), helpgent_trim_file_name( "{$name}{$ext}" ) );
}

function helpgent_trim_file_name( string $file_name, int $max_length = 100 ): string {
    if ( ! strlen( $file_name ) ) {
        return '';
    }

    if ( ! $max_length ) {
        return '';
    }

    preg_match( '/\.[a-zA-Z0-9]+$/', $file_name, $ext_matches );
    
    $ext = ! empty( $ext_matches ) ? $ext_matches[0] : '';
    
    $max_name_length = $ext ? $max_length - strlen( $ext ) : $max_length;
    $max_name_length = $max_name_length < 1 ? 1 : $max_name_length;

    $name_length = strlen( $file_name ) - strlen( $ext );

    $name_with_no_extension = substr( $file_name, 0, $name_length );
    $name_with_no_extension = substr( $name_with_no_extension, 0, $max_name_length );

    $new_file_name = "{$name_with_no_extension}{$ext}";

    return $new_file_name;
}

function helpgent_get_setting( string $key, $default = null ) {
    /**
     * @var SettingsRepository $setting_repository
     */
    $setting_repository = helpgent_singleton( SettingsRepository::class );
    return $setting_repository->get_by_key( $key, $default );
}

function helpgent_update_setting( string $key, $value ) {
     /**
     * @var SettingsRepository $setting_repository
     */
    $setting_repository = helpgent_singleton( SettingsRepository::class );
    return $setting_repository->update_setting( $key, $value );
}

function helpgent_get_current_page_id() {
    $page_id = 0;

    // Check if we are on a WooCommerce page
    if ( function_exists( 'is_woocommerce' ) ) {
        if ( is_cart() ) {
            $page_id = wc_get_page_id( 'cart' );
        } elseif ( is_checkout() ) {
            $page_id = wc_get_page_id( 'checkout' );
        } elseif ( is_account_page() ) {
            $page_id = wc_get_page_id( 'myaccount' );
        } elseif ( is_shop() ) {
            $page_id = wc_get_page_id( 'shop' );
        }
    }

    if ( $page_id === 0 ) {
        $page_id = get_queried_object_id();
    }

    return $page_id;
}

function helpgent_get_extension_from_path( string $path ) : string {
    return pathinfo( $path, PATHINFO_EXTENSION );
}

/**
 * Get current user ip address
 *
 * @return string|null
 */
function helpgent_get_user_ip_address() {
    // Check for shared Internet/ISP IP
    if ( ! empty( $_SERVER['HTTP_CLIENT_IP'] ) && filter_var( $_SERVER['HTTP_CLIENT_IP'], FILTER_VALIDATE_IP ) ) { //phpcs:ignore WordPress.Security.ValidatedSanitizedInput.MissingUnslash
        return sanitize_text_field( wp_unslash( $_SERVER['HTTP_CLIENT_IP'] ) );
    }

    // Check for IP addresses passed by proxies
    if ( ! empty( $_SERVER['HTTP_X_FORWARDED_FOR'] ) ) { //phpcs:ignore WordPress.Security.ValidatedSanitizedInput.MissingUnslash
        // Extract IP addresses
        $ip_addresses = explode(
            ',', sanitize_text_field( wp_unslash( $_SERVER['HTTP_X_FORWARDED_FOR'] ) )
        );

        // Check each IP address
        foreach ( $ip_addresses as $ip ) {
            $ip = trim( $ip );
            if ( filter_var( $ip, FILTER_VALIDATE_IP ) ) {
                return $ip;
            }
        }
    }

    // Check for the remote IP address
    if ( ! empty( $_SERVER['REMOTE_ADDR'] ) && filter_var( $_SERVER['REMOTE_ADDR'], FILTER_VALIDATE_IP ) ) { //phpcs:ignore WordPress.Security.ValidatedSanitizedInput.MissingUnslash
        return sanitize_text_field( wp_unslash( $_SERVER['REMOTE_ADDR'] ) );
    }

    return null;
}

function helpgent_get_server_name() {
    global $is_apache;

    if ( $is_apache ) {
        return 'apache';
    }

    // phpcs:ignore WordPress.Security.ValidatedSanitizedInput.InputNotSanitized
    $server_info = isset( $_SERVER['SERVER_SOFTWARE'] ) ? wp_unslash( $_SERVER['SERVER_SOFTWARE'] ) : '';

    $servers = [
        'nginx',
        'iis',
    ];

    foreach ( $servers as $server ) {
        if ( strpos( strtolower( $server_info ), $server ) !== false ) {
            return $server;
        }
    }

    return '';
}

function helpgent_is_one_level_array( array $array ) {
    foreach ( $array as $value ) {
        if ( is_array( $value ) ) {
            return false; // Contains nested array
        }
    }
    return true; // Valid one-level array
}

/**
 * Get value form nested array
 *
 * @param string $keys Comma separated array keys
 * @param array $values
 * @param mixed $default
 * @return mixed
 */
function helpgent_get_nested_value( string $keys, array $values, $default = null ) {
    $keys = explode( '.', $keys );

    $item = $values;

    foreach ( $keys as $key ) {
        if ( ! isset( $item[ $key ] ) ) {
            return $default;
        }
        $item = $item[$key];
    }
    return $item;
}

function helpgent_ignored_elements_on_submission():array {
    return apply_filters( 'helpgent_ignored_elements_on_submission', ['end', 'welcome', 'button', 'results', 'user_validation', 'statement'] );
}

function helpgent_ignored_elements_in_summary():array {
    return apply_filters( 'helpgent_ignored_elements_in_summary', ['end', 'welcome', 'button', 'results', 'user_validation', 'gdpr', 'recaptcha', 'statement'] );
}

function helpgent_get_dashboard_page_url(): ?string {
    $user_dashboard_page_id = absint( helpgent_get_setting( 'user_dashboard_page', 0 ) );
    $dashboard_page_link    = $user_dashboard_page_id ? get_permalink( $user_dashboard_page_id ) : false;

    return ! empty( $dashboard_page_link ) ? $dashboard_page_link : null;
}

function helpgent_option():OptionRepository {
    return helpgent_singleton( OptionRepository::class );
}

function helpgent_date_time_format() {
    return apply_filters( 'helpgent_date_time_format', 'Y-m-d H:i:s' );
}

function helpgent_remove_contacts_csv_cache( int $old_days = 2 ) {
    $temp_dir = helpgent_upload_dir( "contact" );

    if ( ! is_dir( $temp_dir ) ) {
        return;
    }

    $files = array_diff( scandir( $temp_dir ), ['.', '..'] );

    foreach ( $files as $file ) {
        $file_created_time = explode( '-', $file )[1];
        $file_created_time = rtrim( $file_created_time, '.csv' );
        $expired_time      = intval( $file_created_time ) + ( DAY_IN_SECONDS * $old_days );
        if ( $expired_time < time() ) {
            unlink( "$temp_dir/$file" );
        }
    }
}

function helpgent_is_preview() :bool {
    global $helpgent_is_preview;
    return $helpgent_is_preview ? true : false;
}

function helpgent_get_response_by_token( string $token, int $form_id ) {
    /**
     * @var FormRepository $form_repository
     */
    $form_repository = helpgent_singleton( FormRepository::class );
    $response_id     = $form_repository->get_meta_value( $form_id, $token );

    /**
     * @var ResponseRepository $response_repository
     */
    $response_repository = helpgent_singleton( ResponseRepository::class );
    return $response_repository->get_by_id( $response_id );
}

function helpgent_element_handler( string $field_type ):Element {
    $field_handler_class = helpgent_config( "element-fields-handlers.{$field_type}" );

    if ( ! class_exists( $field_handler_class ) ) {
        throw new Exception( __( 'Field handler not found.', 'helpgent' ), 500 );
    }

    $element_handler = helpgent_make( $field_handler_class );

    if ( ! $element_handler instanceof Element ) {
        throw new Exception( __( 'Please use a valid field handler.', 'helpgent' ), 500 );
    }

    return $element_handler;
}

function helpgent_export_contact( Builder $query, string $type = "guest" ) {
    $total_query = clone $query;
    $table_alias = $type === 'lead' ? 'contact' : $type;
    $total       = $total_query->distinct()->count( "{$table_alias}.id" );

    if ( 0 === $total ) {
        throw new Exception( sprintf( esc_html__( "There are no %s to export.", 'helpgent' ), $type ), 404 );
    }

    $temp_dir = helpgent_upload_dir( "contact" );

    if ( ! is_dir( $temp_dir ) ) {
        mkdir( $temp_dir, 0777, true );
    }

    helpgent_remove_contacts_csv_cache();

    $file_name = $type . '-' . time() . ".csv";
    $csv_file  = fopen( "$temp_dir/{$file_name}", 'w' );

    $per_page   = 100000;
    $total_page = ceil( $total / $per_page ) + 1;
    // contacts
    $select_query = clone $query;
    $data         = $select_query->pagination( $per_page, 1, $per_page );

    // Write the headers
    $headers = array_keys( (array) $data[0] );
    fputcsv( $csv_file, $headers );

    // Write the data
    helpgent_write_csv( $data, $csv_file );

    for ( $page = 2; $page < $total_page; $page++ ) {
        $select_query = clone $query;
        $data         = $select_query->pagination( $per_page, $page, $per_page );

        // Write the data
        helpgent_write_csv( $data, $csv_file );
    }

    fclose( $csv_file );

    return [
        'file_name' => $file_name,
        'url'       => helpgent_upload_url( "contact/{$file_name}" )
    ];
}

function helpgent_write_csv( array $data, $file ) {
    foreach ( $data as $row ) {
        fputcsv( $file, (array) $row );
    }
}
