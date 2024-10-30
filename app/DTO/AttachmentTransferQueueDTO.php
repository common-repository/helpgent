<?php

namespace HelpGent\App\DTO;

use HelpGent\App\EnumeratedList\AttachmentTransferQueueStatus;

class AttachmentTransferQueueDTO {
    private int $id;
    
    private string $type;

    private int $attachment_id;

    private string $transfer_from;

    private string $transfer_to;

    private ?string $transfer_next;

    private ?int $upload_id;

    private ?string $upload_token;

    private string $status;

    private ?string $message;

    public function __construct( string $type, int $attachment_id, string $transfer_from, string $transfer_to, ?string $transfer_next = null ) {
        $this->id            = 0;
        $this->type          = $type;
        $this->attachment_id = $attachment_id;
        $this->transfer_from = $transfer_from;
        $this->transfer_to   = $transfer_to;
        $this->transfer_next = $transfer_next;
        $this->upload_id     = null;
        $this->upload_token  = null;
        $this->status        = AttachmentTransferQueueStatus::IN_QUEUE;
        $this->message       = null;
    }

    public function get_id() : int {
        return $this->id;
    }

    public function set_id( int $id ) : void {
        $this->id = $id;
    }

    public function get_type() : string {
        return $this->type;
    }

    public function set_type( string $type ) : void {
        $this->type = $type;
    }

    public function get_attachment_id() : int {
        return $this->attachment_id;
    }

    public function set_attachment_id( int $attachment_id ) : void {
        $this->attachment_id = $attachment_id;
    }

    public function get_transfer_from() : string {
        return $this->transfer_from;
    }

    public function set_transfer_from( string $transfer_from ) : void {
        $this->transfer_from = $transfer_from;
    }

    public function get_transfer_to() : string {
        return $this->transfer_to;
    }

    public function set_transfer_to( string $transfer_to ) : void {
        $this->transfer_to = $transfer_to;
    }

    public function get_transfer_next(): ?string {
        return $this->transfer_next;
    }

    public function set_transfer_next( ?string $transfer_next ) : void {
        $this->transfer_next = $transfer_next;
    }

    public function get_upload_id(): ?int {
        return $this->upload_id;
    }

    public function set_upload_id( ?int $upload_id ) : void {
        $this->upload_id = $upload_id;
    }

    public function get_upload_token(): ?string {
        return $this->upload_token;
    }

    public function set_upload_token( ?string $upload_token ) : void {
        $this->upload_token = $upload_token;
    }

    public function get_status() : string {
        return $this->status;
    }

    public function set_status( string $status ) : void {
        $this->status = $status;
    }

    public function get_message() : ?string {
        return $this->message;
    }

    public function set_message( ?string $message ) : void {
        $this->message = $message;
    }
}