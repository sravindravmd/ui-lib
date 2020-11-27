"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _style = require("./style");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const QuickAccessCard = ({
  title,
  subtitle,
  imgUrl,
  imgAltText,
  onClick,
  ...props
}) => {
  const [selected, setSelected] = (0, _react.useState)(false);

  const handleCardSelect = e => {
    setSelected(select => !select);
    onClick(e);
  };

  return /*#__PURE__*/_react.default.createElement(_style.StyledQuickAccessCard, _extends({}, props, {
    selected: selected,
    onClick: handleCardSelect
  }), /*#__PURE__*/_react.default.createElement(_style.StyledCardContent, {
    tabIndex: "-1"
  }, /*#__PURE__*/_react.default.createElement(_style.StyledThumbnail, null, /*#__PURE__*/_react.default.createElement("img", {
    src: imgUrl,
    alt: imgAltText
  })), /*#__PURE__*/_react.default.createElement(_style.StyledContent, null, /*#__PURE__*/_react.default.createElement(_style.StyledTitle, null, title), /*#__PURE__*/_react.default.createElement(_style.StyledSubtitle, null, subtitle))));
};

QuickAccessCard.defaultProps = {
  onClick: () => {}
};
QuickAccessCard.propTypes = {
  title: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.element]).isRequired,
  subtitle: _propTypes.default.string.isRequired,
  imgUrl: _propTypes.default.string.isRequired,
  imgAltText: _propTypes.default.string.isRequired,
  onClick: _propTypes.default.func
};
var _default = QuickAccessCard;
exports.default = _default;