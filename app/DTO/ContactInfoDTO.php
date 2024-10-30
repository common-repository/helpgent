<?php

namespace HelpGent\App\DTO;

class ContactInfoDTO extends DTO {
    public int $id;

    public int $answer_id;

    public int $form_id;

    public ?string $first_name = null;

    public array $form_data = [];

    public ?string $last_name = null;

    public ?string $email = null;

    public ?string $mobile_number = null;

    public ?string $company = null;

    public int $is_lead = 0;

    public function get_answer_id() {
        return $this->answer_id;
    }

    public function set_answer_id( int $answer_id ) {
        $this->answer_id = $answer_id;
        return $this;
    }

    public function get_id() {
        return $this->id;
    }

    public function set_id( int $id ) {
        $this->id = $id;
    }

    public function get_first_name() {
        return $this->first_name;
    }

    public function set_first_name( string $first_name ) {
        $this->first_name = $first_name;
    }

    public function get_last_name() {
        return $this->last_name;
    }

    public function set_last_name( string $last_name ) {
        $this->last_name = $last_name;
    }

    public function get_email() {
        return $this->email;
    }

    public function set_email( string $email ) {
        $this->email = $email;
    }

    public function get_mobile_number() {
        return $this->mobile_number;
    }

    public function set_mobile_number( string $mobile_number ) {
        $this->mobile_number = $mobile_number;
    }

    public function get_company() {
        return $this->company;
    }

    public function set_company( string $company ) {
        $this->company = $company;
    }

    public function get_is_lead(): int {
        return $this->is_lead;
    }

    public function set_is_lead( int $is_lead ) {
        $this->is_lead = $is_lead;
    }

    /**
     * Get the value of form_id
     *
     * @return int
     */
    public function get_form_id() {
        return $this->form_id;
    }

    /**
     * Set the value of form_id
     *
     * @param int $form_id 
     *
     * @return self
     */
    public function set_form_id( int $form_id ) {
        $this->form_id = $form_id;

        return $this;
    }

    /**
     * Get the value of form_data
     *
     * @return string
     */
    public function get_form_data() {
        return json_encode( $this->form_data );
    }

    /**
     * Set the value of form_data
     *
     * @param array $form_data 
     *
     * @return self
     */
    public function set_form_data( array $form_data ) {
        $this->form_data = $form_data;

        return $this;
    }
}