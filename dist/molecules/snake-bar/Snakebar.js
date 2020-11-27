"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SnakeBar = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Snakebar = require("./Snakebar.styles");

var _Icon = _interopRequireDefault(require("./Icon"));

var _iconClose = _interopRequireDefault(require("../../assets/images/icon-close"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const SnakeBar = ({
  kind,
  children,
  dismissable,
  label,
  onDismiss,
  show,
  withIcon,
  className,
  ...others
}) => {
  const [alertVisible, setVisible] = (0, _react.useState)(false);

  const handleAlertDismiss = () => {
    if (onDismiss) onDismiss();
    setVisible({
      alertVisible: false
    });
  };

  const visible = typeof show === 'undefined' ? alertVisible : show;
  if (!visible) return /*#__PURE__*/_react.default.createElement("span", null);
  let iconColumn;

  if (withIcon) {
    iconColumn = /*#__PURE__*/_react.default.createElement("div", {
      className: "icon"
    }, /*#__PURE__*/_react.default.createElement(_Icon.default, {
      kind: kind
    }));
  }

  let dismissableColumn;

  if (dismissable) {
    dismissableColumn = /*#__PURE__*/_react.default.createElement("div", {
      className: "dismiss",
      onClick: handleAlertDismiss
    }, /*#__PURE__*/_react.default.createElement(_iconClose.default, null));
  }

  return /*#__PURE__*/_react.default.createElement(_Snakebar.StyledSnakebar, _extends({
    className: `${kind} ${className ? className : ''}`
  }, others), /*#__PURE__*/_react.default.createElement("div", {
    className: "row"
  }, iconColumn, /*#__PURE__*/_react.default.createElement("div", {
    className: "col col-middle"
  }, /*#__PURE__*/_react.default.createElement("div", null, label && /*#__PURE__*/_react.default.createElement("span", {
    className: "label"
  }, label), children)), dismissableColumn));
};

exports.SnakeBar = SnakeBar;
SnakeBar.propTypes = {
  closeLabel: _propTypes.default.node,
  dismissable: _propTypes.default.bool,
  kind: _propTypes.default.oneOf(['alert', 'success', 'message', 'notification']),
  label: _propTypes.default.string,
  onDismiss: _propTypes.default.func,
  show: _propTypes.default.bool,
  withIcon: _propTypes.default.bool,
  children: _propTypes.default.node,
  className: _propTypes.default.string
};
SnakeBar.defaultProps = {
  closeLabel: 'Close alert',
  dismissable: false,
  withIcon: false
};