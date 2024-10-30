<?php

use HelpGent\WpMVC\Routing\Route;
use HelpGent\App\Http\Controllers\AttachmentController;

Route::group(
    'attachment', function() {
        Route::post( '/', [ AttachmentController::class, 'store' ] );
        Route::post( 'create-upload-id', [ AttachmentController::class, 'create_upload_id' ] );
        Route::get( 'storage-summary', [ AttachmentController::class, 'storage_summary' ] );
        Route::get( '{id}', [ AttachmentController::class, 'show' ] );
    }, ['auth_or_guest']
);

Route::group(
    'attachment', function() {
        Route::post( 'upload-chunk', [ AttachmentController::class, 'upload_chunk' ] );
    },
);

