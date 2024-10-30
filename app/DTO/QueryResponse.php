<?php

namespace HelpGent\App\DTO;

class QueryResponse {
    private array $data;

    private int $found_items = 0;

    public function __construct( array $data, int $found_items ) {
        $this->data        = $data;
        $this->found_items = $found_items;
    }

    public function get_data() : array {
        return $this->data;
    }

    public function set_data( array $data ) {
        $this->data = $data;
    }

    public function get_found_items() : int {
        return $this->found_items;
    }

    public function set_found_items( int $found_items ) {
        $this->found_items = $found_items;
    }
}