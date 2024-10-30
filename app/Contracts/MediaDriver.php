<?php

namespace HelpGent\App\Contracts;

use Exception;
use HelpGent\App\DTO\AttachmentDTO;
use HelpGent\App\DTO\AttachmentFileDTO;
use HelpGent\App\DTO\AttachmentUploadSessionDTO;
use HelpGent\App\DTO\ChunkFileDTO;
use HelpGent\App\DTO\ChunkFileStateDTO;

interface MediaDriver {
    public static function get_key(): string;

    /**
     * @throws Exception
     */
    public function upload( array $file ) : AttachmentFileDTO;

    public function upload_chunk( ChunkFileDTO $chunk_file, AttachmentUploadSessionDTO $upload_session ) : ChunkFileStateDTO;

    /**
     * @throws Exception Could not create the upload session
     */
    public function create_upload_session( AttachmentDTO $file ): AttachmentUploadSessionDTO;

    public function get( array $attachment ) : AttachmentFileDTO;

    public function get_file_url( ?string $file_name, ?string $file_id ) : string;

    /**
     * @throws Exception Could delete the file
     */
    public function delete( ?string $file_name, ?string $file_id ) : bool;
}