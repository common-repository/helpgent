<?php

namespace HelpGent\App\DTO;

use DateTime;

class GuestDTO {
    private int $id;

    private string $email;

    private string $name;

    private string $number;

    private string $company;

    private string $token;

    private int $acceptance = 0;

    /**
     * @var DateTime $token_expires_at
     */
    private $token_expires_at;

    public function __construct( string $email, string $name = '', string $number = '', string $company = '', string $token = '', $token_expires_at = null ) {
        $this->email            = $email;
        $this->name             = $name;
        $this->number           = $number;
        $this->company          = $company;
        $this->token            = $token;
        $this->token_expires_at = $token_expires_at;
    }

    public function get_id() {
        return $this->id;
    }

    public function set_id( int $id ) {
        $this->id = $id;
    }

    public function get_email() {
        return $this->email;
    }

    public function set_email( string $email ) {
        $this->email = $email;
    }

    public function get_name() {
        return $this->name;
    }

    public function set_name( string $name ) {
        $this->name = $name;
    }

    public function get_number() {
        return $this->number;
    }

    public function set_number( string $number ) {
        $this->number = $number;
    }

    public function get_company() {
        return $this->company;
    }

    public function set_company( string $company ) {
        $this->company = $company;
    }

    public function get_token() {
        return $this->token;
    }

    public function set_token( string $token ) {
        $this->token = $token;
    }

    public function get_token_expires_at() {
        return $this->token_expires_at;
    }

    public function set_token_expires_at( string $token_expires_at ) {
        $this->token_expires_at = $token_expires_at;
    }

    /**
     * Get the value of acceptance
     *
     * @return int
     */
    public function get_acceptance() {
        return $this->acceptance;
    }

    /**
     * Set the value of acceptance
     *
     * @param int $acceptance 
     *
     * @return self
     */
    public function set_acceptance( int $acceptance ) {
        $this->acceptance = $acceptance;
        return $this;
    }
}