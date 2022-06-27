## アプリの初期設定

### アプリの作成
doc: https://ja.reactjs.org/docs/create-a-new-react-app.html

```
$ npx create-react-app .
```

### サーバー起動

```
$ npm start
```

## Prettierについて

doc: https://www.npmjs.com/package/prettier

doc: https://prettier.io/docs/en/install.html

### インストール

```
$ npm install --save-dev --save-exact prettier
```

### フォーマット書き換え

```
$ npx prettier --write ./src
```

### フォーマットチェック

```
$ npx prettier --check ./src
```

## herokuの初期設定

### herokuアプリの作成

```
$ heroku create <任意のアプリ名> --manifest
$ heroku open
```

### herokuのリモートリポジトリが追加されていることを確認

```
$ git remote -v
```

### スタックの確認

```
$ heroku stack
```
### API_URLの環境変数を設定する

```
$ heroku config:set REACT_APP_API_URL=<API URL>
$ heroku config
```

* 環境変数をReact内で読み込むにはREACT_APP_*で命名する必要がある

doc: https://elements.heroku.com/buildpacks/mars/create-react-app-buildpack

## herokuのコマンド

### 環境変数

doc: https://devcenter.heroku.com/ja/articles/config-vars

```
# 環境変数の確認
$ heroku config

# 環境変数の設定
$ heroku config:set REACT_APP_API_URL=<API URL>

# 環境変数の削除
$ heroku config:unset REACT_APP_API_URL
```

## herokuのコマンド

### ps

```
# プロセス確認
$ heroku ps

# プロセスの停止
$ heroku ps:scale web=0

# プロセスの起動
$ heroku ps:scale web=1
```






