/*!
 * Adorade Stylelint Config (v5.0.0): eslint.config.js
 * Copyright (c) 2023-26 Adorade (https://github.com/adorade/stylelint-config)
 * License under MIT
 * ========================================================================== */

import { defineConfig } from 'eslint/config';
import globals from 'globals';
import js from '@eslint/js';
import stylistic from '@stylistic/eslint-plugin';

export default defineConfig ([
  {
    name: 'main',
    files: ['**/*.js'],
    plugins: { js },
    extends: ['js/recommended']
  },
  {
    name: 'default',
    languageOptions: {
      globals: globals.node,
      ecmaVersion: 'latest',
      sourceType: 'module'
    }
  },
  {
    name: 'stylistic',
    plugins: {
      '@stylistic': stylistic
    },
    rules: {
      '@stylistic/comma-dangle': ['error', 'never'],
      '@stylistic/quotes': ['error', 'single'],
      '@stylistic/semi': ['error', 'always'],
      '@stylistic/quote-props': ['error', 'as-needed']
    }
  }
]);
