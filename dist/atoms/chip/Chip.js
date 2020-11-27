"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Chip = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Chip = require("./Chip.styles");

var _cross = _interopRequireDefault(require("../../assets/images/cross"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Chip = /*#__PURE__*/_react.default.memo(({
  uid,
  text,
  onClose,
  ...props
}) => {
  return /*#__PURE__*/_react.default.createElement(_Chip.StyledChip, props, text, /*#__PURE__*/_react.default.createElement(_Chip.StyledCloseButton, {
    onClick: e => onClose(e, uid)
  }, /*#__PURE__*/_react.default.createElement(_cross.default, null)));
});

exports.Chip = Chip;
Chip.defaultProps = {
  disabled: false
};
Chip.propTypes = {
  text: _propTypes.default.string.isRequired,
  uid: _propTypes.default.string.isRequired,
  onClose: _propTypes.default.func.isRequired,
  disabled: _propTypes.default.bool
};