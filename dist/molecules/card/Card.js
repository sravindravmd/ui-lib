"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CardItem = exports.Card = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _expandable = _interopRequireDefault(require("./expandable"));

var _carousel = _interopRequireDefault(require("./carousel"));

var _fullaccess = _interopRequireDefault(require("./fullaccess"));

var _rootcategory = _interopRequireDefault(require("./rootcategory"));

var _quickaccess = _interopRequireDefault(require("./quickaccess"));

var _hierarchytree = _interopRequireDefault(require("./hierarchytree"));

var _carditem = _interopRequireDefault(require("./carditem"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const CardTypes = {
  expandable: _expandable.default,
  carousel: _carousel.default,
  general: _fullaccess.default,
  withActionItem: _fullaccess.default,
  rootCategory: _rootcategory.default,
  quickAccess: _quickaccess.default,
  hierarchytree: _hierarchytree.default
};

const Card = ({
  variant,
  heading,
  children,
  ...props
}) => {
  const Component = CardTypes[variant] && CardTypes[variant];

  if (!Component) {
    return null;
  }

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(Component, _extends({}, props, {
    variant: variant,
    heading: heading
  }), children));
};

exports.Card = Card;
const CardItem = _carditem.default;
exports.CardItem = CardItem;
Card.propTypes = {
  variant: _propTypes.default.oneOf(['expandable', 'carousel', 'general', 'withActionItem', 'rootCategory', 'quickAccess', 'hierarchytree']),
  heading: _propTypes.default.string,
  children: _propTypes.default.oneOfType([_propTypes.default.arrayOf(_propTypes.default.node), _propTypes.default.node])
};