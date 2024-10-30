<?php defined( 'ABSPATH' ) || exit; ?>

<style type="text/css">

.notice {
    background-color: #fff;
    color: rgb(60, 67, 74);
    padding: 1px 12px;
    margin: 5px 0 15px;
    border: 1px solid #c3c4c7;
    border-left: 4px solid #dba617;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.04);
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
}

.notice a {
    display: inline-block;
    text-decoration: none;
    font-size: 13px;
    line-height: 2.15384615;
    min-height: 30px;
    margin: 0;
    padding: 0 10px;
    cursor: pointer;
    border-width: 1px;
    border-style: solid;
    -webkit-appearance: none;
    border-radius: 3px;
    white-space: nowrap;
    box-sizing: border-box;
    background: #2271b1;
    border-color: #2271b1;
    color: #fff;
    text-decoration: none;
    text-shadow: none;
}
</style>

<div class="notice">
    <p><?php helpgent_render( $notice )?></p>
    <?php if ( isset( $show_login_button ) ) : ?>
        <p>
            <a class="button button-primary" href="<?php echo esc_url( wp_login_url() ) ?>">Login as administrator</a>
        </p>
    <?php endif; ?>
</div>