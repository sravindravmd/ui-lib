"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Textarea = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _Textarea = require("./Textarea.styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const isFunction = x => typeof x === 'function';

const Textarea = ({
  textareaProps,
  errorProps,
  label,
  className: containerClassName,
  error,
  kind,
  errorMessage,
  ...containerPropsRest
}) => {
  const [value, setValue] = (0, _react.useState)('');
  const [isControlled] = (0, _react.useState)(typeof textareaProps.value === 'string');
  const [isFocused, setFocus] = (0, _react.useState)(false);
  const [limitCount, setLimitCount] = (0, _react.useState)(0);
  const setTextareaValue = (0, _react.useCallback)((value = '') => {
    setValue(value);
    setLimitCount(value.length);
  }, []);
  (0, _react.useEffect)(() => {
    if (textareaProps.value) {
      setTextareaValue(textareaProps.value);
    }
  }, [textareaProps.value, setTextareaValue]);

  const handleBlur = event => {
    setFocus(false);

    if (isFunction(textareaProps.onBlur)) {
      textareaProps.onBlur(event);
    }
  };

  const handleFocus = event => {
    setFocus(true);

    if (isFunction(textareaProps.onFocus)) {
      textareaProps.onFocus(event);
    }
  };

  const handleChange = event => {
    if (!isControlled) {
      setTextareaValue(event.target.value);
    }

    if (isFunction(textareaProps.onChange)) {
      textareaProps.onChange(event);
    }
  };

  const {
    className: inputClassName,
    placeholder,
    boxed,
    limit,
    ...textareaPropsRest
  } = textareaProps || {};
  return /*#__PURE__*/_react.default.createElement(_Textarea.StyledTextareaComponent, {
    className: containerClassName
  }, /*#__PURE__*/_react.default.createElement(_Textarea.StyledTextareaContainer, _extends({
    className: (0, _classnames.default)({
      container_error: error,
      container_focus: isFocused,
      [kind]: kind,
      boxed: boxed
    })
  }, containerPropsRest), /*#__PURE__*/_react.default.createElement("label", {
    className: "textarea_parent"
  }, label ? /*#__PURE__*/_react.default.createElement("span", {
    className: "textarea__label"
  }, label) :
  /*#__PURE__*/
  // Used for ADA compliance
  _react.default.createElement("span", {
    className: "textarea__label--hidden"
  }, placeholder), /*#__PURE__*/_react.default.createElement(_Textarea.StyledMultiline, {
    className: `${value.length > 0 ? 'has-content' : ''}`
  }, /*#__PURE__*/_react.default.createElement("textarea", _extends({
    placeholder: placeholder,
    onBlur: handleBlur,
    onFocus: handleFocus,
    onChange: handleChange,
    className: inputClassName,
    maxLength: limit
  }, textareaPropsRest, {
    value: value
  })), limit && /*#__PURE__*/_react.default.createElement("span", {
    className: "limit"
  }, /*#__PURE__*/_react.default.createElement("span", null, limitCount), /*#__PURE__*/_react.default.createElement("span", null, "/", limit))))), error && errorMessage && /*#__PURE__*/_react.default.createElement("div", _extends({
    className: "error"
  }, errorProps), errorMessage));
};

exports.Textarea = Textarea;
Textarea.propTypes = {
  error: _propTypes.default.any,
  errorMessage: _propTypes.default.any,
  label: _propTypes.default.string,
  iconLeft: _propTypes.default.any,
  // react elements to put before the input`
  boxed: _propTypes.default.bool,
  className: _propTypes.default.string,
  textareaProps: _propTypes.default.shape({
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