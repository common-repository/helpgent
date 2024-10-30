<?php

namespace HelpGent\App\BackgroundProcessors\MediaCleanUp;

use Exception;
use HelpGent\App\BackgroundProcessors\CoreBackgroundProcess;
use HelpGent\App\EnumeratedList\BackgroundProcessStatus;

class BackgroundProcess extends CoreBackgroundProcess {
    protected $action = 'background_media_clean_up_process';

    public function task( $item ) {
        if ( ! $this->is_valid_callback( $item ) ) {
            $this->after_done();
            return false;
        }

        try {
            update_option( 'helpgent_media_clean_up_status', BackgroundProcessStatus::RUNNING );
            
            $args     = isset( $item['args'] ) && is_array( $item['args'] ) ? $item['args'] : [];
            $callback = call_user_func_array( $item['callback'], $args );

            $is_done = $callback !== true;

            if ( $is_done ) {
                $this->after_done();
            }

            return ! $is_done ? $item : false;
        } catch ( Exception $e ) {
            return true;
        }
    }

    protected function is_valid_callback( $item ) {
        if ( ! is_array( $item ) ) {
            return false;
        }

        if ( ! isset( $item['callback'] ) ) {
            return false;
        }

        if ( ! is_callable( $item['callback'] ) ) {
            return false;
        }

        return true;
    }

    public static function before_start() {
        update_option( 'helpgent_media_clean_up_status', BackgroundProcessStatus::INITIALIZED );
    }

    public static function after_done() {
        update_option( 'helpgent_media_clean_up_status', BackgroundProcessStatus::IDLE );
    }

    public static function get_status(): string {
        $status = get_option( 'helpgent_media_clean_up_status', BackgroundProcessStatus::IDLE );
        return ! is_string( $status ) ? BackgroundProcessStatus::IDLE : $status;
    }
}