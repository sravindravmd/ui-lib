"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Loading = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Loading = require("./Loading.styles");

var _iconLoading = _interopRequireDefault(require("../../svg/icon-loading"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Loading = ({
  className,
  toggle
}) => {
  return toggle ? /*#__PURE__*/_react.default.createElement(_Loading.StyledLoading, {
    className: className
  }, /*#__PURE__*/_react.default.createElement(_iconLoading.default, null)) : null;
};

exports.Loading = Loading;
Loading.propTypes = {
  toggle: _propTypes.default.bool,
  className: _propTypes.default.string
};
Loading.defaultProps = {
  toggle: true
};