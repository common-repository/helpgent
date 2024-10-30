<?php

defined( 'ABSPATH' ) || exit;

$data = [];

if ( is_user_logged_in() || helpgent_get_valid_guest() ) {

    $user = helpgent_get_current_user();

    if ( $user->is_guest ) {
        $data['is_guest']   = "1";
        $data['user_guest'] = [
            'id'         => $user->get_id(),
            'name'       => $user->get_name(),
            'email'      => $user->get_email(),
            'avatar_url' => get_avatar_url( $user->get_email() ),
        ];
    } else {
        $data['is_guest'] = "0";
        $data['user']     = [
            'ID'         => $user->get_id(),
            'name'       => $user->get_name(),
            'user_email' => $user->get_email(),
            'avatar_url' => get_avatar_url( $user->get_email() ),
        ];
    }
}

include_once __DIR__ . '/font-family.php';

?>
<div class="helpgent-user-dashboard" data-user="<?php helpgent_render( htmlspecialchars( json_encode( $data ), ENT_QUOTES, 'UTF-8' ) )?>"></div>