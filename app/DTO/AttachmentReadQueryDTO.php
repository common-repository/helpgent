<?php

namespace HelpGent\App\DTO;

class AttachmentReadQueryDTO {
    private int $per_page;

    private int $page;

    private string $order_by;

    private ?string $title;

    private ?string $mime_type;

    private ?int $file_size;

    private ?string $storage;

    private string $storage_operator;

    private ?string $file_id;

    private ?int $created_by;

    private ?int $is_guest;

    private ?string $status;

    public function __construct( int $per_page = 10, int $page = 1, $order_by = 'latest' ) {
        $this->per_page = $per_page;
        $this->page     = $page;
        $this->order_by = $order_by;

        $this->title            = null;
        $this->mime_type        = null;
        $this->file_size        = null;
        $this->storage          = null;
        $this->storage_operator = '=';
        $this->file_id          = null;
        $this->created_by       = null;
        $this->is_guest         = null;
    }

    public function get_per_page(): int {
        return $this->per_page;
    }

    public function set_per_page( int $per_page ): void {
        $this->per_page = $per_page;
    }

    public function get_page(): int {
        return $this->page;
    }

    public function set_page( int $page ): void {
        $this->page = $page;
    }

    public function get_order_by(): string {
        return $this->order_by;
    }

    public function set_order_by( string $order_by ): void {
        $this->order_by = $order_by;
    }

    public function get_title(): ?string {
        return $this->title;
    }

    public function set_title( ?string $title ): void {
        $this->title = $title;
    }

    public function get_mime_type(): ?string {
        return $this->mime_type;
    }

    public function set_mime_type( ?string $mime_type ): void {
        $this->mime_type = $mime_type;
    }

    public function get_file_size(): ?int {
        return $this->file_size;
    }

    public function set_file_size( ?int $file_size ): void {
        $this->file_size = $file_size;
    }

    public function get_storage(): ?string {
        return $this->storage;
    }

    public function set_storage( ?string $storage ): void {
        $this->storage = $storage;
    }

    public function get_storage_operator(): string {
        return $this->storage_operator;
    }

    public function set_storage_operator( string $storage_operator ): void {
        $this->storage_operator = $storage_operator;
    }

    public function get_file_id(): ?string {
        return $this->file_id;
    }

    public function set_file_id( ?string $file_id ): void {
        $this->file_id = $file_id;
    }

    public function get_is_guest(): ?int {
        return $this->is_guest;
    }

    public function set_is_guest( ?int $is_guest ): void {
        $this->is_guest = $is_guest;
    }

    public function get_created_by(): ?int {
        return $this->created_by;
    }

    public function set_created_by( ?int $created_by ): void {
        $this->created_by = $created_by;
    }
}