"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styles = require("./styles");

var _popover = require("../../../atoms/popover");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const UserNav = ({
  userName
}) => {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "user-actions"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "avatar"
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "user-name"
  }, userName));
};

UserNav.propTypes = {
  userName: _propTypes.default.string
};

const UserAction = () => {
  return /*#__PURE__*/_react.default.createElement(_styles.StyledUserAction, null, /*#__PURE__*/_react.default.createElement(_popover.Popover, {
    showArrow: true,
    className: "profile",
    placement: "bottom",
    target: /*#__PURE__*/_react.default.createElement(UserNav, {
      userName: "Tiffany Doe"
    })
  }, /*#__PURE__*/_react.default.createElement(_styles.StyledPopoverContent, null, /*#__PURE__*/_react.default.createElement("div", {
    className: "header"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "avatar"
  }, /*#__PURE__*/_react.default.createElement("span", null)), /*#__PURE__*/_react.default.createElement("div", {
    className: "title"
  }, /*#__PURE__*/_react.default.createElement("strong", null, "Tiffany Doe"), /*#__PURE__*/_react.default.createElement("p", null, "tiffany.doe@jcrew.com"))), /*#__PURE__*/_react.default.createElement("ul", null, /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("a", {
    href: ""
  }, "Edit Profile")), /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("a", {
    href: ""
  }, "Preferences")), /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("a", {
    href: ""
  }, "Logout"))))));
};

UserAction.propTypes = {};
var _default = UserAction;
exports.default = _default;