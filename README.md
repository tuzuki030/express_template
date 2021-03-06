# express_template

WebAPIサーバーとして利用することを想定したExpressのテンプレートです。

## 前準備
```
npm install
```

## サーバー起動
```
npm run dev
```
TypescriptのコンパイルとExpressの起動をします。

起動中、ソースコードを修正したら即座に反映されます。

## 動作確認
次のエンドポイントでレスポンスが返ります。
- GET localhost:3000
- GET localhost:3000/foo
- GET localhost:3000/foo/hoge
- POST localhost:3000/foo/hoge

上記以外はステータスコード404が返ります。

APIの動作確認はPostman(https://www.postman.com)がお勧めです。

## ファイルストラクチャ
srcディレクトリ配下を実装すれば良いようになってます。
```
src
├── controllers # リクエストとレスポンスを処理します。実際のロジックはなるべくservicesに任せること。
├── helpers # 複数箇所で使い回すような、シンプルな便利関数を記述します
├── interfaces # Typescriptの型定義を記述します
├── middlewares # Expressnのミドルウェアを記述します。
├── routes # ルーティングを記述します
└── services # ビジネスロジックを記述します
```

## ログ
ログフレームワークにlog4jsを採用しています。
- https://www.npmjs.com/package/log4js

各種ファイルの場所はこちら。
- 出力先
    - log/
- 設定ファイル
    - config/log4js.json

このテンプレートでは次のサンプルをコピペして組み込みました。
- https://github.com/log4js-node/log4js-example

次のリクエストを投げるとerrors.logを出力できます。
- GET localhost:3000/errorSample

## TODO
- ユニットテスト
