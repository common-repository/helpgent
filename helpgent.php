<?php

defined( 'ABSPATH' ) || exit;

/**
 * Plugin Name:       HelpGent
 * Description:       HelpGent is a reliable, asynchronous communication tool that offers jaw-dropping qualities like video messaging, voice messaging, text messaging, and screen recording.
 * Version:           2.2.4
 * Requires at least: 6.0
 * Requires PHP:      7.4
 * Tested up to:      6.6
 * Author:            wpWax
 * Author URI:        https://wpwax.com/
 * License:           GPL v3 or later
 * License URI:       http://www.gnu.org/licenses/gpl-3.0.html
 * Text Domain:       helpgent
 * Domain Path:       /languages
 */

define( 'HELPGENT_DEPENDENCY_VERSION', '1.0.2' );

function helpgent_old_pro_plugin_removed_notice() {
    if ( ! get_option( 'helpgent_removed_old_pro_plugin' ) ) {
        return;
    }
    include_once __DIR__ . '/resources/views/old-pro-remove-notice.php';
}

/**
 * Remove v1 pro plugin if exists. This code will execute only one time.
 */
if ( is_file( WP_PLUGIN_DIR . "/helpgent-pro/helpgent.php" ) ) {

    include_once ABSPATH . 'wp-admin/includes/file.php';
    include_once ABSPATH . 'wp-includes/pluggable.php';
    include_once ABSPATH . 'wp-includes/link-template.php';

    WP_Filesystem();

    global $wp_filesystem;

    /**
     * @var WP_Filesystem_Direct $wp_filesystem
     */
    $wp_filesystem->rmdir( WP_PLUGIN_DIR . "/helpgent-pro", true );

    add_option( "helpgent_removed_old_pro_plugin", true );

    add_action( 'admin_notices', 'helpgent_old_pro_plugin_removed_notice' );

    wp_safe_redirect( admin_url( 'admin.php?page=helpgent' ) );
    exit;
}

add_action( 'admin_notices', 'helpgent_old_pro_plugin_removed_notice' );

use HelpGent\App\Providers\MediaProtectionProvider;
use HelpGent\WpMVC\App;

require_once __DIR__ . '/vendor/vendor-src/autoload.php';
require_once __DIR__ . '/app/Helpers/helper.php';

final class HelpGent {
    public static HelpGent $instance;

    public static function instance(): HelpGent {
        if ( empty( self::$instance ) ) {
            self::$instance = new self;
        }
        return self::$instance;
    }

    public function load() {
        // Run Activation Tasks
        register_activation_hook(
            __FILE__, function() {
                ( new HelpGent\App\Setup\Activation() )->execute();
            } 
        );

        // Run Deactivation Tasks
        register_deactivation_hook(
            __FILE__, function() {
                new HelpGent\App\Setup\Deactivation();
            } 
        );

        add_filter( 'mod_rewrite_rules', [ MediaProtectionProvider::class, 'htaccess_contents' ] );

        $application = App::instance();

        $application->boot( __FILE__, __DIR__ );

        /**
         * Fires once activated plugins have loaded.
         *
         */
        add_action(
            'plugins_loaded', function () use ( $application ): void {

                do_action( 'before_load_helpgent' );

                $application->load();

                do_action( 'after_load_helpgent' );
            }
        );
    }
}

HelpGent::instance()->load();
