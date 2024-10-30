<style type="text/css">
    <?php foreach ( [ 400, 500, 600 ] as $weight ) : ?>
        @font-face {
            font-family: 'Inter';
            src: url('<?php helpgent_render( helpgent_font_family_url( "Inter/" . $weight . ".woff2" ) ) ?>') format('woff2'),
                url('<?php helpgent_render( helpgent_font_family_url( "Inter/" . $weight . ".woff" ) ) ?>') format('woff');
            font-weight: <?php helpgent_render( $weight )?>;
            font-style: normal;
            font-display: swap;
        }
    <?php endforeach; ?>
</style>
