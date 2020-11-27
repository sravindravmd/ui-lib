"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PopoverContent = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _shared = require("../../shared");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const StyledPopoverContent = _styledComponents.default.div`
  padding: 36px 36px 15px;
  box-sizing: border-box;
  font-family: 'Gilroy-Regular';

  .header {
    display: flex;
    padding: 0px 0px 30px;

    .avtar {
      width: 40px;

      span {
        display: block;
        background-color: ${_shared.theme.palette.ui.neutral.grey2};
        border-radius: 50%;
        width: 40px;
        height: 40px;
      }
    }
    .title {
      padding-left: 20px;

      strong {
        font-size: 18px;
        line-height: 150%;
        color: ${_shared.theme.palette.brand.primary.charcoal};
        font-family: 'Gilroy-Medium';
      }
      p {
        margin: 0px;
        color: ${_shared.theme.palette.brand.primary.gray};
        letter-spacing: 0.02em;
        font-size: 13px;
      }
    }
  }

  ul {
    list-style: none;
    padding: 0px;
    margin: 0px;

    li {
      a {
        font-size: 16px;
        line-height: 18px;
        letter-spacing: 0.02em;
        text-decoration: none;
        color: ${_shared.theme.palette.brand.primary.charcoal};
        padding: 10px 0px;
        display: block;
      }
    }
  }
`;

const PopoverContent = () => {
  return /*#__PURE__*/_react.default.createElement(StyledPopoverContent, null, /*#__PURE__*/_react.default.createElement("div", {
    className: "header"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "avtar"
  }, /*#__PURE__*/_react.default.createElement("span", null)), /*#__PURE__*/_react.default.createElement("div", {
    className: "title"
  }, /*#__PURE__*/_react.default.createElement("strong", null, "Tiffany Doe"), /*#__PURE__*/_react.default.createElement("p", null, "tiffany.doe@jcrew.com"))), /*#__PURE__*/_react.default.createElement("ul", null, /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("a", {
    href: ""
  }, "Edit Profile")), /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("a", {
    href: ""
  }, "Preferences")), /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("a", {
    href: ""
  }, "Logout"))));
};

exports.PopoverContent = PopoverContent;