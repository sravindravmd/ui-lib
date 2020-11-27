"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.FlyoutContent = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _ = require(".");

var _shared = require("../../shared");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _atoms = require("../../atoms");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const StyledFlyoutContent = _styledComponents.default.div`
  box-sizing: border-box;
  font-family: 'Gilroy-Medium';
  width: 200px;

  ul {
    list-style: none;
    padding: 0px;
    margin: 0px;

    li {
      a {
        font-size: 13px;
        line-height: 16px;
        letter-spacing: 0.02em;
        text-decoration: none;
        color: ${_shared.theme.palette.brand.primary.charcoal};
        padding: 10px 23px;
        display: block;
        box-sizing: border-box;
        transition: all 0.2s ease-in-out;

        &:hover {
          background-color: #f4f4f4;
        }
      }
    }
  }
`;

const FlyoutContent = () => {
  return /*#__PURE__*/_react.default.createElement(StyledFlyoutContent, null, /*#__PURE__*/_react.default.createElement("ul", null, /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("a", {
    href: ""
  }, "Item")), /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("a", {
    href: ""
  }, "Item")), /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("a", {
    href: ""
  }, "Item")), /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("a", {
    href: ""
  }, "Item"))));
};

exports.FlyoutContent = FlyoutContent;

const Example = () => {
  const [toggle, setToggle] = (0, _react.useState)(false);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_atoms.ButtonWithIcon, {
    disabled: false,
    emphasis: "high",
    icon: "Add",
    iconPosition: "left",
    isPrimary: false,
    isRoundIcon: false,
    onClick: () => setToggle(!toggle),
    text: "Add New",
    theme: "light",
    id: "target1"
  }), /*#__PURE__*/_react.default.createElement(_.Flyout, {
    show: toggle,
    id: "target1",
    className: "target1",
    handleToggle: setToggle
  }, /*#__PURE__*/_react.default.createElement(FlyoutContent, null)));
};

Example.propTypes = {
  show: _propTypes.default.bool
};
var _default = Example;
exports.default = _default;