<?php

namespace HelpGent\WpMVC\Contracts;

\defined('ABSPATH') || exit;
abstract class Controller
{
    public \WP_REST_Request $wp_rest_request;
    public function __construct(\WP_REST_Request $wp_rest_request)
    {
        $this->wp_rest_request = $wp_rest_request;
    }
}
