<?php

defined( 'ABSPATH' ) || exit;

use HelpGent\App\DTO\AttachmentDTO;
use HelpGent\App\Utils\User;

function helpgent_make_attachment_dto( stdClass $attachment ): AttachmentDTO {
    $dto = new AttachmentDTO(
        $attachment->title,
        $attachment->mime_type,
        $attachment->file_size,
        $attachment->storage,
    );

    $dto->set_id( $attachment->id );
    $dto->set_file_id( $attachment->file_id );

    return $dto;
}

function helpgent_render_media_file( string $file_path, bool $download = false ) : void {
    if ( ! is_file( $file_path ) ) {
        return;
    }

    ignore_user_abort( true );
    set_time_limit( 0 ); // disable the time limit for this script

    $mimetype = helpgent_get_file_mime_type( $file_path );

    header( 'Content-Type: ' . $mimetype );

    // phpcs:ignore WordPress.Security.NonceVerification.Recommended, WordPress.Security.ValidatedSanitizedInput.MissingUnslash, WordPress.Security.ValidatedSanitizedInput.InputNotSanitized
    $download = ( ! empty( $_GET['download'] ) ) ? $_GET['download'] : $download;

    if ( $download || ! helpgent_is_the_file_printable( $file_path ) ) {
        $file_name = wp_basename( $file_path );
        header( "Content-Disposition: attachment; filename=$file_name" );
    }

    // phpcs:ignore WordPress.Security.ValidatedSanitizedInput.InputNotSanitized
    if ( isset( $_SERVER['SERVER_SOFTWARE'] ) && false === strpos( wp_unslash( $_SERVER['SERVER_SOFTWARE'] ), 'Microsoft-IIS' ) ) {
        header( 'Content-Length: ' . filesize( $file_path ) );
    }

    $last_modified = gmdate( 'D, d M Y H:i:s', filemtime( $file_path ) );
    $etag          = '"' . md5( $last_modified ) . '"';

    header( "Last-Modified: $last_modified GMT" );
    header( 'ETag: ' . $etag );
    header( 'Expires: ' . gmdate( 'D, d M Y H:i:s', time() + 100000000 ) . ' GMT' );
    header( 'X-Robots-Tag: none' );

    // Support for Conditional GET
    // phpcs:ignore WordPress.Security.ValidatedSanitizedInput.InputNotSanitized
    $client_etag = isset( $_SERVER['HTTP_IF_NONE_MATCH'] ) ? wp_unslash( $_SERVER['HTTP_IF_NONE_MATCH'] ) : false;
    
    if ( ! isset( $_SERVER['HTTP_IF_MODIFIED_SINCE'] ) ) {
        $_SERVER['HTTP_IF_MODIFIED_SINCE'] = false;
    }

    // phpcs:ignore WordPress.Security.ValidatedSanitizedInput.InputNotSanitized
    $client_last_modified = trim( wp_unslash( $_SERVER['HTTP_IF_MODIFIED_SINCE'] ) );
    
    // If string is empty, return 0. If not, attempt to parse into a timestamp
    $client_modified_timestamp = $client_last_modified ? strtotime( $client_last_modified ) : 0;
    
    // Make a timestamp for our most recent modification...
    $modified_timestamp = strtotime( $last_modified );

    if ( ( $client_last_modified && $client_etag )
        ? ( ( $client_modified_timestamp >= $modified_timestamp ) && ( $client_etag == $etag ) )
        : ( ( $client_modified_timestamp >= $modified_timestamp ) || ( $client_etag == $etag ) )
    ) {
        status_header( 304 );
        exit;
    }

    status_header( 200 );
    readfile( $file_path );

    exit;
}

function helpgent_is_the_file_printable( string $file_path ) : bool {
    // Check if file is image
    preg_match( '/\.(gif|jpg|jpe?g|tiff|png|bmp|webp)$/i', $file_path, $matches );

    if ( ! empty( $matches ) ) {
        return true;
    }

    $mime_type = helpgent_get_file_mime_type( $file_path );

    // Check if file is PDF
    if ( $mime_type == "application/pdf" ) {
        return true;
    }
    
    // Check if file is video
    if ( strstr( $mime_type, "video/" ) ) {
        return true;
    }

    // Check if file is audio
    if ( strstr( $mime_type, "audio/" ) ) {
        return true;
    }

    return false;
}

