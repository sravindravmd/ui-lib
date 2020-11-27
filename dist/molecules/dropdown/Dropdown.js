"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Dropdown = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _images = require("../../assets/images");

var _clickOutside = _interopRequireDefault(require("../../hooks/click-outside"));

var _keyPress = _interopRequireDefault(require("../../hooks/key-press"));

var _styles = require("./styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const Dropdown = ({
  options = [],
  value,
  isDefault,
  titleLabel,
  className
}) => {
  const downPress = (0, _keyPress.default)('ArrowDown');
  const upPress = (0, _keyPress.default)('ArrowUp');
  const enterPress = (0, _keyPress.default)('Enter');
  const [cursor, setCursor] = (0, _react.useState)(-1);
  const [isOpen, setIsOpen] = (0, _react.useState)(false);
  const [selectedOption, setSelectedOption] = (0, _react.useState)(value);

  const toggling = () => setIsOpen(!isOpen);

  const onOptionClicked = (value, index) => () => {
    setSelectedOption(value);
    setIsOpen(false);
    setCursor(index);
  };

  const clickRef = (0, _react.useRef)();
  (0, _clickOutside.default)(clickRef, () => {
    setIsOpen(false);
  }, isOpen);
  (0, _react.useEffect)(() => {
    if (options.length && isOpen && downPress) {
      setCursor(prevState => prevState < options.length - 1 ? prevState + 1 : prevState);
    }
  }, [downPress]);
  (0, _react.useEffect)(() => {
    if (options.length && isOpen && upPress) {
      setCursor(prevState => prevState > 0 ? prevState - 1 : prevState);
    }
  }, [upPress]);
  (0, _react.useEffect)(() => {
    if (options.length && enterPress) {
      setSelectedOption(options[cursor]);
      setIsOpen(false);
    }
  }, [cursor, enterPress]);
  return /*#__PURE__*/_react.default.createElement(_styles.DropDownContainer, {
    isDefault: isDefault,
    ref: clickRef,
    className: className
  }, isDefault && /*#__PURE__*/_react.default.createElement(_styles.StyledDropdownLabel, null, /*#__PURE__*/_react.default.createElement("label", {
    className: "dd-lable"
  }, titleLabel)), /*#__PURE__*/_react.default.createElement(_styles.StyledDropdownHeader, {
    onClick: toggling,
    isDefault: isDefault
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "content-wrapper"
  }, selectedOption && /*#__PURE__*/_react.default.createElement("label", {
    className: "option-label"
  }, selectedOption.name), /*#__PURE__*/_react.default.createElement("div", {
    className: isOpen ? 'icon rotate180' : 'icon rotate0'
  }, /*#__PURE__*/_react.default.createElement(_images.DownCaret, null)))), isOpen && /*#__PURE__*/_react.default.createElement(_styles.DropDownListContainer, null, /*#__PURE__*/_react.default.createElement(_styles.DropDownList, {
    isDefault: isDefault
  }, options.map((option, index) => /*#__PURE__*/_react.default.createElement(_styles.ListItem, {
    onClick: onOptionClicked(option, index),
    key: Math.random(),
    className: index === cursor && 'active'
  }, option.name)))));
};

exports.Dropdown = Dropdown;
Dropdown.propTypes = {
  isDefault: _propTypes.default.bool,
  titleLabel: _propTypes.default.string.isRequired,
  className: _propTypes.default.string,
  options: _propTypes.default.array.isRequired,
  value: _propTypes.default.object
};