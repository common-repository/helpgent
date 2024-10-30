<?php

use HelpGent\App\Http\Controllers\Admin\FormController;
use HelpGent\App\Http\Controllers\AnswerController;
use HelpGent\App\Http\Controllers\AttachmentController;
use HelpGent\App\Http\Controllers\FormBubbleController;
use HelpGent\App\Http\Controllers\FontController;
use HelpGent\App\Http\Controllers\MessageController;
use HelpGent\App\Http\Controllers\ForwardController;
use HelpGent\App\Http\Controllers\ReCaptchaController;
use HelpGent\App\Http\Controllers\ResponseController;
use HelpGent\App\Http\Controllers\UserController;
use HelpGent\WpMVC\Routing\Route;

include __DIR__ . '/admin.php';
include __DIR__ . '/attachment.php';
include __DIR__ . '/attachment-transfer-queues.php';

Route::group(
    '/', function() {
        Route::get( 'fonts', [FontController::class, 'index'] );
        Route::post( 'form/media', [FormController::class, 'insert_media'] );
        Route::group(
            'response', function() {
                Route::get( '/', [ResponseController::class, 'index'], ['auth_or_guest'] );
                Route::post( 'get-user-type', [UserController::class, 'user_type'] );
                Route::post( 'verify-registered-user', [UserController::class, 'verify_registered_user'] );
                Route::post( 'register-guest', [UserController::class, 'register_guest'] );

                Route::group(
                    '{id}', function() {
                        Route::get( 'form-info', [ResponseController::class, 'get_form_info'] );
                        Route::get( 'agent', [ResponseController::class, 'get_agent'] );
                    }
                );

                Route::group(
                    'generate-token', function() {
                        Route::post( 'registered', [UserController::class, 'generate_register_user_token'] );
                        Route::post( 'guest', [UserController::class, 'generate_guest_user_token'] );
                        Route::post( 'unknown', [UserController::class, 'generate_unknown_token'] );
                    }
                );

                Route::group(
                    'answer', function() {
                        Route::post( '/', [ ResponseController::class, 'store' ] );
                        Route::post( 'attachment', [ AttachmentController::class, 'answer_store' ] );
                        Route::delete( 'attachment/{id}', [ AttachmentController::class, 'delete_answer' ] );
                        Route::post( 'attachment/create-upload-id', [ AttachmentController::class, 'create_answer_upload_id' ] );
                    }
                );
            }
        );

        Route::get( 'form-bubbles/{page_id}', [FormBubbleController::class, 'index' ] );
        Route::group(
            '/', function() {
                Route::group(
                    'message', function() {
                        Route::group(
                            'forward', function() {
                                Route::get( 'users', [ForwardController::class, 'users'] );
                                Route::get( 'responses', [ForwardController::class, 'responses'] );
                                Route::post( '/', [ForwardController::class, 'to_response'] );
                            }
                        );
                        Route::get( 'attachment', [MessageController::class, 'attachment'] );
                        Route::post( '{id}/read', [MessageController::class, 'read'] );
                        Route::get( 'answer', [AnswerController::class, 'index'] );
                        Route::resource( '/', MessageController::class, ['items' => ['show']] );
                    }
                );
            }, ['auth_or_guest']
        );

        Route::post( 'message/forward/to-user', [ForwardController::class, 'to_user'], ['admin'] );
        Route::group(
            'guest', function() {
                Route::post( 'login', [UserController::class, 'login_guest'] );
                Route::post( 'token-renew', [UserController::class, 'token_renew'] );
            }
        );
        Route::post( 'recaptcha/siteverify', [ReCaptchaController::class, 'site_verify'] );
        Route::get( 'user', [UserController::class, 'get'], ['auth_or_guest'] );
        Route::group(
            'user', function() {
                Route::post( '/', [UserController::class, 'update'] );
                Route::post( '/logout', [UserController::class, 'logout'] );
                Route::delete( '/', [UserController::class, 'delete'] );
                Route::post( 'password', [UserController::class, 'update_password'] );
                Route::post( 'email', [UserController::class, 'update_email'] );
            }, ['auth']
        );
    }, ['cors']
);
