import globals from 'globals';
import pluginJs from '@eslint/js';
import pluginReactConfig from 'eslint-plugin-react/configs/recommended.js';

export default [
  {
    files: ['**/*.{js,mjs,cjs,jsx}'],
    settings: { react: { version: 'detect' } },
    languageOptions: { parserOptions: { ecmaFeatures: { jsx: true } }, globals: globals.browser },
    rules: { 'react/jsx-boolean-value': ['error', 'always'] },
  },
  pluginJs.configs.recommended,
  pluginReactConfig,
];
