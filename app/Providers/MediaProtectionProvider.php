<?php

namespace HelpGent\App\Providers;

use HelpGent\App\Models\Option;
use HelpGent\App\Repositories\AttachmentRepository;
use HelpGent\WpMVC\Contracts\Provider;

class MediaProtectionProvider implements Provider {
    public static $media_rewrite_endpoint = 'helpgent_media_protection';

    public static $pattern = "([A-Za-z0-9_@.\/&+-]+)+\.([A-Za-z0-9_@.\/&+-]+)$";

    public function boot() {
        add_action( 'init', [ $this, 'add_rewrite_endpoint' ] );
        add_action( 'parse_query', [ $this, 'parse_query' ] );
        add_filter( 'upload_mimes', [ $this, 'add_additional_mimes_support' ], 20, 1 );
    }

    public static function after_plugin_activation() {
        flush_rewrite_rules();
    }

    public static function after_plugin_deactivation() {
        remove_filter( 'mod_rewrite_rules', [ __CLASS__, 'htaccess_contents' ] );
        flush_rewrite_rules();
    }

    public static function htaccess_contents( string $rules ) : string {
        $new_rule  = "\n\n# Helpgent Media Protection Rewrite Rules BEGIN" . PHP_EOL;
        $new_rule .= self::get_apache_rewrite_rules();
        $new_rule .= "# Helpgent Media Protection Rewrite Rules End\n" . PHP_EOL;

        return $new_rule . $rules . PHP_EOL;
    }

    public function add_rewrite_endpoint() : void {
        add_rewrite_endpoint( self::$media_rewrite_endpoint, EP_ROOT );
    }

    public function parse_query( $query ) : void {
        if ( ! isset( $query->query_vars[ self::$media_rewrite_endpoint ] ) ) {
            return;
        }

        // phpcs:ignore WordPress.Security.NonceVerification.Recommended, WordPress.Security.ValidatedSanitizedInput.InputNotValidated, WordPress.Security.ValidatedSanitizedInput.MissingUnslash, WordPress.Security.ValidatedSanitizedInput.InputNotSanitized
        $file_name = $query->query_vars[ self::$media_rewrite_endpoint ] . '.' . $_GET['file_type'];

        // Render contact file if file name begins with contact
        if ( ! empty( preg_match( "/^contact/", $file_name ) ) ) {
            $current_user_id = helpgent_get_current_user()->get_id();
            if ( current_user_can( 'manage_options' ) || 
                Option::query()->where( 'option_name', 'like', "contact_{$current_user_id}%" )->where( 'option_value', ltrim( $file_name, 'contact/' ) )->first()
            ) {
                helpgent_render_media_file( helpgent_upload_dir( $file_name ), true );
            }

            return;
        }

        // Otherwise render the root file
        $this->render_media( $file_name );
    }

    public function render_media( string $file_name ) : void {
        /**
         * @var AttachmentRepository $attachment_repository
         */
        $attachment_repository = helpgent_singleton( AttachmentRepository::class );
        $attachment            = $attachment_repository->get_by_title( $file_name );

        if ( ! $attachment ) {
            return;
        }

        $current_user = helpgent_get_current_user();
        $attachment   = helpgent_make_attachment_dto( $attachment );

        // Validate The User
        if ( ! helpgent_can_user_access_attachment( $attachment, $current_user ) ) {
            return;
        }

        if ( ! apply_filters( 'helpgent_render_media', true, $attachment ) ) {
            return;
        }

        // Render The File
        helpgent_render_media_file( helpgent_upload_dir( $file_name ) );
    }

    public static function get_upload_dir() : string {
        return 'wp-content/uploads/helpgent/';
    }

    public static function get_apache_rewrite_rules() : string {
        /**
         * Helpgent root folder to store attachments
         */
        $media_endpoint = self::$media_rewrite_endpoint;
        $media_pattern  = self::get_upload_dir() . static::$pattern;
        return "RewriteRule {$media_pattern} index.php?{$media_endpoint}=$1&file_type=$2 [QSA,L]" . PHP_EOL;
    }

    public static function get_nginx_rewrite_rules() : string {
        $endpoint = self::$media_rewrite_endpoint;
        $pattern  = self::get_upload_dir() . static::$pattern;
        $path     = "/index.php?{$endpoint}=$1&file_type=$2";

        return "rewrite {$pattern} \"{$path}\" last;";
    }

    public function add_additional_mimes_support( $mime_types = [] ) {

        $mime_types['webm'] = 'video/webm';

        return $mime_types;
    }
}