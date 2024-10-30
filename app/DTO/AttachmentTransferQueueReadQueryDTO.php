<?php

namespace HelpGent\App\DTO;

class AttachmentTransferQueueReadQueryDTO {
    private ?array $columns;

    private bool $paginate;

    private int $per_page;

    private int $page;

    private string $order_by;

    private ?string $type;

    private ?int $attachment_id;

    private ?string $transfer_to;

    private ?string $transfer_next;

    private ?int $upload_id;

    private ?string $status;

    private ?array $status_in;

    private string $status_operator;

    public function __construct( int $per_page = 10, int $page = 1, $order_by = 'oldest' ) {
        $this->columns  = null;
        $this->paginate = true;
        $this->per_page = $per_page;
        $this->page     = $page;
        $this->order_by = $order_by;

        $this->type            = null;
        $this->attachment_id   = 0;
        $this->transfer_to     = null;
        $this->transfer_next   = null;
        $this->upload_id       = null;
        $this->status          = null;
        $this->status_in       = null;
        $this->status_operator = '=';
    }

    public function get_columns(): ?array {
        return $this->columns;
    }

    public function set_columns( ?array $columns ): ?array {
        return $this->columns = $columns;
    }

    public function get_paginate(): bool {
        return $this->paginate;
    }

    public function set_paginate( bool $paginate ): void {
        $this->paginate = $paginate;
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

    public function get_type(): ?int {
        return $this->type;
    }

    public function set_type( ?int $type ): void {
        $this->type = $type;
    }

    public function get_attachment_id(): ?int {
        return $this->attachment_id;
    }

    public function set_attachment_id( ?int $attachment_id ): void {
        $this->attachment_id = $attachment_id;
    }

    public function get_transfer_to(): ?string {
        return $this->transfer_to;
    }

    public function set_transfer_to( ?string $transfer_to ): void {
        $this->transfer_to = $transfer_to;
    }

    public function get_transfer_next(): ?string {
        return $this->transfer_next;
    }

    public function set_transfer_next( ?string $transfer_next ): void {
        $this->transfer_next = $transfer_next;
    }

    public function get_upload_id(): ?string {
        return $this->upload_id;
    }

    public function set_upload_id( ?string $upload_id ): void {
        $this->upload_id = $upload_id;
    }

    public function get_status_in(): ?array {
        return $this->status_in;
    }

    public function set_status_in( ?array $status_in ): void {
        $this->status_in = $status_in;
    }

    public function get_status(): ?string {
        return $this->status;
    }

    public function set_status( ?string $status ): void {
        $this->status = $status;
    }

    public function get_status_operator(): string {
        return $this->status_operator;
    }

    public function set_status_operator( string $status_operator ): void {
        $this->status_operator = $status_operator;
    }
}