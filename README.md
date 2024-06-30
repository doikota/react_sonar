# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

### `npm start`

### `npm test`

### `npm run build`

### `npm run eject`

この React プロジェクトに以下コマンドにて eslint を追加導入しました。

> eslint --init
> You can also run this command directly using 'npm init @eslint/config'.
> @eslint/create-config: v1.1.5

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

