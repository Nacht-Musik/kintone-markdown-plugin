jQuery.noConflict();
(function($, PLUGIN_ID) {
  'use strict';
  var $form = $('.js-submit-settings');
  var $cancelButton = $('.js-cancel-button');

  var $inputTextField = $('#select_input_field');
  var $outputSpaceField = $('#select_output_field');
  var $buttonSpaceField = $('#select_button_field');
  var config = kintone.plugin.app.getConfig(PLUGIN_ID);

  // save button
  $form.on('submit', function(e) {
    e.preventDefault();
    setConfig();

    kintone.plugin.app.setConfig(config, function() {
      alert('設定を保存しますか？');
      window.location.href = '../../flow?app=' + kintone.app.getId();
    });
  });

  // cancel button
  $cancelButton.on('click', function() {
    window.location.href = '../../' + kintone.app.getId() + '/plugin/';
  });

  // set config
  function setConfig() {
    config.inputTextField = $inputTextField.val();
    config.outputSpaceField = $outputSpaceField.val();
    config.buttonSpaceField = $buttonSpaceField.val();
  }

  // set input fields
  KintoneConfigHelper.getFields('MULTI_LINE_TEXT').then(function(resp) {
    var $textDropDown  = $('#select_input_field');
    for (var i = 0; i < resp.length; i++) {
      var $option = $('<option></option>');

      $option.attr('value', resp[i].code);
      $option.text(resp[i].label);
      $textDropDown.append($option);
    }
    if (config.inputTextField) {
      $textDropDown.val(config.inputTextField);
    }
  });

  // set output fields
  KintoneConfigHelper.getFields('SPACER').then(function(resp) {
    var $textDropDown  = $('#select_output_field');
    for (var i = 0; i < resp.length; i++) {
      var $option = $('<option></option>');

      $option.attr('value', resp[i].elementId);
      $option.text(resp[i].elementId);
      $textDropDown.append($option);
    }
    if (config.outputSpaceField) {
      $textDropDown.val(config.outputSpaceField);
    }
  });

  // set button field
  KintoneConfigHelper.getFields('SPACER').then(function(resp) {
    var $textDropDown  = $('#select_button_field');
    for (var i = 0; i < resp.length; i++) {
      var $option = $('<option></option>');

      $option.attr('value', resp[i].elementId);
      $option.text(resp[i].elementId);
      $textDropDown.append($option);
    }
    if (config.outputSpaceField) {
      $textDropDown.val(config.buttonSpaceField);
    }
  });

})(jQuery, kintone.$PLUGIN_ID);