function helpgent_get_file_mime_type( string $file_path ) : string {
    $mime = wp_check_filetype( $file_path );
    return ( false !== $mime['type'] ) ? $mime['type'] : '';
}

function helpgent_require_media_uploader_files() : void {
    require_once( ABSPATH . "wp-admin" . '/includes/image.php' );
    require_once( ABSPATH . "wp-admin" . '/includes/file.php' );
    require_once( ABSPATH . "wp-admin" . '/includes/media.php' );
}

function helpgent_prepare_upload_directory() : void {

    if ( is_dir( helpgent_upload_dir() ) ) {

        // Delete .htaccess file if exists
        if ( is_file( helpgent_upload_dir() . '.htaccess' ) ) {
            WP_Filesystem();
            global $wp_filesystem;

            $wp_filesystem->delete( helpgent_upload_dir() . '.htaccess' );
        }

        return;
    }

    // Create Upload Directory
    wp_mkdir_p( helpgent_upload_dir() );
}

function helpgent_get_extension_from_mime_type( string $mime_type, bool $with_dot = true ) : string {
    $mime_type       = preg_replace( '/;.+$/', '', $mime_type );
    $mime_types      = wp_get_mime_types();
    $mimes           = array_values( $mime_types );
    $mime_type_index = array_search( $mime_type, $mimes );

    if ( false === $mime_type_index ) {
        return '';
    } 

    $mime_type_ext = array_keys( $mime_types )[ $mime_type_index ];
    $mime_type_ext = explode( '|', $mime_type_ext );
    $mime_type_ext = $mime_type_ext[0];

    return ( $with_dot ) ? '.' . $mime_type_ext : $mime_type_ext;
}

function helpgent_rename_attachment_file( string $old_name, string $new_name ) : ?string {
    $old_path = helpgent_upload_dir( $old_name );

    if ( ! file_exists( $old_path ) ) {
        return null;
    }

    $new_name = helpgent_generate_unique_file_name( $new_name );
    $new_path = helpgent_upload_dir( $new_name );

    rename( $old_path, $new_path );

    return $new_name;
}

function helpgent_trim_attachment_file( string $file_name ) : ?int {
    $file_path = helpgent_upload_dir( $file_name );

    if ( file_exists( $file_path ) ) {
        $new_content = trim( file_get_contents( $file_path ) );
        file_put_contents( $file_path, $new_content );

        return strlen( $new_content );
    }

    return null;
}

function helpgent_can_user_access_attachment( AttachmentDTO $attachment, ?User $user ) : bool {
    if ( ! $user ) {
        // Permission deny if user not found
        $access = false;

    } elseif ( in_array( 'administrator', $user->get_roles(), true ) ) {
        // Permission granted, if the user is a administrator
        $access = true;

    } else {
        $response = \HelpGent\App\Models\Response::query( "response" )->select( 1 )->where( 'created_by', $user->get_id() )->where( 'is_guest', $user->get_is_guest() )
                ->join( 'helpgent_response_attachment', 'response.id', '=', 'helpgent_response_attachment.response_id' )
                ->where( "helpgent_response_attachment.attachment_id", $attachment->get_id() )
                ->get();

        $access = ! empty( $response );
    }

    return apply_filters( 'helpgent_can_user_access_attachment', $access, $attachment, $user );
}

function helpgent_upload_attachment( array $file ) {
    if ( ! function_exists( 'wp_handle_upload' ) ) {
        helpgent_require_media_uploader_files();
    }

    $upload_file = wp_handle_upload( $file, ['test_form' => false ] );

    if ( ! $upload_file && isset( $upload_file['error'] ) ) {
        return false;
    }

    $file_path        = $upload_file['file'];
    $file_name        = basename( $file_path );
    $file_type        = wp_check_filetype( $file_name, null );
    $attachment_title = sanitize_file_name( pathinfo( $file_name, PATHINFO_FILENAME ) );
    $attachment       = [
        'post_mime_type' => $file_type['type'],
        'post_title'     => $attachment_title,
        'post_content'   => '',
        'post_status'    => 'inherit'
    ];

    // Insert the attachment into the WordPress Media Library
    $attachment_id = wp_insert_attachment( $attachment, $file_path );

    // Generate attachment metadata and update the database
    $attach_data = wp_generate_attachment_metadata( $attachment_id, $file_path );
    wp_update_attachment_metadata( $attachment_id, $attach_data );

    $upload_file['attachment_id'] = $attachment_id;

    return $upload_file;
}