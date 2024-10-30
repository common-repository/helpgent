<?php defined( 'ABSPATH' ) || exit; ?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php helpgent_render( $form->title )?></title>
    <?php wp_head()?>
</head>
<body>
    <div class="helpgent-form--preview">
    <?php 
    $is_preview = 1;
    \HelpGent\WpMVC\View\View::render( 'form-content', compact( 'form', 'is_preview' ) );
    wp_footer();
    ?>
    </div>
</body>
</html>