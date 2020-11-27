"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Logo = props => {
  const {
    logo,
    title
  } = props;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "logo"
  }, logo ? /*#__PURE__*/_react.default.createElement("img", {
    src: logo,
    alt: title
  }) : title ? title : 'Copilot');
};

Logo.propTypes = {
  logo: _propTypes.default.string,
  title: _propTypes.default.string
};
var _default = Logo;
exports.default = _default;