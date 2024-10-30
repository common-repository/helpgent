<?php

namespace HelpGent\App\Repositories;

use HelpGent\App\Models\Guest;
use HelpGent\WpMVC\Database\Query\Builder;

class UserRepository {
    protected array $select_columns = [
        'guest.id',
        'guest.name',
        'guest.email',
        'guest.number',
        'guest.company',
        'guest.created_at'
    ];

    public function get_guest( int $per_page, int $page ) {
        return [
            'guests' => Guest::query( 'guest' )->select( $this->select_columns )->order_by_desc( 'guest.id' )->pagination( $per_page, $page ),
            'total'  => Guest::query()->count()
        ];
    }

    public function export() {
        /**
         * @var Builder $query
         */
        $query = apply_filters( 'helpgent_guest_export_query', Guest::query( 'guest' )->select( $this->select_columns ) );
        return helpgent_export_contact( $query, 'guest' )['url'];
    }
}