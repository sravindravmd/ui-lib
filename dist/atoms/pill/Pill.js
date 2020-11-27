"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Pill = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Pill = require("./Pill.styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const Pill = ({
  variant,
  text,
  ...props
}) => {
  const pillType = _Pill.pillTypes[variant] ? _Pill.pillTypes[variant] : _Pill.pillTypes['success'];
  return /*#__PURE__*/_react.default.createElement(_Pill.StyledPill, _extends({}, props, pillType), text);
};

exports.Pill = Pill;
Pill.defaultProps = {
  variant: 'success'
};
Pill.propTypes = {
  text: _propTypes.default.string.isRequired,
  variant: _propTypes.default.oneOf(['success', 'warning', 'alert'])
};