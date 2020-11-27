"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ButtonWithIcon = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _ButtonWithIcon = require("./ButtonWithIcon.styles");

var _images = require("../../assets/images");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const Icons = {
  DownArrow: _images.DownArrow,
  Add: _images.Add,
  Close: _images.Close,
  Edit: _images.Edit
};

const ButtonWithIcon = ({
  text,
  icon,
  iconPosition,
  isRoundIcon,
  ...rest
}) => {
  const Icon = Icons[icon];
  if (isRoundIcon) return /*#__PURE__*/_react.default.createElement(_ButtonWithIcon.StyledIconButton, _extends({}, rest, {
    isRoundIcon: isRoundIcon
  }), Icon && /*#__PURE__*/_react.default.createElement(Icon, {
    className: "icon"
  }));
  return /*#__PURE__*/_react.default.createElement(_ButtonWithIcon.StyledIconButton, rest, iconPosition && iconPosition === 'left' && Icon && /*#__PURE__*/_react.default.createElement(Icon, {
    className: "icon left-icon"
  }), text, iconPosition && iconPosition === 'right' && Icon && /*#__PURE__*/_react.default.createElement(Icon, {
    className: "icon right-icon"
  }));
};

exports.ButtonWithIcon = ButtonWithIcon;
ButtonWithIcon.defaultProps = {
  disabled: false,
  isPrimary: true,
  theme: 'none',
  emphasis: 'none',
  isRoundIcon: false
};
ButtonWithIcon.propTypes = {
  text: _propTypes.default.string,
  onClick: _propTypes.default.func.isRequired,
  isPrimary: _propTypes.default.bool,
  isRoundIcon: _propTypes.default.bool,
  theme: _propTypes.default.oneOf(['none', 'dark', 'light']),
  emphasis: _propTypes.default.oneOf(['none', 'high', 'low']),
  icon: _propTypes.default.string,
  iconPosition: _propTypes.default.string
};