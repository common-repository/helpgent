<?php

namespace HelpGent\App\EnumeratedList;

class BackgroundProcessStatus {
    const IDLE        = 'idle';
    const INITIALIZED = 'initialized';
    const RUNNING     = 'running';
    const CANCELLED   = 'cancelled';
    const FAILED      = 'failed';
    const DONE        = 'done';
}