"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Th = exports.Td = exports.Tr = exports.Tfoot = exports.Tbody = exports.Thead = exports.FabricTable = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _styles = require("./styles");

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const FabricTable = ({
  className,
  ...props
}) => /*#__PURE__*/_react.default.createElement(_styles.StyledFabricTable, _extends({}, props, {
  className: (0, _classnames.default)('fabric-table', className)
}));

exports.FabricTable = FabricTable;
FabricTable.propTypes = {
  className: _propTypes.default.string
};

const Thead = props => /*#__PURE__*/_react.default.createElement("thead", props);

exports.Thead = Thead;

const Tbody = props => /*#__PURE__*/_react.default.createElement("tbody", props);

exports.Tbody = Tbody;

const Tfoot = props => /*#__PURE__*/_react.default.createElement("tfoot", props);

exports.Tfoot = Tfoot;

const Tr = props => /*#__PURE__*/_react.default.createElement("tr", props);

exports.Tr = Tr;

const Td = props => /*#__PURE__*/_react.default.createElement("td", props);

exports.Td = Td;

const Th = ({
  scope = 'col',
  ...props
}) => /*#__PURE__*/_react.default.createElement("th", _extends({}, props, {
  scope
}));

exports.Th = Th;