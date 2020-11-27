"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Link = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _theme = _interopRequireDefault(require("../../shared/theme"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const StyledLink = _styledComponents.default.a`
  font-family: ${_theme.default.typography.link.fontFamily};
  font-size: ${_theme.default.typography.link.fontSize};
  line-height: ${_theme.default.typography.link.lineHeight};
  color: ${_theme.default.palette.ui.cta.blue};
  text-align: center;
  outline: none;
  text-decoration: none;
  cursor: pointer;
  border: 1px solid transparent;
  padding: 0px 2px;
  :hover {
    color: ${_theme.default.palette.ui.neutral.grey2};
  }
  :focus {
    padding: 0px 2px;
    border: 1px solid ${_theme.default.palette.ui.cta.yellow};
    border-radius: 6px;
  }
  :active {
    border: 1px solid transparent;
    color: ${_theme.default.palette.ui.neutral.grey1};
  }
  ${({
  disabled
}) => disabled && (0, _styledComponents.css)`
      color: ${_theme.default.palette.brand.primary.charcoal};
      opacity: 0.4;
      pointer-events: none;
    `}
`;

const Link = /*#__PURE__*/_react.default.forwardRef(({
  text,
  href,
  ...props
}, ref) => {
  return /*#__PURE__*/_react.default.createElement(StyledLink, _extends({}, props, {
    href: href,
    ref: ref
  }), text);
});

exports.Link = Link;
Link.propTypes = {
  text: _propTypes.default.string.isRequired,
  href: _propTypes.default.string.isRequired,
  disabled: _propTypes.default.bool
};