<?php

defined( 'ABSPATH' ) || exit;

$id = rand( 10, 9999 );

?>

<div class="helpgent-form <?php ! empty( $full_screen ) ? helpgent_render( "helpgent-fullscreen" ) : '' ?>" 
data-form_data="<?php helpgent_render( htmlspecialchars( json_encode( $form ), ENT_QUOTES, 'UTF-8' ) );?>"
data-is_preview_active="<?php helpgent_render( isset( $is_preview ) ? 1 : 0 )?>"
id="helpgent-form-<?php helpgent_render( $id ) ?>"
></div>
<script data-cfasync="false" type="text/javascript">

if( document.readyState === "complete" || document.readyState === "interactive" ) {
    window.dispatchEvent( new CustomEvent( 'load-helpgent-shortcode', {detail: {formId: <?php helpgent_render( $id ) ?>}} ) );
} else {
    window.addEventListener( 'load', function() {
        window.dispatchEvent( new CustomEvent( 'load-helpgent-shortcode', {detail: {formId: <?php helpgent_render( $id ) ?>}} ) );
    } )
}
</script>