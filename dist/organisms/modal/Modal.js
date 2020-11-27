"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Modal = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _styles = require("./styles");

var _cross = _interopRequireDefault(require("../../assets/images/cross"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const Modal = ({
  isShowing,
  isCrossIconActive,
  onCancel,
  ...props
}) => isShowing ? /*#__PURE__*/_reactDom.default.createPortal( /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.ModalOverlay, null), /*#__PURE__*/_react.default.createElement(_styles.ModalWrapper, _extends({
  "aria-modal": true,
  "aria-hidden": true,
  tabIndex: -1,
  role: "dialog"
}, props), /*#__PURE__*/_react.default.createElement("div", {
  className: "content-wrapper"
}, /*#__PURE__*/_react.default.createElement("div", {
  className: "modal"
}, isCrossIconActive && /*#__PURE__*/_react.default.createElement("div", {
  className: "cross-btn"
}, /*#__PURE__*/_react.default.createElement(_cross.default, {
  onClick: onCancel
})), props.children)))), document.body) : null;

exports.Modal = Modal;
Modal.defaultProps = {
  size: 'large',
  isCrossIconActive: false
};
Modal.propTypes = {
  isShowing: _propTypes.default.bool,
  isCrossIconActive: _propTypes.default.bool,
  size: _propTypes.default.oneOf(['small', 'large', 'medium']),
  onCancel: _propTypes.default.func.isRequired,
  className: _propTypes.default.string
};