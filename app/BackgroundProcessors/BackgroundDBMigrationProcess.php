<?php

namespace HelpGent\App\BackgroundProcessors;

use Exception;

class BackgroundDBMigrationProcess extends CoreBackgroundProcess {
    public $action_suffix = '';

    protected $action = 'background_db_migration_process';

    protected $after_complete_callback = null;

    public function __construct() {
        $this->action = $this->action . '_' . $this->action_suffix;
        parent::__construct();
    }

    public function set_after_complete_callback( callable $callback ) {
        $this->after_complete_callback = $callback;
    }

    public function task( $item ) {
        update_option( 'helpgent_is_running_background_db_migration_process', 1 );

        if ( ! $this->is_valid_callback( $item ) ) {
            return false;
        }

        try {
            $args     = ( isset( $item[2] ) ) ? $item[2] : [];
            $callback = call_user_func( [ $item[0], $item[1]  ], $args );

            if ( true !== $callback ) {
                $this->after_completed();
            }

            return ( $callback === true ) ? $item : false;
        } catch ( Exception $e ) {
            $this->after_completed();
            return false;
        }
    }

    /**
     * Called when background process has completed.
     */
    protected function after_completed() {
        update_option( 'helpgent_is_running_background_db_migration_process', 0 );

        if ( is_callable( $this->after_complete_callback ) ) {
            call_user_func( $this->after_complete_callback, $this->action );
        }
    }
}