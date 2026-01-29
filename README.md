# 整体院やまもと HPプロトタイプ

整体院やまもと様のホームページ雛形です。
Next.jsで構築されており、基本的なページ構成とデザインが含まれています。

## フォルダ構成
- `src/app/` : 各ページの内容
  - `page.js` : トップページ
  - `services/` : 施術内容・料金
  - `first-visit/` : 初めての方へ
  - `access/` : アクセス
  - `contact/` : お問い合わせ
  - `faq/` : よくある質問（任意）
  - `reviews/` : お客様の声（任意）
  - `privacy/` : プライバシーポリシー
- `src/components/` : 共通パーツ（ヘッダー、フッターなど）
- `public/` : 画像などの静的ファイル

## 運用・更新について（要差し替え箇所）

本番公開前に以下の内容を確認・修正してください。

### 1. テキスト情報の修正
以下のファイル内にある `【】` で囲まれた箇所や、ダミーの住所・電話番号を正しい情報に書き換えてください。
- `src/components/Footer.js` : 住所、電話番号
- `src/app/access/page.js` : 住所、地図、アクセス詳細
- `src/app/contact/page.js` : LINEリンク、電話番号
- `src/app/services/page.js` : 料金

### 2. 画像の差し替え
`public/images/` フォルダを作成し、実際の写真を配置してください。
各ページのコード内で、画像のパス（例：`src="/images/photo.jpg"`）を指定してください。

### 3. Googleマップ埋め込み
`src/app/access/page.js` 内のGoogleマップ部分を、Google Mapsから取得したiframeコードに差し替えてください。

### 4. LINE予約へのリンク
`src/components/CtaButton.js` や `src/app/contact/page.js` 内のリンク（`href`）を、公式LINEの友達追加URLに書き換えてください。

## 開発・確認方法

### ローカルでの起動
```bash
npm run dev
```
ブラウザで [http://localhost:3000](http://localhost:3000) を開くと確認できます。

### 公開（ビルド）
静的サイトとして出力する場合（推奨）：
`next.config.js` の `output: 'export'` 設定を有効にして（現在は標準設定）、以下を実行します。

```bash
npm run build
```
`out` フォルダが生成されるので、その中身をサーバーにアップロードしてください。
（※Vercel等のホスティングサービスを使う場合は、GitHub連携だけで自動公開されます）
