このプロジェクトでは、
#### npm install -g create-react-app
コマンドで利用可能となる、`create-react-app`コマンドにて作成したReactプロジェクトでeslintを活用する際の注意事項を書き留めています。

## 元となるプロジェクトの紹介
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## 利用可能コマンド一覧
### `npm start`
### `npm test`
### `npm run build`
### `npm run eject`

この React プロジェクトに以下コマンドにてeslintのバージョン8.0.0を追加導入しました。
※バージョンを8.0.0にしたのは、2024/07/07時点で文献が豊富な.eslintrc.jsonにて検証を行うため。
#### npm install eslint@8.0.0
#### eslint --version
v8.0.0
#### eslint --init
#### √ How would you like to use ESLint? ・ problems
#### √ What type of modules does your project use? ・ esm
#### √ Which framework does your project use? ・ react
#### √ Does your project use TypeScript? ・ No / Yes
#### √ Where does your code run? ・ browser
#### √ What format do you want your config file to be in? ・ JSON
The config that you've selected requires the following dependencies:

eslint-plugin-react@latest
#### √ Would you like to install them now with npm? ・ No / Yes

### 注１）
eslint実行時に、
```
error  'React' must be in scope when using JSX
```
とerrorが出る場合、App.js に以下一行を追加する。
#### import React from 'react';

### 注２）
eslintにローカルルールを追加するには、.eslintrc.jsonにruleとして以下の様に追加する。
```
"rules": {
  "linebreak-style": ["error", "windows"],
}
```
を追加する。

指定可能な各ルールについては、以下を参照。
https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules



