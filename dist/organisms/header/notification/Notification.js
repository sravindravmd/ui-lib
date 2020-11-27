"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styles = require("./styles");

var _popover = require("../../../atoms/popover");

var _Tab = require("../../../atoms/tab/Tab");

var _iconNotification = _interopRequireDefault(require("../../../assets/images/icon-notification"));

var _ItemGroup = _interopRequireDefault(require("./ItemGroup"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const NotificationNav = ({
  status
}) => {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: `icon-notify ${status ? 'red-dot' : ''}`
  }, /*#__PURE__*/_react.default.createElement(_iconNotification.default, null));
};

NotificationNav.propTypes = {
  status: _propTypes.default.bool
};

const Notification = props => {
  return /*#__PURE__*/_react.default.createElement(_styles.StyledNotification, null, /*#__PURE__*/_react.default.createElement(_popover.Popover, {
    showArrow: true,
    className: "notification",
    placement: "bottom",
    target: /*#__PURE__*/_react.default.createElement(NotificationNav, {
      status: true
    })
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "tabs-notify"
  }, /*#__PURE__*/_react.default.createElement(_Tab.Tab, props, /*#__PURE__*/_react.default.createElement(_Tab.TabItem, {
    title: "All"
  }, /*#__PURE__*/_react.default.createElement(_ItemGroup.default, {
    title: "Today"
  }), /*#__PURE__*/_react.default.createElement(_ItemGroup.default, {
    title: "Yesterday"
  })), /*#__PURE__*/_react.default.createElement(_Tab.TabItem, {
    title: "Mentions"
  }, /*#__PURE__*/_react.default.createElement(_ItemGroup.default, {
    title: "Today"
  })), /*#__PURE__*/_react.default.createElement(_Tab.TabItem, {
    title: "Fabric Updates"
  }, /*#__PURE__*/_react.default.createElement(_ItemGroup.default, {
    title: "Today"
  }), /*#__PURE__*/_react.default.createElement(_ItemGroup.default, {
    title: "Yesterday"
  }))))));
};

Notification.propTypes = {};
var _default = Notification;
exports.default = _default;