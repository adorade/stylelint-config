/*!
 * Adorade Stylelint Config (v1.1.2): .eslintrc.js
 * Copyright (c) 2023 Adorade (https://github.com/adorade/stylelint-config)
 * License under MIT
 * ========================================================================== */

module.exports = {
  'root': true,
  'env': {
    'es6': true,
    'node': true
  },
  'parserOptions': {
    'ecmaVersion': 2019
  },
  'extends': 'eslint:recommended',
  'reportUnusedDisableDirectives': true,
  'rules': {
    'comma-dangle': ['error', 'never'],
    'quotes': ['error', 'single'],
    'quote-props': ['error', 'always']
  }
}
