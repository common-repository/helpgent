<?php

namespace HelpGent\App\Providers\Admin;

use HelpGent\WpMVC\Contracts\Provider;

class UserServiceProvider implements Provider {
    public function boot() {
        add_action( 'init', [ $this, 'action_init' ] );
    }

    /**
     * Fires after WordPress has finished loading but before any headers are sent.
     */
    public function action_init() : void {
        add_filter( 'manage_users_columns', [$this, 'user_columns'] );
        add_action( 'manage_users_custom_column', [$this, 'user_column_value'], 10, 3 );
    }

    public function user_columns( $columns ) {
        $new_columns = [];
        foreach ( $columns as $key => $value ) {
            $new_columns[$key] = $value;
            if ( $key === 'email' ) {
                $new_columns['request_for_delete'] = esc_html__( "Request for delete", "helpgent" );
            }
        }
        return $new_columns;
    }

    public function user_column_value( $value, $column_name, $user_id ) {
        if ( ! 'request_for_delete' === $column_name ) {
            return $value;
        }

        $target_timestamp = get_user_meta( $user_id, 'helpgent_delete_scheduled', true );

        if ( empty( $target_timestamp ) ) {
            return;
        }

        $target_timestamp += MONTH_IN_SECONDS;

        // Calculate the difference in seconds
        $difference = $target_timestamp - time();

        // Convert seconds to days
        $days_left = floor( $difference / DAY_IN_SECONDS );

        // Display the result
        if ( $days_left > 0 ) {
            $text =  sprintf( esc_html__( "%s days left", 'helpgent' ), $days_left );
        } elseif ( $days_left == 0 ) {
            $text = esc_html__( "Will delete it today", "helpgent" );
        } else {
            $text = esc_html__( "Will delete it in the next queue", "helpgent" );
        }

        return "<span style='color:#ff1010;'>{$text}</span>";
    }
}