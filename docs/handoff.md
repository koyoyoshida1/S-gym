# 引き継ぎメモ

## 現在の整理方針

HTMLにはページ内容、CSSには見た目、JSには動作を置く方針です。トップページ以外の規約系ページは、同じレイアウトなので `css/pages/legal.css` を共通利用しています。

## 主要リンク

- 入会ボタン: `https://buy.stripe.com/fZu8wRgno0hO4PQ38AcV202`
- Discord招待: `https://discord.gg/xFJdz4RGxR`
- 本番URL: `https://s-gym-salon.com/`
- Google Analytics ID: `G-KS00Y7PE0N`

## 変更時に確認すること

- `index.html` の画像パスが `img/` に存在すること
- `css/style.css` の背景画像パスはCSSファイル基準なので `../img/...` で書くこと
- 規約系ページは `terms.html`、`law.html`、`privacy.html` の3ページでリンクが相互に壊れていないこと
- OGP画像を差し替える場合は `index.html` の `og:image` と `twitter:image` を更新すること
