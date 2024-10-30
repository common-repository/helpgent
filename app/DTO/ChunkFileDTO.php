<?php

namespace HelpGent\App\DTO;

class ChunkFileDTO {
    private int $id;

    private string $file_name;

    private string $content;

    private int $range_from;

    private int $range_to;

    private int $file_size;

    private string $mime_type;

    public function __construct( int $id, string $file_name, string $content, int $range_from, int $range_to, int $file_size, string $mime_type ) {
        $this->id         = $id;
        $this->file_name  = $file_name;
        $this->content    = $content;
        $this->range_from = $range_from;
        $this->range_to   = $range_to;
        $this->file_size  = $file_size;
        $this->mime_type  = $mime_type;
    }

    public function get_id() : int {
        return $this->id;
    }

    public function set_id( int $id ) : void {
        $this->id = $id;
    }

    public function get_file_name() : string {
        return $this->file_name;
    }

    public function set_file_name( string $file_name ) : void {
        $this->file_name = $file_name;
    }

    public function get_content() : string {
        return $this->content;
    }

    public function set_content( string $content ) : void {
        $this->content = $content;
    }

    public function get_range_from() : int {
        return $this->range_from;
    }

    public function set_range_from( int $range_from ) : void {
        $this->range_from = $range_from;
    }

    public function get_range_to() : int {
        return $this->range_to;
    }

    public function set_range_to( int $range_to ) : void {
        $this->range_to = $range_to;
    }

    public function get_file_size() : int {
        return $this->file_size;
    }

    public function set_file_size( int $file_size ) : void {
        $this->file_size = $file_size;
    }

    public function get_mime_type() : string {
        return $this->mime_type;
    }

    public function set_mime_type( string $mime_type ) : void {
        $this->mime_type = $mime_type;
    }
}