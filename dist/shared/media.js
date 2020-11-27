"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledComponents = require("styled-components");

var _theme = _interopRequireDefault(require("./theme.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  all: (...args) => (0, _styledComponents.css)(...args),
  small: (...args) => (0, _styledComponents.css)`
    @media (max-width: ${_theme.default.breakpoints.values.md}px) {
      ${(0, _styledComponents.css)(...args)};
    }
  `,
  gtSmall: (...args) => (0, _styledComponents.css)`
    @media (min-width: ${_theme.default.breakpoints.values.md + 1}px) {
      ${(0, _styledComponents.css)(...args)};
    }
  `,
  medium: (...args) => (0, _styledComponents.css)`
    @media (min-width: ${_theme.default.breakpoints.values.md + 1}px and max-width ${_theme.default.breakpoints.values.lg}px) {
      ${(0, _styledComponents.css)(...args)}
    }
  `,
  gtMedium: (...args) => (0, _styledComponents.css)`
    @media (min-width: ${_theme.default.breakpoints.values.md + 1}px) {
      ${(0, _styledComponents.css)(...args)};
    }
  `,
  large: (...args) => (0, _styledComponents.css)`
    @media (min-width: ${_theme.default.breakpoints.values.lg + 1}px) {
      ${(0, _styledComponents.css)(...args)};
    }
  `,
  gtLarge: (...args) => (0, _styledComponents.css)`
    @media (min-width: ${_theme.default.breakpoints.values.lg + 1}px) {
      ${(0, _styledComponents.css)(...args)};
    }
  `
};
exports.default = _default;