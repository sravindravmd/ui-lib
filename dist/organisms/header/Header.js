"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Header = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Header = require("./Header.styles");

var _Logo = _interopRequireDefault(require("./Logo"));

var _ProductLinks = _interopRequireDefault(require("./ProductLinks"));

var _notification = _interopRequireDefault(require("./notification"));

var _profile = _interopRequireDefault(require("./profile"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Header = ({
  logo,
  company,
  productLinks = []
}) => {
  return /*#__PURE__*/_react.default.createElement(_Header.StyledHeader, null, /*#__PURE__*/_react.default.createElement("div", {
    className: "inner"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "col left"
  }, /*#__PURE__*/_react.default.createElement(_Logo.default, {
    logo: logo,
    title: company
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "col middle"
  }, /*#__PURE__*/_react.default.createElement(_ProductLinks.default, {
    productLinks: productLinks
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "col actions"
  }, /*#__PURE__*/_react.default.createElement(_notification.default, null), /*#__PURE__*/_react.default.createElement(_profile.default, null))));
};

exports.Header = Header;
Header.propTypes = {
  logo: _propTypes.default.string,
  productLinks: _propTypes.default.array,
  company: _propTypes.default.string
};