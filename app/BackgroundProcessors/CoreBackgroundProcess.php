<?php

namespace HelpGent\App\BackgroundProcessors;

use HelpGent\App\Packages\BackgroundProcessor\WpBackgroundProcess;

abstract class CoreBackgroundProcess extends WpBackgroundProcess {
    protected $prefix = 'helpgent';

    protected $action = 'core_background_process'; 

    protected function is_valid_callback( $item ) {
        if ( ! is_array( $item ) ) {
            return false;
        }

        if ( ! ( count( $item ) >= 2 ) ) {
            return false;
        }

        return is_callable( [ $item[0], $item[1] ] );
    }
}