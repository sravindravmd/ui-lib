"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _iconTick = _interopRequireDefault(require("../../assets/images/icon-tick"));

var _iconWarning = _interopRequireDefault(require("../../assets/images/icon-warning"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Icon = ({
  kind
}) => {
  if (kind == 'success') return /*#__PURE__*/_react.default.createElement(_iconTick.default, null);
  if (kind == 'alert') return /*#__PURE__*/_react.default.createElement(_iconWarning.default, null);
  return /*#__PURE__*/_react.default.createElement("span", null);
};

Icon.propTypes = {
  kind: _propTypes.default.string
};
var _default = Icon;
exports.default = _default;