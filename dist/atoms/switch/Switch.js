"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Switch = void 0;

var _react = _interopRequireWildcard(require("react"));

var _Switch = require("./Switch.styles");

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const Switch = ({
  initialState,
  label,
  ontoggle,
  ...props
}) => {
  const [toggle, setToggle] = (0, _react.useState)(initialState);
  const handleToggle = (0, _react.useCallback)(e => {
    setToggle(e.target.checked);
    ontoggle(e.target.checked);
  }, [ontoggle]);
  return /*#__PURE__*/_react.default.createElement(_Switch.StyledSwitchWrapper, null, /*#__PURE__*/_react.default.createElement(_Switch.StyledToggleSwitch, null, /*#__PURE__*/_react.default.createElement(_Switch.StyledCheckbox, _extends({}, props, {
    "data-testid": "toggle",
    type: "checkbox",
    checked: toggle,
    value: toggle,
    onChange: e => handleToggle(e)
  })), /*#__PURE__*/_react.default.createElement(_Switch.Slider, {
    toggle: toggle
  })), label && /*#__PURE__*/_react.default.createElement(_Switch.Styledtext, null, label));
};

exports.Switch = Switch;
Switch.defaultProps = {
  label: '',
  ontoggle: () => {},
  initialState: false
};
Switch.propTypes = {
  label: _propTypes.default.string,
  ontoggle: _propTypes.default.func,
  initialState: _propTypes.default.bool
};