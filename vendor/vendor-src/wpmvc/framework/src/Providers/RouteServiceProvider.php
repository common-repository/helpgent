<?php

namespace HelpGent\WpMVC\Providers;

\defined('ABSPATH') || exit;
use HelpGent\WpMVC\Contracts\Provider;
use HelpGent\WpMVC\App;
use HelpGent\WpMVC\Routing\Providers\RouteServiceProvider as WpMVCRouteServiceProvider;
class RouteServiceProvider extends WpMVCRouteServiceProvider implements Provider
{
    public function boot()
    {
        parent::$container = App::$container;
        $config = App::$config->get('app');
        parent::$properties = ['rest' => $config['rest_api'], 'ajax' => $config['ajax_api'], 'middleware' => $config['middleware'], 'routes-dir' => App::get_dir("routes"), 'rest_response_action_hook' => $config['rest_response_action_hook'] ?? '', 'rest_response_filter_hook' => $config['rest_response_filter_hook'] ?? ''];
        parent::boot();
    }
}
