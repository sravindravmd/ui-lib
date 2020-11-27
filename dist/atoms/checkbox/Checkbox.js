"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Checkbox = void 0;

var _react = _interopRequireWildcard(require("react"));

var _uuid = require("uuid");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Checkbox = require("./Checkbox.styles");

var _images = require("../../assets/images");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const Checkbox = ({
  initialState,
  label,
  name,
  value,
  onChange,
  tabIndex,
  disabled,
  className,
  ...props
}) => {
  const [selected, setSelected] = (0, _react.useState)(initialState);
  const checkboxRef = (0, _react.useRef)((0, _uuid.v4)());

  const handleCheck = e => {
    setSelected(e.target.checked);
    onChange(e);
  };

  return /*#__PURE__*/_react.default.createElement(_Checkbox.StyledCheckboxWrapper, {
    tabIndex: tabIndex,
    disabled: disabled,
    className: className
  }, /*#__PURE__*/_react.default.createElement(_Checkbox.StyledBox, {
    selected: selected
  }, /*#__PURE__*/_react.default.createElement(_images.Checkmark, {
    opacity: "0"
  })), /*#__PURE__*/_react.default.createElement("input", _extends({}, props, {
    type: "checkbox",
    name: name || checkboxRef.current,
    onChange: handleCheck,
    value: value,
    checked: selected,
    "data-testid": "checkbox"
  })), /*#__PURE__*/_react.default.createElement(_Checkbox.StyledText, null, label));
};

exports.Checkbox = Checkbox;
Checkbox.defaultProps = {
  initialState: false,
  tabIndex: 0,
  disabled: false,
  className: '',
  onChange: () => {}
};
Checkbox.propTypes = {
  label: _propTypes.default.string.isRequired,
  value: _propTypes.default.string.isRequired,
  onChange: _propTypes.default.func.isRequired,
  name: _propTypes.default.string,
  initialState: _propTypes.default.bool,
  disabled: _propTypes.default.bool,
  tabIndex: _propTypes.default.number,
  className: _propTypes.default.string
};