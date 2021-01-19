---
title: Visual Studio Codeで使っている機能やコマンド・拡張機能
permalink: visual-studio-code-extensions-for-me
date: '2021-01-19'
category: 環境構築
tag:
- VisualStudioCode
---

Visual Studio Codeで使っている機能やコマンド・拡張機能を随時記載していく。

# 機能やコマンド

## ファイルを開く

Ctrl+Pでコマンドパレットが開く。

ここでファイル名の一部を入力することで候補のファイル群が表示される。

あとは開きたいファイルに上下キーでカーソルを当て、Enterキーなどで選択することでファイルを開くことができる。

## Preview Modeの解除

ファイルを開いただけだとタブ上の表示名が_ イタリック _になっている preview mode が適用されています。

preview mode状態で開いているエディタ上で Ctrl+K -> Enter とすることで解除できる。

## 言語モードの選択

右下の行列情報などが表示されている欄に「言語モードの選択」という枠がある。

（新規テキストなら「プレーンテキスト」、.pyファイルを開いているなら「python」と表示されている欄）

ここをクリックし言語を選択することで、開いているテキストファイルを選択した言語の記法により色分けしてくれる。

## ドキュメントのフォーマット

コマンドパレットを開き（Shift + Ctrl + P）、「format document」を選択すると、

言語モードに合わせて、開いているドキュメントを勝手にきれいにしてくれる。

pythonならインデントを整えてくれるし、javascriptなら波括弧や丸括弧の位置を揃えてくれる。

なお、事前に言語やフレームワーク拡張機能を導入しておく必要がある。

# 拡張機能

## [Bracket Pair Colorizer 2](https://marketplace.visualstudio.com/items?itemName=CoenraadS.bracket-pair-colorizer-2)

括弧の開始と終了が色分けされて一目でわかる。

## [Trailing Spaces](https://marketplace.visualstudio.com/items?itemName=shardulm94.trailing-spaces)

余計なブランクを赤く表示。

きれい好きには地味に便利。

## [indent-rainbow](https://marketplace.visualstudio.com/items?itemName=oderwat.indent-rainbow)

インデントが階層ごとに色分けされてわかりやすい。

pythonでは特に重宝する。
