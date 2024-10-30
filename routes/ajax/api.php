<?php

use HelpGent\App\Http\Controllers\PageController;
use HelpGent\WpMVC\Routing\Ajax;

Ajax::get( '{id}', [PageController::class, 'index'] );
