<?php

namespace HelpGent\App\DTO;

class ChunkFileStateDTO {
    private bool $is_done;

    private int  $last_sent_bytes;

    private ?AttachmentFileDTO $file;

    public function __construct( bool $is_done, int $last_sent_bytes = 0, ?AttachmentFileDTO $file = null ) {
        $this->is_done         = $is_done;
        $this->last_sent_bytes = $last_sent_bytes;
        $this->file            = $file;
    }

    public function get_is_done() : bool {
        return $this->is_done;
    }

    public function set_is_done( bool $is_done ) : void {
        $this->is_done = $is_done;
    }

    public function get_last_sent_bytes() : int {
        return $this->last_sent_bytes;
    }

    public function set_last_sent_bytes( int $last_sent_bytes ) : void {
        $this->last_sent_bytes = $last_sent_bytes;
    }

    public function get_file(): ?AttachmentFileDTO {
        return $this->file;
    }

    public function set_file( ?AttachmentFileDTO $file ) : void {
        $this->file = $file;
    }
}