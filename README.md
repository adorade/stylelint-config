# Adorade Stylelint Config

[![NPM version](http://img.shields.io/npm/v/@adorade/stylelint-config?logo=npm)](https://www.npmjs.org/package/@adorade/stylelint-config)
[![GitHub package.json version](https://img.shields.io/github/package-json/v/adorade/stylelint-config?color=green&logo=github)](https://github.com/adorade/stylelint-config/blob/main/package.json)
[![license](https://img.shields.io/github/license/adorade/stylelint-config)](https://mit-license.org)
[![Depfu Status](https://img.shields.io/depfu/dependencies/github/adorade/stylelint-config)](https://depfu.com/repos/github/adorade/stylelint-config)
[![Renovate enabled](https://img.shields.io/badge/renovate-enabled-brightgreen)](https://renovatebot.com/)
[![GitHub Workflow Status](https://img.shields.io/github/actions/workflow/status/adorade/stylelint-config/node.yml?label=Test%20CI&logo=github)](https://github.com/adorade/stylelint-config/actions/workflows/node.yml)

> An opinionated Stylelint config used by Adorade across our projects.
  
## Installation

```bash
npm install @adorade/stylelint-config --save-dev
# Or with yarn:
yarn add @adorade/stylelint-config --dev
```

## Usage

We provide a single config that covers both CSS and SCSS. It will automatically apply SCSS rules to files ending in `.scss`.

You simply have to extend this config in your Stylelint config:

```json
{
  "extends": "@adorade/stylelint-config",
  "rules": { },
  "overrides": [
    {
      "files": "**/*.scss",
      "rules": { }
    }
  ]
}
```

## Documentation

This config extends the shared config:

- [`stylelint-config-standard-scss`](https://github.com/stylelint-scss/stylelint-config-standard-scss): The standard shareable SCSS config for Stylelint.
  - [`stylelint-config-standard`](https://github.com/stylelint/stylelint-config-standard): The standard shareable config for Stylelint.
  - [`stylelint-config-recommended-scss`](https://github.com/stylelint-scss/stylelint-config-recommended-scss): The recommended shareable SCSS config for Stylelint.
    - [`stylelint-config-recommended`](https://github.com/stylelint/stylelint-config-recommended): The recommended shareable config for Stylelint.
    - bundles the [`stylelint-scss` plugin pack](https://github.com/stylelint-scss/stylelint-scss): A collection of SCSS specific linting rules for stylelint.
    - bundles the [`postcss-scss` custom syntax](https://github.com/postcss/postcss-scss): A SCSS parser for PostCSS.
- [`stylelint-stylistic`](https://github.com/elirasza/stylelint-stylistic): Plugin for endangered stylelint stylistic rules.
- [`stylelint-order`](https://github.com/hudochenkov/stylelint-order): Order-related linting rules for stylelint.
  Properties must be [sorted according to this list](https://github.com/adorade/stylelint-config/blob/main/groups.js).

To see the rules that this config uses, please read the [config itself](/index.js).

## License

Released under the [MIT License](LICENSE).
