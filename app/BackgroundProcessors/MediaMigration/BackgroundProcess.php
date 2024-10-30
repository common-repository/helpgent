<?php

namespace HelpGent\App\BackgroundProcessors\MediaMigration;

use Exception;
use HelpGent\App\BackgroundProcessors\CoreBackgroundProcess;
use HelpGent\App\EnumeratedList\BackgroundProcessStatus;

class BackgroundProcess extends CoreBackgroundProcess {
    protected $action = 'background_media_migration_process';

    protected $after_stop_callback;

    public function set_after_stop_callback( callable $callable ) {
        $this->after_stop_callback = $callable;
    }

    public function task( $item ) {
        if ( self::is_canceling_migration() ) {
            self::after_cancelled();
            $this->maybe_run_after_stop_callback();
            return false;
        }

        if ( ! self::is_valid_callback( $item ) ) {
            self::after_done();
            $this->maybe_run_after_stop_callback();
            return false;
        }

        try {
            update_option( 'helpgent_media_migration_status', BackgroundProcessStatus::RUNNING );
            
            $args     = isset( $item['args'] ) && is_array( $item['args'] ) ? $item['args'] : [];
            $callback = call_user_func_array( $item['callback'], $args );

            $is_done = $callback !== true;

            if ( $is_done ) {
                self::after_done();
                $this->maybe_run_after_stop_callback();
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

    public static function before_start( string $from, string $to ) {
        update_option( 'helpgent_media_migration_status', BackgroundProcessStatus::INITIALIZED );
        update_option( 'helpgent_media_migration_route', [ 'from' => $from, 'to' => $to ] );
        update_option( 'helpgent_cancel_media_migration_process', 0 );
    }

    public static function after_cancelled() {
        update_option( 'helpgent_media_migration_status', BackgroundProcessStatus::CANCELLED );
        update_option( 'helpgent_cancel_media_migration_process', 0 );
    }

    public static function after_done() {
        update_option( 'helpgent_media_migration_status', BackgroundProcessStatus::DONE );
        update_option( 'helpgent_cancel_media_migration_process', 0 );
    }

    protected function maybe_run_after_stop_callback() {
        if ( is_callable( $this->after_stop_callback ) ) {
            call_user_func( $this->after_stop_callback );
        }
    }
    
    public static function reset() {
        update_option( 'helpgent_media_migration_status', BackgroundProcessStatus::IDLE );
        update_option( 'helpgent_media_migration_route', '' );
        update_option( 'helpgent_cancel_media_migration_process', 0 );
    }

    public static function get_status(): string {
        $status = get_option( 'helpgent_media_migration_status', BackgroundProcessStatus::IDLE );
        return ! is_string( $status ) ? BackgroundProcessStatus::IDLE : $status;
    }

    public static function get_route(): ?array {
        $route = get_option( 'helpgent_media_migration_route', '' );
        return is_array( $route ) ? $route : null;
    }

    public static function cancel_migration(): void {
        update_option( 'helpgent_cancel_media_migration_process', 1 );
    }

    public static function is_canceling_migration(): bool {
        return 1 === absint( get_option( 'helpgent_cancel_media_migration_process', 0 ) );
    }
}