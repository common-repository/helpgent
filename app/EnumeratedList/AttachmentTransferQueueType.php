<?php

namespace HelpGent\App\EnumeratedList;

class AttachmentTransferQueueType {
    const UPLOAD    = 'upload';
    const MIGRATION = 'migration';
    const CANCELLED = 'cancelled';
}