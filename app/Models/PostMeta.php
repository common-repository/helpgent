<?php

namespace HelpGent\App\Models;

use HelpGent\WpMVC\App;
use HelpGent\WpMVC\Database\Eloquent\Model;
use HelpGent\WpMVC\Database\Resolver;

class PostMeta extends Model {
    public static function get_table_name():string {
        return 'postmeta';
    }

    public function resolver():Resolver {
        return App::$container->get( Resolver::class );
    }
}