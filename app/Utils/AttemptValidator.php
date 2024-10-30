<?php

namespace HelpGent\App\Utils;

use WP_Error;

class AttemptValidator {
    protected string $key;

    protected int $total_attempt_allow;

    protected int $waiting_time;

    public function __construct( string $attempt_unique_key, int $total_attempt_allow, int $waiting_time ) {
        $this->key                 = $attempt_unique_key;
        $this->total_attempt_allow = $total_attempt_allow;
        $this->waiting_time        = $waiting_time;
    }

    public function validate(): ?WP_Error {
        $option         = helpgent_option();
        $attempted_data = $this->get_attempted_data();

        $attempt = [
            'last_attempt'  => time(),
            'total_attempt' => 1
        ];

        if ( $attempted_data ) {
            
            $waiting_time = $attempted_data['last_attempt'] + $this->waiting_time;

            if ( $this->total_attempt_allow <= $attempted_data['total_attempt'] ) {
                if ( $waiting_time > time() ) {
                    return new WP_Error( 503, sprintf( esc_html__( "Please try again after %s.", "helpgent" ), date( 'D M d Y H:i:s \G\M\TO', $waiting_time ) ) );
                }
            } else {
                $attempt['total_attempt'] = $attempted_data['total_attempt'] + 1;
            }
        }

        $option->update( $this->key, $attempt );
        $_SESSION[$this->key] = $attempt;
        setcookie( $this->key, base64_encode( serialize( $attempt ) ), time() + YEAR_IN_SECONDS, '/' );

        session_write_close();

        return null;
    }

    protected function get_attempted_data() {
        $option  = helpgent_option();
        $attempt = $option->get_by_name( $this->key );

        if ( ! empty( $attempt ) ) {
            return $attempt;
        }
        
        if ( ! empty( $_SESSION[$this->key] ) ) {
            return $_SESSION[$this->key];
        }

        if ( empty( $_COOKIE[$this->key] ) ) {
            return null;
        }

        //phpcs:ignore WordPress.Security.ValidatedSanitizedInput.MissingUnslash, WordPress.Security.ValidatedSanitizedInput.InputNotSanitized
        $attempt = maybe_unserialize( base64_decode( $_COOKIE[$this->key] ) );

        if ( is_array( $attempt ) && ! empty( $attempt['last_attempt'] ) && ! empty( $attempt['total_attempt'] ) ) {
            return [
                'last_attempt'  => absint( $attempt['last_attempt'] ),
                'total_attempt' => absint( $attempt['total_attempt'] )
            ];
        }

        return null;
    }
}