"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Radio = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _uuid = require("uuid");

var _Radio = require("./Radio.styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const Radio = ({
  label,
  value,
  checked,
  onChange,
  name,
  tabIndex = 0,
  disabled,
  className,
  ...other
}) => {
  const uid = (0, _react.useMemo)(() => (0, _uuid.v4)(), []);
  return /*#__PURE__*/_react.default.createElement(_Radio.StyledRadio, _extends({}, other, {
    className: className
  }), /*#__PURE__*/_react.default.createElement("input", {
    type: "radio",
    name: name || uid,
    className: "radio-input",
    checked: checked || false,
    value: value,
    onChange: event => onChange(event),
    id: uid,
    tabIndex: tabIndex,
    disabled: disabled
  }), /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: uid,
    className: "radio-label"
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: "circle"
  }), /*#__PURE__*/_react.default.createElement("span", {
    className: "label"
  }, label)));
};

exports.Radio = Radio;
Radio.propTypes = {
  label: _propTypes.default.string.isRequired,
  value: _propTypes.default.string.isRequired,
  id: _propTypes.default.string,
  className: _propTypes.default.string,
  checked: _propTypes.default.bool,
  name: _propTypes.default.string,
  onChange: _propTypes.default.func,
  tabIndex: _propTypes.default.number,
  disabled: _propTypes.default.bool
};
Radio.defaultProps = {
  checked: false
};