<?php

namespace HelpGent\App\DTO;

class ResponseDTO {
    private int $id;

    private int $form_id;

    private int $is_completed;

    /**
     * @var string|null $ip
     */
    private $ip = null;

    private int $created_by;

    private int $is_guest = 0;

    private ?int $is_verified = null;

    public function __construct( int $form_id, int $created_by, int $is_guest = 0, int $is_completed = 0 ) {
        $this->form_id      = $form_id;
        $this->is_completed = $is_completed;
        $this->created_by   = $created_by;
        $this->is_guest     = $is_guest;
        $this->ip           = helpgent_get_user_ip_address();
    }

    public function get_id() {
        return $this->id;
    }

    public function set_id( int $id ) {
        $this->id = $id;
    }

    public function get_form_id() {
        return $this->form_id;
    }

    public function set_form_id( int $form_id ) {
        $this->form_id = $form_id;
    }

    public function get_is_completed() {
        return $this->is_completed;
    }

    public function set_is_completed( int $is_completed ) {
        $this->is_completed = $is_completed;
    }

    public function get_ip() {
        return $this->ip;
    }

    public function set_ip( string $ip ) {
        $this->ip = $ip;
    }

    public function get_created_by() {
        return $this->created_by;
    }

    public function set_created_by( int $created_by ) {
        $this->created_by = $created_by;
    }

    public function get_is_guest() {
        return $this->is_guest;
    }

    public function set_is_guest( int $is_guest ) {
        $this->is_guest = $is_guest;
    }

    public function get_is_verified(): ?int {
        return $this->is_verified;
    }

    public function set_is_verified( ?int $is_verified ) {
        $this->is_verified = $is_verified;
    }
}