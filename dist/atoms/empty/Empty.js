"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Empty = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Empty = require("./Empty.styles");

var _Button = require("../button/Button");

var _utils = require("../../shared/utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Empty = ({
  className,
  primaryText,
  secondaryText,
  buttonProps,
  children,
  footerContent
}) => {
  return /*#__PURE__*/_react.default.createElement(_Empty.StyledEmptyWrapper, {
    className: className
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "empty-inner"
  }, primaryText && /*#__PURE__*/_react.default.createElement("div", {
    className: "primary-text"
  }, (0, _utils.lineBreak)(primaryText)), secondaryText && /*#__PURE__*/_react.default.createElement("div", {
    className: "secondary-text"
  }, (0, _utils.lineBreak)(secondaryText)), buttonProps && /*#__PURE__*/_react.default.createElement("div", {
    className: "button-block"
  }, /*#__PURE__*/_react.default.createElement(_Button.Button, buttonProps)), footerContent && /*#__PURE__*/_react.default.createElement("div", {
    className: "footer-content"
  }, footerContent), children && children));
};

exports.Empty = Empty;
Empty.propTypes = {
  primaryText: _propTypes.default.string,
  className: _propTypes.default.string,
  secondaryText: _propTypes.default.string,
  buttonProps: _propTypes.default.object,
  children: _propTypes.default.element,
  footerContent: _propTypes.default.any
};