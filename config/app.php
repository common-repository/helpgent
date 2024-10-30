<?php

defined( 'ABSPATH' ) || exit;

use HelpGent\App\Http\Middleware\Auth;
use HelpGent\App\Http\Middleware\AuthOrGuest;
use HelpGent\App\Http\Middleware\CORS;
use HelpGent\App\Http\Middleware\UserOrGuest;
use HelpGent\App\Http\Middleware\EnsureIsUserAdmin;
use HelpGent\App\Providers\BackgroundProcessorServiceProvider;
use HelpGent\App\Providers\MediaProtectionProvider;
use HelpGent\App\Providers\MediaTransferProcessorProvider;
use HelpGent\App\Providers\MediaCleanUpServiceProvider;
use HelpGent\App\Providers\MediaMigrationProcessorProvider;
use HelpGent\App\Providers\GuestLoginServiceProvider;
use HelpGent\App\Providers\EmailNotificationProvider;
use HelpGent\App\Providers\LocalizationServiceProvider;
use HelpGent\App\Providers\EmailThrottleServiceProvider;
use HelpGent\App\Providers\ShortCodeServiceProvider;
use HelpGent\App\Providers\ChatBubbleServiceProvider;
use HelpGent\App\Providers\FontFamilyServiceProvider;
use HelpGent\App\Providers\GuestUserMigrationServiceProvider;
use HelpGent\App\Providers\UserServiceProvider;
use HelpGent\App\Providers\Admin\UserServiceProvider as AdminUserServiceProvider;
use HelpGent\App\Providers\Admin\MigrationNoticeServiceProvider;
use HelpGent\App\Providers\Admin\MediaServiceProvider;
use HelpGent\App\Providers\Admin\MediaProtectionNoticeProvider;
use HelpGent\App\Providers\Admin\UserDashboardPageProvider;
use HelpGent\App\Providers\Admin\MenuServiceProvider;
use HelpGent\App\Setup\Activation;
use HelpGent\Database\Migrations\V1\V1Migration;
use HelpGent\Database\Migrations\HasOneAnswer;
use HelpGent\Database\Migrations\AttachmentTransferQueue;
use HelpGent\WpMVC\App;

return [
    'version'                 => get_plugin_data( App::$plugin_root_file )['Version'],

    'rest_api'                => [
        'namespace' => 'helpgent',
        'versions'  => []
    ],

    'ajax_api'                => [
        'namespace' => 'helpgent',
        'versions'  => []
    ],

    'providers'               => [
        MigrationNoticeServiceProvider::class,
        LocalizationServiceProvider::class,
        MediaProtectionProvider::class,
        EmailNotificationProvider::class,
        MediaTransferProcessorProvider::class,
        MediaCleanUpServiceProvider::class,
        MediaMigrationProcessorProvider::class,
        ShortCodeServiceProvider::class,
        ChatBubbleServiceProvider::class,
        GuestLoginServiceProvider::class,
        EmailThrottleServiceProvider::class,
        BackgroundProcessorServiceProvider::class,
        FontFamilyServiceProvider::class,
        UserServiceProvider::class,
        GuestUserMigrationServiceProvider::class,
    ],

    'admin_providers'         => [
        MenuServiceProvider::class,
        MediaProtectionNoticeProvider::class,
        UserDashboardPageProvider::class,
        MediaServiceProvider::class,
        AdminUserServiceProvider::class
    ],

    'middleware'              => [
        'admin'         => EnsureIsUserAdmin::class,
        'auth'          => Auth::class,
        'auth_or_guest' => AuthOrGuest::class,
        'user_or_guest' => UserOrGuest::class,
        'cors'          => CORS::class
    ],

    'migration_db_option_key' => 'helpgent_migrations',

    'migrations'              => [
        '1.0.0' => Activation::class,
        '1.0.9' => V1Migration::class,
        '2.0.2' => HasOneAnswer::class,
        '2.0.5' => AttachmentTransferQueue::class,
    ]
];