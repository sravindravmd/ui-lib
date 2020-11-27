"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _style = require("./style");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const FullAccessCard = ({
  variant,
  heading,
  children,
  ...props
}) => {
  return /*#__PURE__*/_react.default.createElement(_style.StyledCard, _extends({}, props, {
    variant: variant
  }), /*#__PURE__*/_react.default.createElement(_style.StyledCardHeading, null, heading), children);
};

FullAccessCard.propTypes = {
  variant: _propTypes.default.oneOf(['general', 'withActionItem']).isRequired,
  heading: _propTypes.default.string,
  children: _propTypes.default.oneOfType([_propTypes.default.arrayOf(_propTypes.default.node), _propTypes.default.node])
};
var _default = FullAccessCard;
exports.default = _default;