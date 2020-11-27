"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var _default = props => /*#__PURE__*/_react.default.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  width: "44px",
  height: "44px",
  viewBox: "0 0 100 100",
  preserveAspectRatio: "xMidYMid"
}, props), /*#__PURE__*/_react.default.createElement("circle", {
  cx: "50",
  cy: "50",
  fill: "none",
  stroke: "#737f8f",
  strokeWidth: "10",
  r: "40",
  strokeDasharray: "188.49555921538757 64.83185307179586"
}, /*#__PURE__*/_react.default.createElement("animateTransform", {
  attributeName: "transform",
  type: "rotate",
  repeatCount: "indefinite",
  dur: "1.1904761904761905s",
  values: "0 50 50;360 50 50",
  keyTimes: "0;1"
})));

exports.default = _default;