<?php

namespace HelpGent\App\DTO;

class AttachmentUploadSessionDTO {
    private int $id;

    private string $title;

    private int $file_size;

    private string $mime_type;

    private string $storage;

    private int $last_sent_bytes;

    private ?string $ref;
    
    private string $upload_token;

    public function __construct( string $title, int $file_size, string $mime_type, string $storage, string $upload_token ) {
        $this->id              = 0;
        $this->title           = $title;
        $this->file_size       = $file_size;
        $this->mime_type       = $mime_type;
        $this->storage         = $storage;
        $this->last_sent_bytes = 0;
        $this->upload_token    = $upload_token;
        $this->ref             = null;
    }

    public function get_id() : int {
        return $this->id;
    }

    public function set_id( int $id ) : void {
        $this->id = $id;
    }

    public function get_title() : string {
        return $this->title;
    }

    public function set_title( string $title ) : void {
        $this->title = $title;
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
    
    public function get_storage() : string {
        return $this->storage;
    }

    public function set_storage( string $storage ) : void {
        $this->storage = $storage;
    }
    
    public function get_last_sent_bytes() : int {
        return $this->last_sent_bytes;
    }

    public function set_last_sent_bytes( int $last_sent_bytes ) : void {
        $this->last_sent_bytes = $last_sent_bytes;
    }
    
    public function get_ref() : ?string {
        return $this->ref;
    }

    public function set_ref( ?string $ref ) : void {
        $this->ref = $ref;
    }

    public function get_upload_token() : string {
        return $this->upload_token;
    }

    public function set_upload_token( string $upload_token ) : void {
        $this->upload_token = $upload_token;
    }
}