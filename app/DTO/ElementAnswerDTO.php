<?php

namespace HelpGent\App\DTO;

class ElementAnswerDTO extends DTO {
    public int $id = 0;

    private int $response_id;

    private int $form_id;

    private string $element_id;

    private ?string $value = null;

    private string $element_type;

    private ?int $attachment_id = null;

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

    public function get_form_id() {
        return $this->form_id;
    }

    public function set_form_id( int $form_id ) {
        $this->form_id = $form_id;
    }

    public function get_element_id() {
        return $this->element_id;
    }

    public function set_element_id( string $element_id ) {
        $this->element_id = $element_id;
    }

    public function get_element_type() {
        return $this->element_type;
    }

    public function set_element_type( string $element_type ) {
        $this->element_type = $element_type;
    }

    public function get_value() {
        return $this->value;
    }

    public function set_value( string $value ) {
        $this->value = $value;
    }

    public function get_attachment_id() {
        return $this->attachment_id;
    }

    public function set_attachment_id( ?int $attachment_id ) {
        $this->attachment_id = $attachment_id;
    }
}