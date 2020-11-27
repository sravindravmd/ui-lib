"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Tooltip = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _uuid = require("uuid");

var _Tooltip = require("./Tooltip.styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const styles = {
  position: 'relative',
  cursor: 'default'
};

const useTooltip = () => {
  const [show, setShow] = (0, _react.useState)(false);
  const uid = (0, _react.useRef)((0, _uuid.v4)());
  (0, _react.useEffect)(() => {
    const parent = document.getElementById(uid.current).parentElement;

    if (parent) {
      parent.style.position = styles.position;
      parent.style.cursor = styles.cursor;

      const handleMouseEvent = e => {
        return e.type === 'mouseenter' ? setShow(true) : setShow(false);
      };

      parent.addEventListener('mouseenter', handleMouseEvent);
      parent.addEventListener('mouseleave', handleMouseEvent);
      return () => {
        parent.removeEventListener('mouseenter', handleMouseEvent);
        parent.removeEventListener('mouseleave', handleMouseEvent);
      };
    }
  }, []);
  return {
    uid,
    show
  };
};

const Tooltip = ({
  size,
  position,
  offsetX,
  offsetY,
  title,
  text,
  ...props
}) => {
  const [coordinates, setCoordinates] = (0, _react.useState)({
    x: 0,
    y: 0
  });
  const {
    uid,
    show
  } = useTooltip();
  const StyledTooltipType = _Tooltip.Tooltip_types[position] ? _Tooltip.Tooltip_types[position] : _Tooltip.Tooltip_types['bottom'];
  (0, _react.useEffect)(() => {
    const parent = document.getElementById(uid.current).parentElement;

    const handleMousemove = e => {
      setCoordinates({
        x: e.clientX - parent.getBoundingClientRect().x + offsetX,
        y: e.clientY - parent.getBoundingClientRect().y + offsetY
      });
    };

    if (parent && size === 'small') {
      parent.addEventListener('mousemove', handleMousemove);
      return () => parent.removeEventListener('mousemove', handleMousemove);
    }
  }, [uid, show, offsetX, offsetY]);
  return size === 'small' ? /*#__PURE__*/_react.default.createElement(_Tooltip.StyledTooltip, _extends({}, props, {
    id: uid.current,
    show: show
  }, coordinates), text && /*#__PURE__*/_react.default.createElement(_Tooltip.Text, null, text)) : /*#__PURE__*/_react.default.createElement(StyledTooltipType, _extends({}, props, {
    id: uid.current,
    show: show
  }), title && /*#__PURE__*/_react.default.createElement(_Tooltip.Title, null, title), text && /*#__PURE__*/_react.default.createElement(_Tooltip.Text, null, text));
};

exports.Tooltip = Tooltip;
Tooltip.defaultProps = {
  position: 'bottom',
  size: 'large',
  offsetX: -5,
  offsetY: 17
};
Tooltip.propTypes = {
  title: _propTypes.default.string,
  text: _propTypes.default.string.isRequired,
  position: _propTypes.default.oneOf(['right', 'bottom']),
  size: _propTypes.default.oneOf(['small', 'large']),
  offsetX: _propTypes.default.number,
  offsetY: _propTypes.default.number
};