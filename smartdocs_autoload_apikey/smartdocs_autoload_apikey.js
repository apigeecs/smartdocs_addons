/**
 * @file
 * Display user's applicable credentials in a select list on Smartdocs nodes.
 */
(function ($) {
    Drupal.behaviors.smartdocs_autoload_apikey = {
        attach: function (context, settings) {
            $('[data-role="custom_token_modal"] input[name="custom_token_type"]').parents(".form-group").hide();
            if(settings.smartdocs_autoload_apikey.param_in) {
                $('[data-role="custom_token_modal"] input[name="custom_token_type"][data-role="' + settings.smartdocs_autoload_apikey.param_in +'"]').attr('checked', 'checked');
            }
            if(settings.smartdocs_autoload_apikey.param_name) {
                $('[data-role="custom_token_modal"] input[data-role="name"]').val(settings.smartdocs_autoload_apikey.param_name);

            }
            var destInput = '#modal_container div[data-role="custom_token_row"] input[data-role="value"]';
            var credentials = settings.smartdocs_autoload_apikey.credentials || {};
            if ($(destInput).length && !$.isEmptyObject(credentials)) {
                // Replace input field without modifying the Handlebars template.
                $(destInput).replaceWith('<select id="developerApiKeys" class="form-control" data-role="value" style="margin-left:20px;width:206px;float:left;"></select>');
                var destSelect = '#modal_container div[data-role="custom_token_row"] select[data-role="value"]';
                for (var cred in credentials) {
                    $(destSelect).append("<option value='" + cred + "'>" + credentials[cred] + "</option>");
                }
            }
        }
    }
})(jQuery);