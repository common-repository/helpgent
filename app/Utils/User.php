<?php

namespace HelpGent\App\Utils;

class User {
    public int $id;

    public string $email;

    public string $name;

    public string $user_name;

    public array $roles = [];

    public string $created_at;

    public int $is_user;

    public int $is_guest;

    public ?\WP_User $wp_user = null;

    public function __construct( int $id, string $email, string $name, string $user_name = '', array $roles = [], string $created_at = '', int $is_user = 0, int $is_guest = 0 ) {
        $this->id         = $id;
        $this->email      = $email;
        $this->name       = $name;
        $this->user_name  = $user_name;
        $this->roles      = $roles;
        $this->created_at = $created_at;
        $this->is_user    = $is_user;
        $this->is_guest   = $is_guest;
    }

    public function get_id(): int {
        return $this->id;
    }

    public function set_id( int $id ): void {
        $this->id = $id;
    }

    public function get_email(): string {
        return $this->email;
    }

    public function set_email( string $email ): void {
        $this->email = $email;
    }

    public function get_name(): string {
        return $this->name;
    }

    public function set_name( string $name ): void {
        $this->name = $name;
    }

    public function get_user_name(): string {
        return $this->user_name;
    }

    public function set_user_name( string $user_name ): void {
        $this->user_name = $user_name;
    }

    public function get_roles(): array {
        return $this->roles;
    }

    public function set_roles( array $roles ): void {
        $this->roles = $roles;
    }

    public function get_created_at(): string {
        return $this->created_at;
    }

    public function set_created_at( string $created_at ): void {
        $this->created_at = $created_at;
    }

    public function get_is_user() {
        return $this->is_user;
    }

    public function set_is_user( bool $is_user ): void {
        $this->is_user = $is_user;
    }

    public function get_is_guest() {
        return $this->is_guest;
    }

    public function set_is_guest( bool $is_guest ): void {
        $this->is_guest = $is_guest;
    }

    /**
     * Get the value of wp_user
     */
    public function get_wp_user(): ?\WP_User {
        return $this->wp_user;
    }

    /**
     * Set the value of wp_user
     */
    public function set_wp_user( ?\WP_User $wp_user ): self {
        $this->wp_user = $wp_user;

        return $this;
    }
}
