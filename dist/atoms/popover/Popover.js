"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Popover = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Popover = require("./Popover.styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const Popover = ({
  placement = 'bottom',
  children,
  className,
  showArrow = false,
  target,
  ...props
}) => {
  const [isVisible, setVisible] = (0, _react.useState)(false);
  const poRef = (0, _react.useRef)();
  (0, _react.useEffect)(() => {
    if (poRef.current) {
      const elem = poRef.current;
      elem.addEventListener('mouseenter', handleHover);
      elem.addEventListener('mouseleave', handleOut);
      return () => {
        elem.removeEventListener('mouseenter', handleHover);
        elem.removeEventListener('mouseleave', handleOut);
      };
    }
  }, [poRef]);

  const handleHover = () => {
    setVisible(true);
  };

  const handleOut = () => {
    setVisible(false);
  };

  return /*#__PURE__*/_react.default.createElement(_Popover.StyledPopover, _extends({
    className: `${isVisible ? 'active' : ''} ${className ? className : ''} ${placement ? placement : ''}`
  }, props, {
    ref: poRef
  }), target, /*#__PURE__*/_react.default.createElement("div", {
    className: "content"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "content-inner"
  }, showArrow && /*#__PURE__*/_react.default.createElement("span", {
    className: "arrows"
  }), children && children)));
};

exports.Popover = Popover;
Popover.propTypes = {
  show: _propTypes.default.bool,
  children: _propTypes.default.node,
  className: _propTypes.default.string,
  showArrow: _propTypes.default.bool,
  placement: _propTypes.default.string,
  style: _propTypes.default.object,
  onClick: _propTypes.default.func,
  target: _propTypes.default.any
};