import globals from 'globals';
import js from '@eslint/js';
import recommended from 'eslint-plugin-react/configs/recommended.js';
import airbnb from 'eslint-config-airbnb';

export default [
  js.configs.recommended,
  recommended,
  {
    plugins: {
      airbnb: airbnb,
    },
  },
  {
    files: ['src/*.{js,mjs,cjs,jsx}'],
    settings: { react: { version: 'detect' } },
    languageOptions: { parserOptions: { ecmaFeatures: { jsx: true } }, globals: globals.browser },
    rules: { 'react/jsx-boolean-value': ['error', 'always'] },
  },
  {
    ignores: ['**/*.test.js'],
  },
];
