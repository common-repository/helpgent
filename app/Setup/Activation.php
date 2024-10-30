<?php

namespace HelpGent\App\Setup;

use HelpGent\WpMVC\Contracts\Migration;
use HelpGent\App\Providers\MediaProtectionProvider;
use HelpGent\App\Providers\Admin\UserDashboardPageProvider;
use HelpGent\Database\Migrations\CreateDB;

class Activation implements Migration {
    public function more_than_version() {
        return '1.0.0';
    }

    public function execute(): bool {
        ( new CreateDB )->execute();
        helpgent_prepare_upload_directory();

        MediaProtectionProvider::after_plugin_activation();
        UserDashboardPageProvider::setup_dashboard_page();

        $font_family_dir = helpgent_font_family_dir();

        if ( ! is_dir( $font_family_dir ) ) {
            mkdir( $font_family_dir, 0777, true );
        }
        delete_option( "helpgent_dismiss_nginx_setup_notice" );
        delete_option( "helpgent_is_running_background_process" );
        wp_clear_scheduled_hook( 'helpgent_background_processor_schedule' );

        return true;
    }
}