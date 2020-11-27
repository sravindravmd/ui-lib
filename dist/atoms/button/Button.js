"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Button = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Button = require("./Button.styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Button = ({
  text,
  ...rest
}) => /*#__PURE__*/_react.default.createElement(_Button.StyledButton, rest, text);

exports.Button = Button;
Button.defaultProps = {
  disabled: false,
  isPrimary: true,
  size: 'large',
  theme: 'none'
};
Button.propTypes = {
  text: _propTypes.default.string.isRequired,
  onClick: _propTypes.default.func.isRequired,
  isPrimary: _propTypes.default.bool,
  size: _propTypes.default.oneOf(['small', 'large']),
  theme: _propTypes.default.oneOf(['none', 'dark', 'light'])
};