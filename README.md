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

この React プロジェクトに以下コマンドにて eslint を追加導入しました。

#### eslint --init
You can also run this command directly using 'npm init @eslint/config'.
@eslint/create-config: v1.1.5

#### √ How would you like to use ESLint? · problems
#### √ What type of modules does your project use? · esm
#### √ Which framework does your project use? · react
#### √ The React plugin doesn't officially support ESLint v9 yet. What would you like to do? · 8.x
#### √ Does your project use TypeScript? · javascript
#### √ Where does your code run? · browser
The config that you've selected requires the following dependencies:
eslint@8.x, globals, @eslint/js, eslint-plugin-react
#### √ Would you like to install them now? · No / Yes
#### √ Which package manager do you want to use? · npm

### 注１）
eslint実行時に、
```
error  'React' must be in scope when using JSX
```
とerrorが出る場合、App.js に以下一行を追加する。
#### import React from 'react';

### 注２）
eslint実行時に、
```
Warning: React version not specified in eslint-plugin-react settings. See https://github.com/jsx-eslint/eslint-plugin-react#configuration .
```
とWarningが出る場合、eslint.config.mjsに以下一行を追加する。
#### { settings: { react: { version: 'detect' } } },

### 注３）
eslintにローカルルールを追加するには、eslint.config.mjsにruleとして以下の様に追加する。
```
{ rules: { 'react/jsx-boolean-value': ['error', 'always'] } },
```
を追加する。

指定可能な各ルールについては、以下を参照。
https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules



