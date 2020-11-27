"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _images = require("../../../assets/images");

var _style = require("./style");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const ExpandableCard = ({
  heading,
  children,
  ...props
}) => {
  const [expand, setExpand] = (0, _react.useState)(false);

  const handleExpand = () => {
    setExpand(e => !e);
  };

  return /*#__PURE__*/_react.default.createElement(_style.StyledCard, _extends({}, props, {
    expand: expand
  }), /*#__PURE__*/_react.default.createElement(_style.StyledCardHeader, null, /*#__PURE__*/_react.default.createElement(_style.StyledHeading, null, heading), /*#__PURE__*/_react.default.createElement(_style.StyledCaret, {
    "data-testid": "downarrow",
    expand: expand,
    onClick: handleExpand
  }, /*#__PURE__*/_react.default.createElement(_images.DownCaret, null))), /*#__PURE__*/_react.default.createElement(_style.StyledCardContent, {
    expand: expand
  }, children));
};

ExpandableCard.propTypes = {
  heading: _propTypes.default.string.isRequired,
  children: _propTypes.default.oneOfType([_propTypes.default.arrayOf(_propTypes.default.node), _propTypes.default.node])
};
var _default = ExpandableCard;
exports.default = _default;