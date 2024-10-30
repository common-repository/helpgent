<?php

namespace HelpGent\App\BackgroundProcessors\EmailNotificationProcessor;

class BackgroundProcessor {
    public ?BackgroundProcess $background_process;

    public function init_background_processor() {
        $this->background_process = new BackgroundProcess();
    }

    public function dispatch( callable $callback, array $args = [] ) {
        if ( is_null( $this->background_process ) ) {
            return;
        }

        $this->background_process->push_to_queue( [ 'callback' => $callback, 'args' => $args ] );
        $this->background_process->save()->dispatch();
    }
}