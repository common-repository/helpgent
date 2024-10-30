<?php

namespace HelpGent\App\Models;

use HelpGent\WpMVC\App;
use HelpGent\WpMVC\Database\Eloquent\Relations\BelongsToMany;
use HelpGent\WpMVC\Database\Eloquent\Relations\BelongsToOne;
use HelpGent\WpMVC\Database\Resolver;
use HelpGent\WpMVC\Database\Eloquent\Model;
use HelpGent\WpMVC\Database\Eloquent\Relations\HasOne;

class Response extends Model {
    public static function get_table_name():string {
        return 'helpgent_responses';
    }

    public function user():BelongsToOne {
        return $this->belongs_to_one( User::class, 'ID', 'created_by' )
            ->relation_where( 'is_guest', 0 );
    }

    public function user_guest():BelongsToOne {
        return $this->belongs_to_one( Guest::class, 'id', 'created_by' )
        ->relation_where( 'is_guest', 1 );
    }

    public function message():HasOne {
        return $this->has_one( Message::class, 'response_id', 'id' );
    }

    public function tags():BelongsToMany {
        return $this->belongs_to_many( Tag::class, ResponseTag::class, 'tag_id', 'response_id', 'id', 'id' );
    }

    public function resolver():Resolver {
        return App::$container->get( Resolver::class );
    }
}