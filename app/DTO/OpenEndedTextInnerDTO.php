<?php

namespace HelpGent\App\DTO;

class OpenEndedTextInnerDTO extends DTO {
    private int $id;

    private int $answer_id;

    private ?string $url = null;

    private ?string $price = null;

    private ?string $doc = null;

    private ?string $phone_number = null;

    private ?int $file = null;

    public function get_id() {
        return $this->id;
    }

    public function get_answer_id() {
        return $this->answer_id;
    }

    public function set_answer_id( int $answer_id ) {
        $this->answer_id = $answer_id;
        return $this;
    }

    public function set_id( int $id ) {
        $this->id = $id;
    }

    public function get_url() {
        return $this->url;
    }

    public function set_url( string $url ) {
        $this->url = $url;
    }

    public function get_price() {
        return $this->price;
    }

    public function set_price( string $price ) {
        $this->price = $price;
    }

    public function get_doc() {
        return $this->doc;
    }

    public function set_doc( string $doc ) {
        $this->doc = $doc;
    }

    public function get_phone_number() {
        return $this->phone_number;
    }

    public function set_phone_number( string $phone_number ) {
        $this->phone_number = $phone_number;
    }

    public function get_file() {
        return $this->file;
    }

    public function set_file( int $file ) {
        $this->file = $file;
    }
}