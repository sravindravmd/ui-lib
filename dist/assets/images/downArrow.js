"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DownArrow = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const DownArrow = props => /*#__PURE__*/_react.default.createElement("svg", _extends({
  width: "12",
  height: "12",
  viewBox: "0 0 12 12",
  xmlns: "http://www.w3.org/2000/svg"
}, props), /*#__PURE__*/_react.default.createElement("path", {
  d: "M2.70711 5.70711C2.07714 5.07714 2.52331 4 3.41421 4L8.58579 4C9.47669 4 9.92286 5.07714 9.29289 5.70711L6.70711 8.29289C6.31658 8.68342 5.68342 8.68342 5.29289 8.29289L2.70711 5.70711Z"
}));

exports.DownArrow = DownArrow;