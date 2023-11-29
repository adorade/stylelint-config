/*!
 * Adorade Stylelint Config (v1.1.0): groups.js
 * Copyright (c) 2023 Adorade (https://github.com/adorade/stylelint-config)
 * License under MIT
 * ========================================================================== */

const propertyGroups = [
  {
    // Compose rules from other selectors in CSS Modules.
    // @see https://github.com/css-modules/css-modules#composition
    'groupName': 'composes',
    'properties': ['composes']
  },
  {
    // Must be first (unless using the above).
    'groupName': 'all',
    'properties': ['all']
  },
  {
    'groupName': 'position',
    'properties': [
      'isolation',
      'position', 'top', 'right', 'bottom', 'left', 'z-index',
      'inset', 'inset-block', 'inset-block-start', 'inset-block-end',
      'inset-inline', 'inset-inline-start', 'inset-inline-end'
    ]
  },
  {
    'groupName': 'layout',
    'properties': [
      'display', 'flex-direction', 'flex-wrap', 'flex-flow', 'order',
      'flex-grow', 'flex-shrink', 'flex-basis', 'flex',
      'justify-content', 'align-items', 'align-self', 'align-content',
      'gap', 'column-gap', 'row-gap',
      'place-content', 'place-items', 'place-self',
      'grid-template', 'grid-template-columns', 'grid-template-rows', 'grid-template-areas',
      'grid-auto-columns', 'grid-auto-flow', 'grid-auto-rows',
      'grid', 'grid-area',
      'grid-column', 'grid-column-end', 'grid-column-start',
      'grid-row', 'grid-row-end', 'grid-row-start',
      'grid-gap', 'grid-column-gap', 'grid-row-gap'
    ]
  },
  {
    'groupName': 'box-model',
    'properties': [
      'box-sizing', 'aspect-ratio',
      'width', 'inline-size', 'min-width', 'max-width', 'min-inline-size', 'max-inline-size',
      'height', 'block-size', 'min-height', 'max-height', 'min-block-size', 'max-block-size',
      'padding', 'padding-top', 'padding-right', 'padding-bottom', 'padding-left',
      'padding-block', 'padding-block-start', 'padding-block-end',
      'padding-inline', 'padding-inline-start', 'padding-inline-end',
      'margin', 'margin-top', 'margin-right', 'margin-bottom', 'margin-left',
      'margin-block', 'margin-block-start', 'margin-block-end',
      'margin-inline', 'margin-inline-start', 'margin-inline-end'
    ]
  },
  {
    'groupName': 'border',
    'properties': [
      'border', 'border-width', 'border-style', 'border-color',
      'border-top', 'border-top-width', 'border-top-style', 'border-top-color',
      'border-right', 'border-right-width', 'border-right-style', 'border-right-color',
      'border-bottom', 'border-bottom-width', 'border-bottom-style', 'border-bottom-color',
      'border-left', 'border-left-width', 'border-left-style', 'border-left-color',
      'border-block', 'border-block-width', 'border-block-style', 'border-block-color',
      'border-block-start', 'border-block-start-width', 'border-block-start-style', 'border-block-start-color',
      'border-block-end', 'border-block-end-width', 'border-block-end-style', 'border-block-end-color',
      'border-inline', 'border-inline-width', 'border-inline-style', 'border-inline-color',
      'border-inline-start', 'border-inline-start-width', 'border-inline-start-style', 'border-inline-start-color',
      'border-inline-end', 'border-inline-end-width', 'border-inline-end-style', 'border-inline-end-color',
      'border-radius',
      'border-start-start-radius', 'border-start-end-radius', 'border-end-start-radius', 'border-end-end-radius',
      'border-top-left-radius', 'border-top-right-radius', 'border-bottom-right-radius', 'border-bottom-left-radius',
      'border-image',
      'border-image-source', 'border-image-slice', 'border-image-width', 'border-image-outset', 'border-image-repeat'
    ]
  },
  {
    'groupName': 'appearance',
    'properties': [
      'appearance', 'visibility', 'color-scheme', 'forced-color-adjust', 'accent-color',
      'perspective', 'perspective-origin', 'backface-visibility',
      'opacity', 'object-fit', 'object-position', 'image-orientation',
      'overflow', 'overflow-x', 'overflow-y',
      'overflow-anchor', 'overflow-clip-margin', 'overflow-block', 'overflow-inline', 'overflow-wrap',
      'overscroll-behavior', 'overscroll-behavior-x', 'overscroll-behavior-y', 'overscroll-behavior-inline', 'overscroll-behavior-block',
      'background', 'background-image', 'background-position', 'background-position-x', 'background-position-y',
      'background-size', 'background-repeat', 'background-origin', 'background-clip', 'background-attachment',
      'background-color', 'background-blend-mode'
    ]
  },
  {
    'groupName': 'typography',
    'properties': [
      'color', 'writing-mode', 'font', 'font-family', 'font-size', 'line-height',
      'font-feature-settings', 'font-variation-settings', 'font-optical-sizing',
      'font-style', 'font-weight', 'font-display', 'font-kerning', 'font-variant',
      'font-variant-ligatures', 'font-variant-caps', 'font-variant-alternates', 'font-variant-numeric', 'font-variant-east-asian', 'font-variant-position',
      'font-size-adjust', 'font-stretch', 'font-effect', 'font-emphasize', 'font-emphasize-position', 'font-emphasize-style',
      '-webkit-font-smoothing', '-moz-osx-font-smoothing', 'font-smooth',
      'text-align', 'text-align-last',
      'text-emphasis', 'text-emphasis-color', 'text-emphasis-style', 'text-emphasis-position',
      'text-decoration', 'text-decoration-color', 'text-decoration-line', 'text-decoration-style', 'text-decoration-thickness', 'text-decoration-skip-ink',
      'text-underline-position', 'text-underline-offset',
      'text-indent', 'text-justify', 'text-outline',
      'text-overflow', 'text-overflow-ellipsis', 'text-overflow-mode',
      'text-shadow', 'text-transform', 'text-wrap', 'text-size-adjust',
      'text-combine-upright', 'text-orientation', 'text-rendering', '-webkit-text-fill-color', '-webkit-text-stroke-color',
      '-webkit-text-size-adjust', '-ms-text-size-adjust',
      'letter-spacing', 'word-break', 'word-spacing', 'word-wrap',
      'line-break', 'overflow-wrap', 'tab-size', 'white-space', 'vertical-align',
      'list-style', 'list-style-position', 'list-style-type', 'list-style-image'
    ]
  },
  {
    'groupName': 'svgPresentation',
    'properties': [
      'alignment-baseline', 'baseline-shift', 'dominant-baseline', 'text-anchor',
      'cx', 'cy', 'd', 'r', 'rx', 'ry',
      'fill', 'fill-opacity', 'fill-rule', 'flood-color', 'flood-opacity', 'stop-color', 'stop-opacity',
      'stroke', 'stroke-dasharray', 'stroke-dashoffset', 'stroke-linecap', 'stroke-linejoin', 'stroke-miterlimit', 'stroke-opacity', 'stroke-width', 'vector-effect',
      'color-interpolation', 'color-interpolation-filters', 'color-profile', 'color-rendering',
      'image-rendering', 'lighting-color', 'marker-start', 'marker-mid', 'marker-end',
      'mask', 'mask-type', 'shape-rendering', 'clip-rule'
    ]
  },
  {
    'groupName': 'transition',
    'properties': [
      'transition', 'transition-delay', 'transition-duration', 'transition-property', 'transition-timing-function',
      'animation', 'animation-name', 'animation-duration', 'animation-timing-function', 'animation-delay', 'animation-iteration-count',
      'animation-direction', 'animation-fill-mode', 'animation-play-state'
    ]
  },
  {
    'groupName': 'misc',
    'properties': [
      'outline', 'outline-width', 'outline-style', 'outline-color', 'outline-offset',
      'box-shadow', 'mix-blend-mode', 'caret-color', 'box-decoration-break', '-webkit-box-decoration-break',
      'float', 'clear',
      'table-layout', 'border-spacing', 'border-collapse', 'empty-cells', 'caption-side',
      'columns', 'column-count', 'column-width', 'column-fill', 'column-gap', 'column-span',
      'column-rule', 'column-rule-width', 'column-rule-style', 'column-rule-color',
      'break-inside', 'break-before', 'break-after',
      'shape-outside', 'shape-image-threshold', 'shape-margin',
      'orphans', 'widows', 'clip', 'clip-path', 'filter', 'backdrop-filter', 'box-decoration-break',
      'transform', 'transform-box', 'transform-origin', 'transform-style',
      'zoom', 'translate', 'rotate', 'scale',
      'offset-path', 'offset-distance', 'offset-rotate',
      'pointer-events', 'touch-action', 'cursor', 'visibility', 'speak',
      'container', 'container-name', 'container-type', 'size', 'direction', 'unicode-bidi', 'contain',
      'content', 'quotes', 'counter-reset', 'counter-increment', 'resize', 'user-select', 'caption-side'
    ]
  }
];

module.exports = propertyGroups;
