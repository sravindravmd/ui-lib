"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FlyoutContent = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _shared = require("../../shared");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const StyledFlyoutContent = _styledComponents.default.div`
  box-sizing: border-box;
  font-family: 'Gilroy-Regular';
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