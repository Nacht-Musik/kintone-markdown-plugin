# kintone-markdown-plugin

## はじめに

- 文字列（複数行）フィールド を Markdown に対応させるkintone用のプラグインです。

---

## 導入方法

1. [配布ページ](https://github.com/Nacht-Musik/kintone-markdown-plugin/releases) から `markdown-plugin.zip` をダウンロードする。
1. 上記でダウンロードしたプラグインファイルをkintoneに追加する。
    - 参考ページ：[kintoneヘルプ： プラグインを追加／削除する（システム管理）](https://jp.cybozu.help/k/ja/admin/add_plugin/plugin.html)
1. 適用したいアプリの設定画面から `Markdownプラグイン` を追加する
    - 参考ページ：[kintoneヘルプ： プラグインを追加／削除する(アプリ設定）](https://jp.cybozu.help/k/ja/user/app_settings/plugin.html)
1. アプリに次のフィールドを追加する。
    1.  文字列（複数行）：Markdown変換対象フィールド
    1.  スペース：Markdown変換後の表示用フィールド
    1.  スペース： プレビューボタン用フィールド
1. プラグインの設定ページから必要事項を設定する。

---

## 使い方

### レコードの追加／編集

- 変換対象のフィールドに、Markdownを記述します。
- `プレビュー` ボタンを押下すると、指定の表示フィールドにプレビューが表示されます。
  - `プレビュー` ボタンを押下する度にプレビュー内容が更新されます。

### レコードの詳細画面の表示

- レコードの詳細画面を表示する。（自動で指定フィールドが変換されます）

---

## 制限事項

- 変換対象のフィールドは１つまでです。
- 一覧表示には対応していません。
- モバイル表示には対応していません。

---

## 今後の予定

- [ ] モバイル版対応
- [ ] 複数の変換対象に対応

---

## ライセンス

```text
MIT License

Copyright (c) 2021 Nacht Musik
```

---

## 参考リンク

- [cybozu developer network: Marked.jsを使って社内ドキュメントを書きやすくしよう！](https://developer.cybozu.io/hc/ja/articles/212117746-Marked-js%E3%82%92%E4%BD%BF%E3%81%A3%E3%81%A6%E7%A4%BE%E5%86%85%E3%83%89%E3%82%AD%E3%83%A5%E3%83%A1%E3%83%B3%E3%83%88%E3%82%92%E6%9B%B8%E3%81%8D%E3%82%84%E3%81%99%E3%81%8F%E3%81%97%E3%82%88%E3%81%86-)
- [marked](https://github.com/markedjs/marked)
- [github-markdown-css](https://github.com/sindresorhus/github-markdown-css)
