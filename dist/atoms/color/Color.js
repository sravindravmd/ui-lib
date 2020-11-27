"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Color = void 0;

var _react = _interopRequireDefault(require("react"));

var _Color = require("./Color.styles");

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Color = ({
  color,
  name,
  path
}) => {
  return /*#__PURE__*/_react.default.createElement(_Color.StyledColorContainer, null, /*#__PURE__*/_react.default.createElement(_Color.StyledColor, {
    color: color
  }), /*#__PURE__*/_react.default.createElement("div", null, color), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("div", null, name), /*#__PURE__*/_react.default.createElement("div", null, path));
};

exports.Color = Color;
Color.defaultProps = {
  color: ''
};
Color.propTypes = {
  color: _propTypes.default.string.isRequired,
  name: _propTypes.default.string.isRequired,
  path: _propTypes.default.string.isRequired
};