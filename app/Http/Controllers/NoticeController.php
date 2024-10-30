<?php

namespace HelpGent\App\Http\Controllers;

use HelpGent\App\Http\Controllers\Controller;
use HelpGent\WpMVC\Routing\Response;

class NoticeController extends Controller {
    public function close_old_pro_removed_notice() {
        delete_option( "helpgent_removed_old_pro_plugin" );
        return Response::send( [] );
    }
}