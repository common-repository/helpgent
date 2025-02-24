<?php

namespace HelpGent\App\DTO;

class MessageDTO {
    private int $id;

    private int $response_id;
    
    private string $message;
    
    private int $attachment_id;

    private int $is_read;

    private int $is_guest;

    /**
     * @var int|null
     */
    private $parent_id;

    /**
     * @var int|null
     */
    private $forward_id;

    private int $created_by;

    /**
     * @var int|null $agent_trigger
     */
    private string $status;

    private string $replied_by = 'text';

    private $agent_trigger;

    private ?int $form_id = null;

    public function __construct( int $response_id, string $message = '', int $created_by = 0, int $attachment_id = 0, int $is_guest = 0, int $parent_id = 0, $forward_id = 0, int $is_read = 0, string $status = 'publish', $agent_trigger = null ) {
        $this->response_id   = $response_id;
        $this->message       = $message;
        $this->attachment_id = $attachment_id;
        $this->is_read       = $is_read;
        $this->is_guest      = $is_guest;
        $this->parent_id     = $parent_id;
        $this->forward_id    = $forward_id;
        $this->created_by    = $created_by;
        $this->status        = $status;
        $this->agent_trigger = $agent_trigger;
    }

    public function get_id() {
        return $this->id;
    }

    public function set_id( int $id ) {
        $this->id = $id;
    }

    public function get_response_id() {
        return $this->response_id;
    }

    public function set_response_id( int $response_id ) {
        $this->response_id = $response_id;
    }

    public function get_message() {
        return $this->message;
    }

    public function set_message( string $message ) {
        $this->message = $message;
    }

    public function get_attachment_id() {
        return $this->attachment_id;
    }

    public function set_attachment_id( int $attachment_id ) {
        $this->attachment_id = $attachment_id;
    }

    public function get_is_read() {
        return $this->is_read;
    }

    public function set_is_read( int $is_read ) {
        $this->is_read = $is_read;
    }

    public function get_is_guest() {
        return $this->is_guest;
    }

    public function set_is_guest( int $is_guest ) {
        $this->is_guest = $is_guest;
    }

    public function get_parent_id() {
        return $this->parent_id;
    }

    public function set_parent_id( int $parent_id ) {
        $this->parent_id = $parent_id;
    }

    public function get_forward_id() {
        return $this->forward_id;
    }

    public function set_forward_id( $forward_id ) {
        $this->forward_id = $forward_id;
    }

    public function get_created_by() {
        return $this->created_by;
    }

    public function set_created_by( int $created_by ) {
        $this->created_by = $created_by;
    }

    public function get_status() {
        return $this->status;
    }

    public function set_status( string $status ) {
        $this->status = $status;
    }

    public function get_agent_trigger() {
        return $this->agent_trigger;
    }

    public function set_agent_trigger( int $agent_trigger ) {
        $this->agent_trigger = $agent_trigger;
    }

    public function get_replied_by() {
        return $this->replied_by;
    }

    public function set_replied_by( string $replied_by ) {
        $this->replied_by = $replied_by;
    }

    public function get_form_id() {
        return $this->form_id;
    }

    public function set_form_id( ?int $form_id ) {
        $this->form_id = $form_id;
    }
}