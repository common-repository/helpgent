<?php

namespace HelpGent\App\DTO;

class AttachmentFileDTO {
    private int $id;

    private string $file_name;

    private int $file_size;

    private string $mime_type;

    private ?string $file_id;

    private ?string $upload_token = null;

    private ?string $storage = null;

    private ?string $file_path;

    private ?string $file_url;

    public function __construct( string $file_name, int $file_size, string $mime_type, ?string $file_id = null, ?string $upload_token = null ) {
        $this->id            = 0;
        $this->file_id       = 0;
        $this->file_name     = $file_name;
        $this->file_size     = $file_size;
        $this->mime_type     = $mime_type;
        $this->file_id       = $file_id;
        $this->$upload_token = $upload_token;
        $this->file_path     = null;
        $this->file_url      = null;
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

    public function get_file_id() : ?string {
        return $this->file_id;
    }

    public function set_file_id( ?string $file_id ) : void {
        $this->file_id = $file_id;
    }

    public function get_upload_token(): ?string {
        return $this->upload_token;
    }

    public function set_upload_token( ?string $upload_token ) {
        $this->upload_token = $upload_token;
    }

    public function get_storage(): ?string {
        return $this->storage;
    }

    public function set_storage( ?string $storage ) {
        $this->storage = $storage;
    }
    
    public function get_file_path() : ?string {
        return $this->file_path;
    }

    public function set_file_path( ?string $file_path ) : void {
        $this->file_path = $file_path;
    }

    public function get_file_url() : ?string {
        return $this->file_url;
    }

    public function set_file_url( ?string $file_url ) : void {
        $this->file_url = $file_url;
    }
}