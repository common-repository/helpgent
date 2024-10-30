<?php

namespace HelpGent\App\BackgroundProcessors\EmailNotificationProcessor;

use HelpGent\App\BackgroundProcessors\CoreBackgroundProcess;
use Exception;

class BackgroundProcess extends CoreBackgroundProcess {
    public $action_suffix = '';

    protected $action = 'background_email_notification_process';

    public function __construct() {
        $this->action = $this->action . '_' . $this->action_suffix;
        parent::__construct();
    }

    public function task( $item ) {
        if ( ! is_array( $item ) ) {
            return false;
        }

        if ( ! isset( $item['callback'] ) ) {
            return false;
        }

        if ( ! is_callable( $item['callback'] ) ) {
            return false;
        }

        $args = isset( $item['args'] ) && is_array( $item['args'] ) ? $item['args'] : [];

        try {
            $callback = call_user_func_array( $item['callback'], $args );
            return ( $callback === true ) ? $item : false;
        } catch ( Exception $e ) {
            return false;
        }
    }
}