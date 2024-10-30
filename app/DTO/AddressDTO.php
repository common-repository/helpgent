<?php

namespace HelpGent\App\DTO;

class AddressDTO extends DTO {
    private int $id;

    private int $answer_id;

    private string $address = '';

    private string $address_two = '';

    private string $city = '';

    private string $state = '';

    private string $zip_code = '';

    private string $country = '';

    public function get_id() {
        return $this->id;
    }

    public function set_id( int $id ) {
        $this->id = $id;
    }

    public function get_answer_id() {
        return $this->answer_id;
    }

    public function set_answer_id( int $answer_id ) {
        $this->answer_id = $answer_id;

        return $this;
    }

    public function get_address() {
        return $this->address;
    }

    public function set_address( string $address ) {
        $this->address = $address;
    }

    public function get_address_two() {
        return $this->address_two;
    }

    public function set_address_two( string $address_two ) {
        $this->address_two = $address_two;
    }

    public function get_city() {
        return $this->city;
    }

    public function set_city( string $city ) {
        $this->city = $city;
    }

    public function get_state() {
        return $this->state;
    }

    public function set_state( string $state ) {
        $this->state = $state;
    }

    public function get_zip_code() {
        return $this->zip_code;
    }

    public function set_zip_code( string $zip_code ) {
        $this->zip_code = $zip_code;
    }

    public function get_country() {
        return $this->country;
    }

    public function set_country( string $country ) {
        $this->country = $country;
    }
}