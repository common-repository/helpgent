<?php

namespace HelpGent\App\EnumeratedList;

class AttachmentTransferQueueStatus {
    const IN_QUEUE     = 'in_queue';
    const TRANSFERRING = 'transferring';
    const FAILED       = 'failed';
    const DONE         = 'done';
}