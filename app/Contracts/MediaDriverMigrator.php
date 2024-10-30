<?php

namespace HelpGent\App\Contracts;

use HelpGent\App\DTO\AttachmentDTO;
use HelpGent\App\DTO\AttachmentTransferQueueDTO;

interface MediaDriverMigrator {
    public function add_to_transfer_queue( string $type, string $route, AttachmentDTO $attachment, $transfer_next = null ) : AttachmentTransferQueueDTO;

    public function queue_transfer_to_local( AttachmentTransferQueueDTO $attachment_transfer_queue ) : void;

    public function queue_transfer_from_local( AttachmentTransferQueueDTO $attachment_transfer_queue ) : void;

    public function transfer_to_local( AttachmentDTO $attachment ) : void;

    public function transfer_from_local( AttachmentDTO $attachment ) : void;
}