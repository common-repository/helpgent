<?php

namespace HelpGent\App\Models;

use HelpGent\WpMVC\App;
use HelpGent\WpMVC\Database\Eloquent\Relations\HasMany;
use HelpGent\WpMVC\Database\Resolver;
use HelpGent\WpMVC\Database\Eloquent\Model;
use HelpGent\WpMVC\Database\Eloquent\Relations\BelongsToOne;

class Form extends Model {
    public static function get_table_name():string {
        return 'helpgent_forms';
    }

    public function user():BelongsToOne {
        return $this->belongs_to_one( User::class, 'ID', 'created_by' );
    }

    public function responses(): HasMany {
        return $this->has_many( Response::class, 'form_id', 'id' );
    }

    public function resolver():Resolver {
        return App::$container->get( Resolver::class );
    }
}