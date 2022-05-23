# express_template

WebAPI サーバーとして利用することを想定した Express のテンプレートです。

## 前準備

```
npm install
```

## サーバー起動

```
npm run dev
```

Typescript のコンパイルと Express の起動をします。

起動中、ソースコードを修正したら即座に反映されます。

## 動作確認

次のエンドポイントでレスポンスが返ります。

- GET localhost:3000
- GET localhost:3000/foo
- GET localhost:3000/foo/hoge
- POST localhost:3000/foo/hoge

上記以外はステータスコード 404 が返ります。

API の動作確認は Postman(https://www.postman.com)がお勧めです。

## ファイルストラクチャ

src ディレクトリ配下を実装すれば良いようになってます。

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

ログフレームワークに log4js を採用しています。

- https://www.npmjs.com/package/log4js

各種ファイルの場所はこちら。

- 出力先
  - log/
- 設定ファイル
  - config/log4js.json

このテンプレートでは次のサンプルをコピペして組み込みました。

- https://github.com/log4js-node/log4js-example

次のリクエストを投げると errors.log を出力できます。

- GET localhost:3000/errorSample

## TODO

- ユニットテスト

## 2022/05/23 project update

### package.json 内の package 更新

```bash
# install npm-check-updates
npm install -g npm-check-updates
cd path/to/project
ncu
ncu -u
npm install
```

### エラー解決

```bash
[@types/express] Namespace 'serveStatic' has no exported member 'RequestHandlerConstructor'
```

というエラーが出た。https://github.com/DefinitelyTyped/DefinitelyTyped/issues/49595
解決方法:

```bash
npm update @types/express-serve-static-core --depth 2
npm update @types/serve-static --depth 2
```

## mysql2
