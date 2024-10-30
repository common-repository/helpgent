<?php

use HelpGent\WpMVC\Routing\Route;
use HelpGent\App\Http\Controllers\AttachmentMigrationController;

Route::group(
    'attachment-transfer-queues', function() {
        Route::get( '/', [ AttachmentMigrationController::class, 'index' ] );
        Route::post( 'start-migration', [ AttachmentMigrationController::class, 'start_migration' ] );
        Route::post( 'stop-migration', [ AttachmentMigrationController::class, 'stop_migration' ] );
        Route::post( 'retry-failed-items', [ AttachmentMigrationController::class, 'retry_queue_items' ] );
        Route::post( 'reset-migration', [ AttachmentMigrationController::class, 'reset_migration' ] );
        Route::get( 'migration-status', [ AttachmentMigrationController::class, 'migration_status' ] );
        Route::group(
            '{id}', function() {
                Route::delete( '/', [ AttachmentMigrationController::class, 'delete' ] );
                Route::post( 'retry', [ AttachmentMigrationController::class, 'retry_queue_item' ] );
            }
        );
    }, ['admin']
);

