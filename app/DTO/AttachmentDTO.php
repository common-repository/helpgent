<?php

namespace HelpGent\App\DTO;

use HelpGent\App\MediaDrivers\Local as LocalDrive;

class AttachmentDTO {
    private int $id = 0;

    private string $title;

    private string $mime_type;

    private int $file_size;

    private string $storage;

    private int $created_by;

    private $file_id;

    private int $is_guest = 0;

    private ?string $upload_token = null;

    private ?string $file_url = null;

    private ?string $file_path = null;

    public function __construct( string $title, string $mime_type, int $file_size, string $storage = '' ) {
        $this->title     = $title;
        $this->mime_type = $mime_type;
        $this->file_size = $file_size;
        $this->storage   = ! empty( $storage ) ? $storage : LocalDrive::get_key();
        $this->file_id   = null;
        $this->file_path = null;
        $this->file_url  = null;
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

    public function get_mime_type() : string {
        return $this->mime_type;
    }

    public function set_mime_type( string $mime_type ) : void {
        $this->mime_type = $mime_type;
    }

    public function get_file_size() {
        return $this->file_size;
    }

    public function set_file_size( int $file_size ) : void {
        $this->file_size = $file_size;
    }

    public function get_storage() : string {
        return $this->storage;
    }

    public function set_storage( string $storage ) : void {
        $this->storage = $storage;
    }

    /**
     * @return string|null
     */
    public function get_file_id() {
        return $this->file_id;
    }

    public function set_file_id( $file_id ) : void {
        $this->file_id = $file_id;
    }

    public function get_created_by() {
        return $this->created_by;
    }

    public function set_created_by( int $created_by ) : void {
        $this->created_by = $created_by;
    }

    public function get_is_guest() : int {
        return $this->is_guest;
    }

    public function set_is_guest( int $is_guest ) : void {
        $this->is_guest = $is_guest;
    }

    public function get_upload_token(): ?string {
        return $this->upload_token;
    }

    public function set_upload_token( ?string $upload_token ) {
        $this->upload_token = $upload_token;
    }

    public function get_file_path(): ?string {
        return $this->file_path;
    }

    public function set_file_path( ?string $file_path ) {
        $this->file_path = $file_path;
    }

    public function get_file_url(): ?string {
        return $this->file_url;
    }

    public function set_file_url( ?string $file_url ) {
        $this->file_url = $file_url;
    }
}