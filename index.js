/*!
 * Adorade Stylelint Config (v2.0.0): index.js
 * Copyright (c) 2023 Adorade (https://github.com/adorade/stylelint-config)
 * License under MIT
 * ========================================================================== */

'use strict';
const propertyGroups = require('./groups.js')

module.exports = {
  'extends': [
    'stylelint-config-standard',
		'@stylistic/stylelint-config'
  ],
  'plugins': [
    'stylelint-order'
  ],
  'rules': {
    'alpha-value-notation': 'number',
    'at-rule-empty-line-before': null,
    'at-rule-no-unknown': null,
    'at-rule-no-vendor-prefix': true,
    'color-function-notation': 'legacy',
    'color-named': 'never',
    'comment-word-disallowed-list': [
      [ '/^TODO:/', '/^FIXME:/' ],
      {
        'severity': 'warning'
      }
    ],
    'declaration-empty-line-before': 'never',
    'declaration-no-important': true,
    'declaration-property-unit-disallowed-list': {
      'line-height': [ 'px', 'em', 'rem' ]
    },
    'declaration-property-unit-allowed-list': {
      'font-size': [ 'rem', 'em', 'px', '%' ],
      '/^animation/': [ 's' ],
      '/^transition/': [ 's', 'ms' ]
    },
    'font-family-name-quotes': 'always-where-recommended',
    'font-weight-notation': [
      'numeric', {
        'ignore': [ 'relative' ]
      }
    ],
    'function-url-no-scheme-relative': true,
    'function-url-quotes': 'never',
    'keyframe-selector-notation': 'percentage',
    'length-zero-no-unit': true,
    'media-feature-name-no-unknown': [
      true, {
        'ignoreMediaFeatureNames': [ 'prefers-reduced-motion' ]
      }
    ],
    'media-feature-name-no-vendor-prefix': true,
    'media-feature-range-notation': 'prefix',
    'no-descending-specificity': null,
    'no-duplicate-selectors': true,
    'no-empty-source': null,
    'number-max-precision': 5,
    'property-no-vendor-prefix': true,
    'rule-empty-line-before': [
      'always-multi-line', {
        'except': [ 'inside-block-and-after-rule', 'first-nested' ],
        'ignore': [ 'after-comment', 'inside-block' ]
      }
    ],
    'selector-attribute-quotes': 'always',
    'selector-max-attribute': 2,
    'selector-max-class': 4,
    'selector-max-combinators': 4,
    'selector-max-compound-selectors': 4,
    'selector-max-id': 0,
    'selector-max-specificity': null,
    'selector-max-type': 2,
    'selector-max-universal': 1,
    'selector-no-qualifying-type': [
      true, {
        'ignore': [ 'attribute' ]
      }
    ],
    'selector-no-vendor-prefix': true,
    'value-keyword-case': 'lower',
    'value-no-vendor-prefix': true,

    // Stylistic
    '@stylistic/at-rule-name-space-after': 'always',
    '@stylistic/at-rule-semicolon-space-before': 'never',
    '@stylistic/block-closing-brace-empty-line-before': null,
    '@stylistic/block-closing-brace-newline-after': [
      'always', {
        'ignoreAtRules': [ 'if', 'else' ]
      }
    ],
    '@stylistic/declaration-block-semicolon-newline-before': 'never-multi-line',
    '@stylistic/number-leading-zero': 'never',
    '@stylistic/selector-list-comma-newline-after': 'always',
    '@stylistic/selector-list-comma-newline-before': 'never-multi-line',
    '@stylistic/selector-list-comma-space-after': 'always-single-line',
    '@stylistic/selector-list-comma-space-before': 'never-single-line',
    '@stylistic/value-list-comma-newline-before': 'never-multi-line',

    // Property Order
    'order/properties-order': [
      propertyGroups,
      {
        'unspecified': 'bottom'
      }
    ]
  },
  'overrides': [
    {
      'files': '**/*.scss',
      'extends': [
        'stylelint-config-standard-scss'
      ],
      'rules': {
        'scss/at-else-closing-brace-newline-after': 'always-last-in-chain',
        'scss/at-else-closing-brace-space-after': 'always-intermediate',
        'scss/at-else-empty-line-before': 'never',
        'scss/at-if-closing-brace-newline-after': 'always-last-in-chain',
        'scss/at-if-closing-brace-space-after': 'always-intermediate',
        'scss/at-mixin-argumentless-call-parentheses': null,
        'scss/at-rule-no-unknown': true,
        'scss/comment-no-empty': null,
        'scss/double-slash-comment-empty-line-before': [
          'always', {
            'except': [ 'first-nested' ],
            'ignore': [ 'between-comments', 'stylelint-commands' ]
          }
        ],
        'scss/double-slash-comment-whitespace-inside': 'always',
        'scss/no-global-function-names': null
      }
    }
  ]
};
