<?php

namespace HelpGent\App\Models\V1;

use HelpGent\WpMVC\App;
use HelpGent\WpMVC\Database\Resolver;
use HelpGent\WpMVC\Database\Eloquent\Model;

class Form extends Model {
    public static function get_table_name():string {
        return 'helpgent_v1_forms';
    }

    public function resolver():Resolver {
        return App::$container->get( Resolver::class );
    }
}