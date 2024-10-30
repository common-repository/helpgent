<?php

defined( 'ABSPATH' ) || exit;

use HelpGent\App\Support\Element\Fields\Address;
use HelpGent\App\Support\Element\Fields\ContactInfo;
use HelpGent\App\Support\Element\Fields\Date;
use HelpGent\App\Support\Element\Fields\Time;
use HelpGent\App\Support\Element\Fields\DropDown;
use HelpGent\App\Support\Element\Fields\Email;
use HelpGent\App\Support\Element\Fields\FileUpload;
use HelpGent\App\Support\Element\Fields\GDPR;
use HelpGent\App\Support\Element\Fields\LongText;
use HelpGent\App\Support\Element\Fields\Map;
use HelpGent\App\Support\Element\Fields\Number;
use HelpGent\App\Support\Element\Fields\OpenEnded;
use HelpGent\App\Support\Element\Fields\PhoneNumber;
use HelpGent\App\Support\Element\Fields\ShortText;
use HelpGent\App\Support\Element\Fields\SingleSelect;
use HelpGent\App\Support\Element\Fields\Website;
use HelpGent\App\Support\Element\Fields\YesNo;

return apply_filters(
    'helpgent_element_handlers', [
        Address::get_key()      => Address::class,
        ContactInfo::get_key()  => ContactInfo::class,
        Date::get_key()         => Date::class,
        Time::get_key()         => Time::class,
        DropDown::get_key()     => DropDown::class,
        Email::get_key()        => Email::class,
        FileUpload::get_key()   => FileUpload::class,
        GDPR::get_key()         => GDPR::class,
        LongText::get_key()     => LongText::class,
        Number::get_key()       => Number::class,
        OpenEnded::get_key()    => OpenEnded::class,
        PhoneNumber::get_key()  => PhoneNumber::class,
        ShortText::get_key()    => ShortText::class,
        SingleSelect::get_key() => SingleSelect::class,
        Website::get_key()      => Website::class,
        YesNo::get_key()        => YesNo::class,
        Map::get_key()          => Map::class
    ]
);