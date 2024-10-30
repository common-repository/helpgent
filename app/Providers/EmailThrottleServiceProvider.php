<?php

namespace HelpGent\App\Providers;

use HelpGent\WpMVC\Contracts\Provider;

class EmailThrottleServiceProvider implements Provider {
    public function boot() {
        add_action( 'helpgent_after_sending_email', [$this, 'add_new_mail'] );
        add_filter( 'helpgent_before_sending_email', [$this, 'throttle'] );
    }

    public function add_new_mail( bool $email ) {
        if ( ! $email ) {
            return;
        }
        $total_email_sent  = intval( get_option( 'helpgent_total_email_sent', 0 ) );
        $total_email_sent += 1;
        update_option( 'helpgent_total_email_sent', $total_email_sent );
    }

    public function throttle( bool $allowed ) {
        if ( ! $allowed ) {
            return $allowed;
        }

        $allowed_email    = absint( helpgent_get_setting( 'allowed_email', 1000 ) );
        $total_email_sent = intval( get_option( 'helpgent_total_email_sent', 0 ) );

        if ( $allowed_email <= $total_email_sent ) {
            return false;
        }

        return $allowed;
    }
}