<?php

namespace HelpGent\App\Models\V1;

use HelpGent\WpMVC\App;
use HelpGent\WpMVC\Database\Resolver;
use HelpGent\WpMVC\Database\Eloquent\Model;

class MessageMeta extends Model {
    public static function get_table_name():string {
        return 'helpgent_v1_message_meta';
    }

    public function resolver():Resolver {
        return App::$container->get( Resolver::class );
    }
}