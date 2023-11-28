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
