"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Shimmer = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Shimmer = require("./Shimmer.styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Shimmer = ({
  count,
  className = '',
  perRow
}) => {
  return /*#__PURE__*/_react.default.createElement(_Shimmer.StyledShimmerWrapper, {
    className: className,
    perRow: perRow
  }, Array.from(Array(count), (e, i) => {
    return /*#__PURE__*/_react.default.createElement("div", {
      className: "shimmer-item",
      key: i
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "sh-first shine"
    }), /*#__PURE__*/_react.default.createElement("div", {
      className: "sh-second shine"
    }), /*#__PURE__*/_react.default.createElement("div", {
      className: "sh-third shine"
    }), /*#__PURE__*/_react.default.createElement("div", {
      className: "sh-fourth"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "sh-f-1"
    }, /*#__PURE__*/_react.default.createElement("span", {
      className: " shine"
    })), /*#__PURE__*/_react.default.createElement("div", {
      className: "sh-f-2"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "sh-fc-1  shine"
    }), /*#__PURE__*/_react.default.createElement("div", {
      className: "sh-fc-2  shine"
    }))), /*#__PURE__*/_react.default.createElement("div", {
      className: "sh-fourth"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "sh-f-1"
    }, /*#__PURE__*/_react.default.createElement("span", {
      className: " shine"
    })), /*#__PURE__*/_react.default.createElement("div", {
      className: "sh-f-2"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "sh-fc-1  shine"
    }), /*#__PURE__*/_react.default.createElement("div", {
      className: "sh-fc-2  shine"
    }))));
  }));
};

exports.Shimmer = Shimmer;
Shimmer.propTypes = {
  count: _propTypes.default.number,
  className: _propTypes.default.string,
  perRow: _propTypes.default.number
};