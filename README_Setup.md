# 環境準備

---

## Node.js インストール

`Node.js`のインストール手順については記載を省略する。
本プロジェクトでは、以下のバージョンで動作確認実施。

-   Node.js

    ```shell
    $ node --version
    v16.14.0
    ```

-   npmshell
    ```shell
    $ npm --version
    8.3.1
    ```

---

## yarn

`yarn`がインストールされていないことを確認しておく。

```
$ npm list -g | grep yarn
```

`yarn`をインストールする。

```shell
$ npm install -g yarn
```

-   バージョンを確認
    ```shell
    $ yarn --version
    1.22.19
    ```

## lerna

`lerna`がインストールされていないことを確認しておく。

```shell
$ npm list -g | grep lerna
```

`lerna`をインストール。

```shell
$ npm install -g lerna
```

-   バージョンを確認
    ```
    $ lerna --version
    5.1.4
    ```

---

## lenra プロジェクトを作成

プロジェクトを初期化する。

```shell
$ lerna init
```

-   上記により、`lerna.json`、`package.json`および`packages`ディレクトリが作成される

生成された`lerna.json`を変更する。

```diff
{
+   "npmClient": "yarn",
    "packages": [
        "packages/*"
        ...
}
```

---

## create-react-app

`packages`ディレクトリに移動。

```shell
$ cd packages
```

`create-react-app`を実行。今回は`test-app`という名前のアプリケーションを作成する。

```shell
$ npx create-react-app test-app --template typescript
```

`test-app`ディレクトリに移動。以降、基本的に`packages`ディレクトリ直下で作業する。

`npm install`を実行し、`packages/package.json`に記述されたパッケージのインストールを実行する。

```shell
$ npm install
```

`lerna clean`→`lerna bootstrap`を実行。

```shell
$ lenra clean
$ lerna bootstrap
```

`lerna run start`でデバッグ起動することができる

```shell
$ lerna run start
```

-   `http://localhost:3000/`でアクセス可能

---

## フォーマッターのインストール

-   VSCode に[Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)をインストールする
-   `Command+Shift+P`で VSCode のコマンドパレットを開き、`preference workspace`で検索して、設定ページを開く
-   `formatsave`で検索し、`Editor: Format On Save`にチェックを入れて設定を有効化する
    -   上記設定は、`.vscode/settings.json`に反映される
-   同様にコマンドパレット内で`default formatter`で検索し、`Editor: Default Formatter`に`Prettier`を設定する
-   プロジェクト直下に`.prettierrc`を作成し、設定を記述する。設定内容については当該ファイル参照

---

## Material-UI

GUI ライブラリとして、MaterialUI を採用する。今回は`Node.js` `v16.x.y`を使用している都合上、MaterialUI v5（MUI）ではなく v4 を使用することに注意。

`packages`直下に移動。

```shell
$ cd packages
```

`lerna`を使って必要なライブラリのインストールを実行。`test-app`プロジェクトを指定する。

```shell
$ lerna add --scope=test-app -D @material-ui/core
$ lerna add --scope=test-app -D @material-ui/icons
$ lerna add --scope=test-app -D @material-ui/styles
$ lerna add --scope=test-app -D @material-ui/lab
```

---

## React Router / History

```shell
$ lerna add --scope=test-app -D connected-react-router
```

`history`パッケージは最新版でエラーが出るため、バージョン（v4）を指定してインストールする。

```shell
$ lerna add --scope=test-app -D history@4.10.1
```

`Switch`や exact オプションを使いたいので、`react-router`および`react-router-dom`には v6 ではなく v5 を使用する。

```shell
$ lerna add --scope=test-app -D react-router@5
$ lerna add --scope=test-app -D @types/react-router
$ lerna add --scope=test-app -D react-router-dom@5
$ lerna add --scope=test-app -D @types/react-router-dom
```

---

## Redux

```shell
$ lerna add --scope=test-app -D react-redux
$ lerna add --scope=test-app -D redux
$ lerna add --scope=test-app -D redux-actions
$ lerna add --scope=test-app -D redux-logger
$ lerna add --scope=test-app -D redux-thunk
$ lerna add --scope=test-app -D reselect
```

---

## ついでのライブラリ

関係ないけど、`Three.js`を試してみたいので入れてみる。

```shell
$ lerna add --scope=test-app three
$ lerna add --scope=test-app @types/three
```

---

## 不要ファイル削除

今回のプロジェクトでは必須でない不要ファイルを削除する。`packages`ディレクトリ直下で作業。

```shell
$ rm -f test-app/src/reportWebVitals.ts
$ rm -f test-app/src/App.test.tsx
$ rm -f test-app/src/setupTests.ts
```

上記ファイル削除に伴い、 `src/index.tsx`を修正する。

```diff
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
-import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

- // If you want to start measuring performance in your app, pass a function
- // to log results (for example: reportWebVitals(console.log))
- // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
- reportWebVitals();
```

---

## ビルドの実施

デバッグ起動する場合には`lerna run start`を実行するが、ビルドする場合は`lerna run build`を`packages`ディレクトリ直下で実行する。

```shell
$ lerna run build
```

実行後、 `packages/test-app`直下に`build`ディレクトリが生成される。

---
