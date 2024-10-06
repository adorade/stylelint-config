/*!
 * Adorade Stylelint Config (v2.0.1): eslint.config.js
 * Copyright (c) 2023 Adorade (https://github.com/adorade/stylelint-config)
 * License under MIT
 * ========================================================================== */

import globals from 'globals';
import js from '@eslint/js';
import stylisticJs from '@stylistic/eslint-plugin-js';

export default [
  {
    name: 'recommended',
    ...js.configs.recommended
  },
  {
    name: 'default',
    languageOptions: {
      globals: {
        ...globals.node
      },
      ecmaVersion: 'latest',
      sourceType: 'module'
    }
  },
  {
    name: 'stylistic',
    plugins: {
      '@stylistic/js': stylisticJs
    },
    rules: {
      '@stylistic/js/comma-dangle': ['error', 'never'],
      '@stylistic/js/quotes': ['error', 'single'],
      '@stylistic/js/semi': ['error', 'always'],
      '@stylistic/js/quote-props': ['error', 'as-needed']
    }
  }
];
