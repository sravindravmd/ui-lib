"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ModalHeader = void 0;

var _react = _interopRequireDefault(require("react"));

var _styles = require("./styles");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _atoms = require("../../atoms");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const ModalHeader = ({
  onCancel,
  onSave,
  ...props
}) => /*#__PURE__*/_react.default.createElement(_styles.StyledModalHeader, props, /*#__PURE__*/_react.default.createElement(_atoms.Button, {
  "data-dismiss": "modal",
  "aria-label": "Close",
  size: "small",
  text: "Cancel",
  theme: "none",
  className: "modal-close-button",
  isPrimary: false,
  onClick: onCancel
}), /*#__PURE__*/_react.default.createElement(_atoms.Button, {
  "data-dismiss": "modal",
  "aria-label": "Close",
  size: "small",
  onClick: onSave,
  text: "Save"
}));

exports.ModalHeader = ModalHeader;
ModalHeader.propTypes = {
  onCancel: _propTypes.default.func,
  onSave: _propTypes.default.func
};