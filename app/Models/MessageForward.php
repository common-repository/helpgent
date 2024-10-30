<?php

namespace HelpGent\App\Models;

use HelpGent\WpMVC\App;
use HelpGent\WpMVC\Database\Eloquent\Relations\BelongsToOne;
use HelpGent\WpMVC\Database\Resolver;
use HelpGent\WpMVC\Database\Eloquent\Model;

class MessageForward extends Model {
    public static function get_table_name():string {
        return 'helpgent_message_forwards';
    }

    public function resolver():Resolver {
        return App::$container->get( Resolver::class );
    }

    public function attachment():BelongsToOne {
        return $this->belongs_to_one( Attachment::class, 'id', 'attachment_id' );
    }
}