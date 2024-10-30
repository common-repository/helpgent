<?php

namespace HelpGent\App\BackgroundProcessors\MediaTransfer;

use Exception;
use HelpGent\App\BackgroundProcessors\CoreBackgroundProcess;
use HelpGent\App\EnumeratedList\BackgroundProcessStatus;

class BackgroundProcess extends CoreBackgroundProcess {
    protected $action = 'background_media_transfer_process';

    public function task( $item ) {
        if ( ! $this->is_valid_callback( $item ) ) {
            $this->after_done();
            return false;
        }

        try {
            update_option( 'helpgent_media_transfer_status', BackgroundProcessStatus::RUNNING );
            
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
        update_option( 'helpgent_media_transfer_status', BackgroundProcessStatus::INITIALIZED );
        update_option( 'helpgent_cancel_media_migration_process', 0 );
    }

    public static function after_done() {
        update_option( 'helpgent_media_transfer_status', BackgroundProcessStatus::IDLE );
        update_option( 'helpgent_cancel_media_migration_process', 0 );
    }

    public static function get_status(): string {
        $status = get_option( 'helpgent_media_transfer_status', BackgroundProcessStatus::IDLE );
        return ! is_string( $status ) ? BackgroundProcessStatus::IDLE : $status;
    }
}