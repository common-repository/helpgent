<table border="0" cellpadding="10" cellspacing="0" width="600" id="template_footer">
    <tr>
        <td valign="top">
            <table border="0" cellpadding="10" cellspacing="0" width="100%">
                <tr>
                    <td colspan="2" valign="middle" id="credit" style="display: flex; justify-content: center; align-items: center; text-align: center;">
                        <?php 
                        printf(
                            wp_kses_post( 
                                wpautop( 
                                    wptexturize( '<span style=\'font-family: "Helvetica Neue", Helvetica, Roboto, Arial, sans-serif; font-size: 16px; font-weight: 600;\'>%s</span>' ) 
                                ) 
                            ), 
                            wp_kses_post( $footer_text ) 
                        ); 
                        ?>
                    </td>
                </tr>
            </table>
        </td>
    </tr>
</table>