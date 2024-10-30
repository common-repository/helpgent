<?php

namespace HelpGent\App\Http\Controllers\Admin;

use HelpGent\App\Http\Controllers\Controller;
use HelpGent\WpMVC\Routing\Response;

class EmailThrottleController extends Controller {
    public function index() {
        return Response::send(
            [
                "total" => get_option( "helpgent_total_email_sent" )
            ] 
        );
    }

    public function reset() {
        update_option( "helpgent_total_email_sent", 0 );
        return Response::send(
            [
                'message' => esc_html__( "The email throttle has been reset successfully!", "helpgent" )
            ] 
        );
    }
}