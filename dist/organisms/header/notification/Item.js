"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styles = require("./styles");

var _Button = require("../../../atoms/button/Button");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const ItemGroup = () => /*#__PURE__*/_react.default.createElement(_styles.StyledItem, null, /*#__PURE__*/_react.default.createElement("div", {
  className: "column left"
}, /*#__PURE__*/_react.default.createElement("div", {
  className: "image"
}, /*#__PURE__*/_react.default.createElement("img", {
  src: "",
  alt: ""
})), /*#__PURE__*/_react.default.createElement("div", {
  className: "description"
}, /*#__PURE__*/_react.default.createElement("p", null, /*#__PURE__*/_react.default.createElement("span", null, "The Mari Bag (0200388292)"), " was assigned to you and needs your approval."))), /*#__PURE__*/_react.default.createElement("div", {
  className: "column right"
}, /*#__PURE__*/_react.default.createElement(_Button.Button, {
  isPrimary: false,
  onClick: () => {},
  size: "small",
  text: "Review item",
  theme: "none"
})));

ItemGroup.propTypes = {
  title: _propTypes.default.string,
  items: _propTypes.default.array
};
var _default = ItemGroup;
exports.default = _default;