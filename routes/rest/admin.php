<?php

use HelpGent\App\Http\Controllers\Admin\EmailThrottleController;
use HelpGent\App\Http\Controllers\Admin\FormController;
use HelpGent\App\Http\Controllers\Admin\PageController;
use HelpGent\App\Http\Controllers\Admin\SettingsController;
use HelpGent\App\Http\Controllers\Admin\ResponseController;
use HelpGent\App\Http\Controllers\Admin\TagController;
use HelpGent\App\Http\Controllers\Admin\SummaryController;
use HelpGent\App\Http\Controllers\Admin\UserController;
use HelpGent\App\Http\Controllers\NoticeController;
use HelpGent\WpMVC\Routing\Route;

Route::group(
    'admin', function () {
        Route::group(
            'form', function() {
                Route::group(
                    '{id}', function() {
                        Route::get( 'tags', [FormController::class, 'tags'] );
                        Route::post( 'status', [FormController::class, 'update_status'] );
                        Route::post( 'rename', [FormController::class, 'update_title'] );
                        Route::post( 'duplicate', [FormController::class, 'duplicate'] );
                        Route::group(
                            'summary', function() {
                                Route::get( 'element', [SummaryController::class, 'element'] );
                                Route::get( '/', [SummaryController::class, 'index'] );
                            }
                        );
                        Route::delete( 'element/option', [FormController::class, 'delete_element_option'] );
                        Route::delete( 'element/answer', [FormController::class, 'delete_element'] );
                    }
                );
                Route::post( 'auto-save', [FormController::class, 'auto_save'] );
                Route::delete( '/', [FormController::class, 'delete_bulk_form'] );
                Route::post( 'status', [FormController::class, 'update_bulk_status'] );
                Route::get( 'select', [FormController::class, 'select'] );
                Route::resource( '/', FormController::class );
            }
        );
        Route::resource( 'tag', TagController::class, ['items' => ['show']] );
        Route::group(
            'response', function () {
                Route::get( '/', [ResponseController::class, 'index'] );
                Route::get( 'form', [ResponseController::class, 'form'] );
                Route::post( 'setup/tag', [ResponseController::class, 'setup_tag'] );
                Route::group(
                    '{id}', function() {
                        Route::get( 'user', [ResponseController::class, 'user'] );
                        Route::delete( '/', [ResponseController::class, 'delete'] );
                        Route::post( 'read', [ResponseController::class, 'update_read'] );
                        Route::post( 'archive', [ResponseController::class, 'update_archive_status'] );
                    }
                );
            } 
        );
        Route::get( 'settings', [SettingsController::class, 'index'] );
        Route::post( 'settings', [SettingsController::class, 'update'] );
        Route::get( 'page', [PageController::class, 'index'] );
        Route::get( 'page-with-homepage', [PageController::class, 'index_with_homepage'] );
        Route::get( 'email-throttle', [EmailThrottleController::class, 'index'] );
        Route::post( 'email-throttle/reset', [EmailThrottleController::class, 'reset'] );
        Route::post( 'close-old-pro-removed-notice', [NoticeController::class, 'close_old_pro_removed_notice'] );

        Route::group(
            'guests', function() {
                Route::get( '/', [UserController::class, 'guests'] );
                Route::post( 'export', [UserController::class, 'export_guests'] );
            }
        );
    }, ['admin']
);
