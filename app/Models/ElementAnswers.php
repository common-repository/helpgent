<?php

namespace HelpGent\App\Models;

use HelpGent\WpMVC\App;
use HelpGent\WpMVC\Database\Eloquent\Relations\BelongsToOne;
use HelpGent\WpMVC\Database\Resolver;
use HelpGent\WpMVC\Database\Eloquent\Model;

class ElementAnswers extends Model {
    public static function get_table_name():string {
        return 'helpgent_element_answers';
    }

    public function contact_info() {
        return $this->has_one( ContactInfo::class, 'answer_id', 'id' );
    }

    public function address() {
        return $this->has_one( Address::class, 'answer_id', 'id' );
    }

    public function open_ended_text_inners() {
        return $this->has_one( OpenEndedTextInner::class, 'answer_id', 'id' );
    }

    public function attachment():BelongsToOne {
        return $this->belongs_to_one( Attachment::class, 'id', 'attachment_id' );
    }

    public function resolver():Resolver {
        return App::$container->get( Resolver::class );
    }
}