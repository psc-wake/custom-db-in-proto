# アカウント管理システムプロトタイプ

## 起動方法

```
npm install
npm run dev
```

- http://localhost:3000/

## 解説

Next.jsをフルスタックで使っています。

このリポジトリでは主に3つの機能をサンプル実装しています。

- React Server Component
- Server Actions
- REST API

### React Server Component

ReactのコンポーネントをSSRしてくれます。SSRなので、従来のRailsやPHPのようにサーバ側のロジックを書くことができます。

例 https://github.com/GVA-TECH/proto-gva-account-control/blob/6d59d59b7c8c3b9e8c995f64ff9ea85fdd0596b6/src/app/members/components/MemberTable.tsx#L5

SPAでは、REST APIやGraphQLを通じてサーバ側からデータを取得していましたが、Server ComponentにすることでそういったAPIが不要になります。当然、型情報も共有されるためインターフェイスを別途用意する必要もありません。

Next.jsではデフォルトServer Componentになっており、フロントで必要なクリックイベントなどはClient Componentにする必要があります。Client Componentにするにはファイルの冒頭に `'use client';` と書きます。

### Server Actions

`<form action=xxx>` のフォームでデータの送信先を関数にすることができます。この関数はサーバで実行されます。こちらもServer Componentと同様に別途専用のAPIを用意することなく、直接サーバの関数を呼び出すことができます。

例 https://github.com/GVA-TECH/proto-gva-account-control/blob/6d59d59b7c8c3b9e8c995f64ff9ea85fdd0596b6/src/app/members/%40modal/new/page.tsx#L12-L20

### REST API

Next.jsでは通常のページ以外にREST APIを生やすことができます。原則、Server ComponentとServer Actionsを使うので、APIを作る必要はないですが、例外的に必要になった時に作ります。また、例えばManageやAssistからアカウント管理システムにデータを取得したいニーズに応えるために外部用REST APIを作ることがあるかもしれません。

例 https://github.com/GVA-TECH/proto-gva-account-control/tree/main/src/app/api/sample
