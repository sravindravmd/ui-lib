"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MoreBtnWrapper = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _molecules = require("../../molecules");

var _mock = require("../../molecules/flyout/mock");

var _dots = _interopRequireDefault(require("../../assets/images/dots"));

var _clickOutside = _interopRequireDefault(require("../../hooks/click-outside"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const MoreBtnWrapper = ({
  id
}) => {
  const [showFlyout, setShowFlyout] = (0, _react.useState)(false);
  const clickRef = (0, _react.useRef)();
  (0, _clickOutside.default)(clickRef, () => {
    setShowFlyout(false);
  }, showFlyout);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("span", {
    className: "dotes",
    ref: clickRef,
    id: 'flyout' + id,
    onClick: () => {
      setShowFlyout(!showFlyout);
    }
  }, /*#__PURE__*/_react.default.createElement(_dots.default, null)), /*#__PURE__*/_react.default.createElement("span", {
    style: {
      position: 'absolute',
      top: '50px',
      zIndex: 1,
      right: 0
    }
  }, /*#__PURE__*/_react.default.createElement(_molecules.Flyout, {
    show: showFlyout,
    id: 'flyout' + id,
    handleToggle: setShowFlyout
  }, /*#__PURE__*/_react.default.createElement(_mock.FlyoutContent, null))));
};

exports.MoreBtnWrapper = MoreBtnWrapper;
MoreBtnWrapper.propTypes = {
  id: _propTypes.default.string
};