"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styles = require("./styles");

var _Item = _interopRequireDefault(require("./Item"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const ItemGroup = ({
  title
}) => /*#__PURE__*/_react.default.createElement(_styles.StyledItemGroup, null, /*#__PURE__*/_react.default.createElement("div", {
  className: "title"
}, title), /*#__PURE__*/_react.default.createElement(_Item.default, null), /*#__PURE__*/_react.default.createElement(_Item.default, null));

ItemGroup.propTypes = {
  title: _propTypes.default.string
};
var _default = ItemGroup;
exports.default = _default;