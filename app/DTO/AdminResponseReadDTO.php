<?php

namespace HelpGent\App\DTO;

use HelpGent\App\Utils\DateTime;

class AdminResponseReadDTO {
    private int $form_id = 0;

    private int $per_page;
    
    private int $page;

    private string $order_by;

    /**
     * @var null|int $is_completed
     */
    private $is_completed;
    
    private array $tag_ids;
    
    private string $search;

    private int $is_archive;

    private int $created_by = 0;

    private int $is_guest;

    private ?DateTime $from_date;

    private ?DateTime $to_date;

    public function __construct( int $per_page, int $page, string $order_by, int $is_archive = 0, array $tag_ids = [], string $search = '', ?DateTime $from_date = null, ?DateTime $to_date = null ) {
        $this->per_page   = $per_page;
        $this->page       = $page;
        $this->order_by   = $order_by;
        $this->is_archive = $is_archive;
        $this->tag_ids    = $tag_ids;
        $this->search     = $search;
        $this->from_date  = $from_date;
        $this->to_date    = $to_date;
    }

    public function get_form_id() {
        return $this->form_id;
    }

    public function set_form_id( int $form_id ) {
        $this->form_id = $form_id;
    }

    public function get_per_page() {
        return $this->per_page;
    }

    public function set_per_page( int $per_page ) {
        $this->per_page = $per_page;
    }

    public function get_page() {
        return $this->page;
    }

    public function set_page( int $page ) {
        $this->page = $page;
    }

    public function get_order_by() {
        return $this->order_by;
    }

    public function set_order_by( string $order_by ) {
        $this->order_by = $order_by;
    }

    public function get_is_completed() {
        return $this->is_completed;
    }

    public function set_is_completed( string $is_completed ) {
        $this->is_completed = $is_completed;
    }

    public function get_is_archive() {
        return $this->is_archive;
    }

    public function set_is_archive( int $is_archive ) {
        $this->is_archive = $is_archive;
    }

    public function get_tag_ids() {
        return $this->tag_ids;
    }

    public function set_tag_ids( array $tag_ids ) {
        $this->tag_ids = $tag_ids;
    }

    public function get_search() {
        return $this->search;
    }

    public function set_search( string $search ) {
        $this->search = $search;
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

    public function get_from_date() {
        return $this->from_date;
    }

    public function set_from_date( ?DateTime $from_date ) {
        $this->from_date = $from_date;
    }

    public function get_to_date() {
        return $this->to_date;
    }

    public function set_to_date( ?DateTime $to_date ) {
        $this->to_date = $to_date;
    }
}