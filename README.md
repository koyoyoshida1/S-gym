# S-Gym Website

S-Gymの静的LPです。GitHub Pagesなど、そのまま静的ホスティングに置ける構成です。

## ファイル構成

```text
.
├── index.html              # トップページ
├── thanks.html             # 決済完了後の案内ページ
├── terms.html              # 利用規約
├── law.html                # 特定商取引法に基づく表記
├── privacy.html            # プライバシーポリシー
├── css/
│   ├── base.css            # 全ページ共通の基本設定・変数
│   ├── style.css           # トップページ用CSS
│   └── pages/
│       ├── legal.css       # 規約・特商法・プライバシー共通CSS
│       └── thanks.css      # サンクスページ用CSS
├── js/
│   ├── analytics.js        # Google Analytics初期化
│   └── main.js             # トップページのハンバーガーメニュー
├── img/                    # 画像・OGP・アイコン
├── CNAME                   # 独自ドメイン設定
└── .nojekyll               # GitHub Pages用
```

## 編集の目安

- トップページの文言やセクションを変える場合: `index.html`
- トップページの見た目を変える場合: `css/style.css`
- 全体の色や基本フォントを変える場合: `css/base.css`
- 規約系ページの見た目を変える場合: `css/pages/legal.css`
- サンクスページの見た目を変える場合: `css/pages/thanks.css`
- ハンバーガーメニューの動きを変える場合: `js/main.js`
- Google Analyticsの計測IDを変える場合: `js/analytics.js` と各HTMLのgtag読み込みURL

## 運用メモ

- 画像は `img/` に追加し、HTML/CSSからは `img/xxx.webp` または `../img/xxx.webp` のように参照します。
- URLを変えたくないページはルート直下のHTML名を維持してください。
- CSSやJSを更新して反映が遅い場合は、HTML側の `?v=...` を更新するとブラウザキャッシュを避けやすくなります。
- `thanks.html` は決済完了後に案内されるページなので、Discord招待URLの変更時はリンク切れに注意してください。
