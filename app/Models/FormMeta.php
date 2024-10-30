<?php

namespace HelpGent\App\Models;

use HelpGent\WpMVC\App;
use HelpGent\WpMVC\Database\Resolver;
use HelpGent\WpMVC\Database\Eloquent\Model;

class FormMeta extends Model {
    public static function get_table_name():string {
        return 'helpgent_form_meta';
    }

    public function resolver():Resolver {
        return App::$container->get( Resolver::class );
    }
}