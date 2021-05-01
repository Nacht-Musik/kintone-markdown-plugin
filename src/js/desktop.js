jQuery.noConflict();

(function($, PLUGIN_ID) {
  'use strict';

  // レコード追加／編集画面
  var previewEvents = [
    'app.record.create.show',
    'app.record.edit.show'
  ];

  kintone.events.on(previewEvents, function() {
    var config = kintone.plugin.app.getConfig(PLUGIN_ID);

    // プレビューボタン設定
    var previewButton = new Kuc.Button({
      text: 'プレビュー',
      type: 'button',
      className: 'options-class',
      id: 'preview-btn',
      visible: true,
      disabled: false
    });

    // プレビューボタン追加
    kintone.app.record.getSpaceElement(config.buttonSpaceField).appendChild(previewButton);

    previewButton.addEventListener('click', function(event) {
      var inputFieldCode = config.inputTextField;
      var inputValue = '';

      // 変換元のテキスト情報を取得
      var rec = kintone.app.record.get();
      if (rec) {
        inputValue = rec.record[inputFieldCode].value;
      }

      // 出力先のフィールド情報を取得
      var outputSpaceEl = kintone.app.record.getSpaceElement(config.outputSpaceField);
      outputSpaceEl.innerHTML = marked(inputValue);

      // 出力フィールドにCSSを適用するためのClassを追加
      outputSpaceEl.classList.add('markdown-body');
    });
  });

  // レコード詳細表示
  var showEvents = ['app.record.detail.show'];
  kintone.events.on(showEvents, function(event) {
    var record = event.record;
    var config = kintone.plugin.app.getConfig(PLUGIN_ID);

    // 変換元のテキスト情報を取得
    var inputFieldCode = config.inputTextField;
    var inputValue = record[inputFieldCode].value;
    // 入力フィールドを隠す
    kintone.app.record.setFieldShown(inputFieldCode, false);

    // 出力先のフィールド情報を取得
    var outputSpaceEl = kintone.app.record.getSpaceElement(config.outputSpaceField);
    // 入力テキストにMarkdownを適用
    outputSpaceEl.innerHTML = marked(inputValue);
    // 出力フィールドにCSSを適用するためのClassを追加
    outputSpaceEl.classList.add('markdown-body');

  });


})(jQuery, kintone.$PLUGIN_ID);
