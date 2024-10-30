<?php

namespace HelpGent\App\Repositories;

use HelpGent\App\Models\Option;

class OptionRepository {
    public function get_by_name( string $option_name, $default = false, bool $only_value = true ) {
        $option = Option::query()->where( 'option_name', $option_name )->first();

        if ( ! $option ) {
            return $default;
        }

        $option_value = maybe_unserialize( $option->option_value );

        $option->option_value = $option_value;

        if ( ! $only_value ) {
            return $option;
        }

        if ( empty( $option_value ) ) {
            return $default;
        }

        return $option_value;
    }

    public function create( string $option_name, $option_value ) {
        if ( $this->get_by_name( $option_name ) ) {
            return false;
        }

        return Option::query()->insert(
            [
                'option_name'  => $option_name,
                'option_value' => maybe_serialize( $option_value )
            ]
        );
    }

    public function update( string $option_name, $option_value ) {
        $option = Option::query()->where( 'option_name', $option_name )->first();
        if ( $option ) {
            return Option::query()->where( 'id', $option->id )->update(
                [
                    'option_value' => maybe_serialize( $option_value ),
                ]
            );
        }
        return Option::query()->insert(
            [
                'option_name'  => $option_name,
                'option_value' => maybe_serialize( $option_value ),
            ]
        );
    }

    public function delete( string $option_name ) {
        return Option::query()->where( 'option_name', $option_name )->delete();
    }
}