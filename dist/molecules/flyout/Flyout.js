"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Flyout = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Flyout = require("./Flyout.styles");

var _clickOutside = _interopRequireDefault(require("../../hooks/click-outside"));

var _classnames = _interopRequireDefault(require("classnames"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const Flyout = ({
  children,
  className,
  id,
  show,
  handleToggle
}) => {
  const [styles, setStyles] = (0, _react.useState)({});
  const ref = (0, _react.useRef)(null);
  (0, _clickOutside.default)(ref, () => {
    handleToggle();
  }, show);

  const handleClick = event => {
    const params = event.target.getBoundingClientRect();
    setStyles({
      position: 'fixed',
      top: params.y + params.height,
      left: params.x
    });
  };

  (0, _react.useEffect)(() => {
    const element = document.getElementById(id);

    if (element) {
      element.addEventListener('click', handleClick);
      return () => {
        element.removeEventListener('click', handleClick);
      };
    }
  }, [id]);
  return /*#__PURE__*/_react.default.createElement(_Flyout.StyledFlyout, {
    className: (0, _classnames.default)({
      active: show,
      [className]: className
    }),
    ref: ref
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "content",
    style: styles
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "content-inner"
  }, children && children)));
};

exports.Flyout = Flyout;
Flyout.propTypes = {
  children: _propTypes.default.node,
  className: _propTypes.default.string,
  id: _propTypes.default.string,
  show: _propTypes.default.bool,
  handleToggle: _propTypes.default.func
};