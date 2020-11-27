"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Colors = void 0;

var _react = _interopRequireDefault(require("react"));

var _Color = require("./Color.styles");

var _Color2 = require("./Color");

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Colors = ({
  colors = []
}) => {
  return /*#__PURE__*/_react.default.createElement(_Color.StyledColorsContainer, null, colors.map(({
    name,
    path,
    color
  }) => /*#__PURE__*/_react.default.createElement(_Color2.Color, {
    color: color,
    name: name,
    path: path,
    key: name
  })));
};

exports.Colors = Colors;
Colors.propTypes = {
  colors: _propTypes.default.array
};