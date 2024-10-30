<?php defined( 'ABSPATH' ) || exit; ?>

<div class="notice notice-warning helpgent-nginx-instruction-notice">
    <h2>HelpGent NGINX Configuration</h2>
    <p><?php esc_html_e( "It appears that your web server is NGINX, which doesn't support .htaccess type capabilities. Unfortunately, WordPress cannot automatically modify your server configuration.", 'helpgent' ); ?></p>
    <p>
        <?php esc_html_e( "To address this, we kindly ask you to manually add the following rewrite rule to your NGINX server's configuration", 'helpgent' ); ?>
    </p>

    <textarea readonly="" rows="3" style="<?php esc_attr_e( $textarea_style, 'helpgent' ) ?>"><?php echo esc_textarea( $rules ) ?></textarea>

    <div class="helpgent-nginx-instruction-notice-footer" style="margin: 10px 0;">
        <a class="button button-secondary" target="__blank" href="<?php echo esc_url( $instruction_link ) ?>"><?php esc_html_e( 'Show Instruction', 'helpgent' ); ?></a>
        <a class="button button-primary" href="<?php esc_attr_e( $dismiss_link, 'helpgent' ); ?>"><?php esc_html_e( 'I Already Did It', 'helpgent' ); ?></a>
    </div>
</div>
