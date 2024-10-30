<?php

namespace HelpGent\App\Models;

use HelpGent\WpMVC\App;
use HelpGent\WpMVC\Database\Eloquent\Relations\BelongsToMany;
use HelpGent\WpMVC\Database\Eloquent\Relations\BelongsToOne;
use HelpGent\WpMVC\Database\Eloquent\Relations\HasOne;
use HelpGent\WpMVC\Database\Resolver;
use HelpGent\WpMVC\Database\Eloquent\Model;

class Tag extends Model {
    public static function get_table_name():string {
        return 'helpgent_tags';
    }

    public function user():BelongsToOne {
        return $this->belongs_to_one( User::class, 'ID', 'created_by' );
    }

    public function form():HasOne {
        return $this->has_one( Form::class, 'id', 'form_id' );
    }

    public function responses():BelongsToMany {
        return $this->belongs_to_many( Response::class, ResponseTag::class, 'response_id', 'tag_id', 'id', 'id' );
    }
    
    public function resolver():Resolver {
        return App::$container->get( Resolver::class );
    }
}