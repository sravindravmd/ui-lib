"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Input = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _Input = require("./Input.styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const isFunction = x => typeof x === 'function';

const Input = ({
  inputProps,
  errorProps,
  label,
  className: containerClassName,
  iconLeft,
  error,
  kind,
  errorMessage,
  ...containerPropsRest
}) => {
  const [value, setValue] = (0, _react.useState)('');
  const [isControlled] = (0, _react.useState)(typeof inputProps.value === 'string');
  const [isFocused, setFocus] = (0, _react.useState)(false);
  const [showPass, setPass] = (0, _react.useState)(false);
  const setInputValue = (0, _react.useCallback)((value = '') => {
    setValue(value);
  }, []);
  (0, _react.useEffect)(() => {
    if (isControlled) {
      return setInputValue(inputProps.value);
    }

    setInputValue(inputProps.defaultValue);
  }, [inputProps.defaultValue, inputProps.value, isControlled, setInputValue]);
  (0, _react.useEffect)(() => {
    if (inputProps.value) {
      setInputValue(inputProps.value);
    }
  }, [inputProps.value, setInputValue]);

  const handleBlur = event => {
    setFocus(false);

    if (isFunction(inputProps.onBlur)) {
      inputProps.onBlur(event);
    }
  };

  const handleFocus = event => {
    setFocus(true);

    if (isFunction(inputProps.onFocus)) {
      inputProps.onFocus(event);
    }
  };

  const handleChange = event => {
    if (!isControlled) {
      setInputValue(event.target.value);
    }

    if (isFunction(inputProps.onChange)) {
      inputProps.onChange(event);
    }
  };

  const {
    className: inputClassName,
    placeholder,
    boxed,
    type,
    ...inputPropsRest
  } = inputProps || {};
  return /*#__PURE__*/_react.default.createElement(_Input.StyledInputComponent, {
    className: containerClassName
  }, /*#__PURE__*/_react.default.createElement(_Input.StyledInputContainer, _extends({
    className: (0, _classnames.default)({
      container_error: error,
      container_focus: isFocused,
      [kind]: kind,
      boxed: boxed,
      ['icon-left']: iconLeft
    })
  }, containerPropsRest), /*#__PURE__*/_react.default.createElement("label", {
    className: "input_parent"
  }, label ? /*#__PURE__*/_react.default.createElement("span", {
    className: "input__label"
  }, label) :
  /*#__PURE__*/
  // Used for ADA compliance
  _react.default.createElement("span", {
    className: "input__label--hidden"
  }, placeholder), /*#__PURE__*/_react.default.createElement("div", {
    className: "input__wrapper"
  }, iconLeft && /*#__PURE__*/_react.default.createElement("span", {
    className: "icon left"
  }, iconLeft), /*#__PURE__*/_react.default.createElement(_Input.StyledInput, _extends({
    placeholder: placeholder,
    onBlur: handleBlur,
    onFocus: handleFocus,
    onChange: handleChange,
    className: inputClassName,
    value: value,
    boxed: boxed,
    type: type === 'password' && showPass ? 'text' : type
  }, inputPropsRest)), type === 'password' && value.length > 0 && /*#__PURE__*/_react.default.createElement("span", {
    className: "input__show",
    onClick: () => setPass(!showPass)
  }, showPass ? 'Hide' : 'Show')))), error && errorMessage && /*#__PURE__*/_react.default.createElement("div", _extends({
    className: "error"
  }, errorProps), errorMessage));
};

exports.Input = Input;
Input.propTypes = {
  error: _propTypes.default.bool,
  errorMessage: _propTypes.default.string,
  label: _propTypes.default.string,
  iconLeft: _propTypes.default.element,
  // react elements to put before the input`
  boxed: _propTypes.default.bool,
  className: _propTypes.default.string,
  inputProps: _propTypes.default.shape({
    defaultValue: _propTypes.default.string,
    onBlur: _propTypes.default.func,
    onFocus: _propTypes.default.func,
    onChange: _propTypes.default.func,
    type: _propTypes.default.string,
    value: _propTypes.default.string,
    placeholder: _propTypes.default.string
  }),
  errorProps: _propTypes.default.object,
  kind: _propTypes.default.string
};
Input.defaultProps = {
  inputProps: {
    type: 'text'
  }
};