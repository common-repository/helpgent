<?php

namespace HelpGent\App\Setup;

use HelpGent\App\Providers\MediaProtectionProvider;

class Deactivation {
    public function __construct() {
        MediaProtectionProvider::after_plugin_deactivation();
        update_option( 'helpgent_dismiss_nginx_setup_notice', false );
        do_action( 'helpgent_after_deactivation' );
    }
}