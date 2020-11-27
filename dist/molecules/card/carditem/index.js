"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.CategoryItem = exports.GeneralItem = exports.DetailItem = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _images = require("../../../assets/images");

var _style = require("./style");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const DetailItem = ({
  title,
  property,
  ...props
}) => {
  return /*#__PURE__*/_react.default.createElement(_style.StyledItemDetail, props, /*#__PURE__*/_react.default.createElement(_style.StyledItemDetailTitle, null, title), /*#__PURE__*/_react.default.createElement(_style.StyledItemProperty, null, property, /*#__PURE__*/_react.default.createElement(_style.StyledPen, null, /*#__PURE__*/_react.default.createElement(_images.EditPen, null))));
};

exports.DetailItem = DetailItem;
DetailItem.propTypes = {
  title: _propTypes.default.string.isRequired,
  property: _propTypes.default.string.isRequired
};

const GeneralItem = ({
  title,
  subtitle,
  imgUrl,
  imgAltText = 'item-img',
  isActionItem,
  onClick,
  ...props
}) => {
  return /*#__PURE__*/_react.default.createElement(_style.StyledItemGeneral, _extends({}, props, {
    isActionItem: isActionItem
  }), /*#__PURE__*/_react.default.createElement(_style.StyledThumbnail, {
    isActionItem: isActionItem
  }, imgUrl && /*#__PURE__*/_react.default.createElement("img", {
    src: imgUrl,
    alt: imgAltText
  })), /*#__PURE__*/_react.default.createElement(_style.StyledContent, {
    isActionItem: isActionItem
  }, /*#__PURE__*/_react.default.createElement(_style.StyledTitle, null, title), /*#__PURE__*/_react.default.createElement(_style.StyledSubtitle, null, subtitle)), isActionItem && /*#__PURE__*/_react.default.createElement(_style.StyledArrow, {
    onClick: onClick
  }, /*#__PURE__*/_react.default.createElement(_images.RightArrow, null)));
};

exports.GeneralItem = GeneralItem;
GeneralItem.defaultProps = {
  isActionItem: false
};
GeneralItem.propTypes = {
  title: _propTypes.default.string.isRequired,
  subtitle: _propTypes.default.string.isRequired,
  imgUrl: _propTypes.default.string.isRequired,
  imgAltText: _propTypes.default.string.isRequired,
  isActionItem: _propTypes.default.bool,
  onClick: _propTypes.default.func
};

const CategoryItem = ({
  text,
  value,
  ...props
}) => {
  return /*#__PURE__*/_react.default.createElement(_style.StyledCategoryItem, props, /*#__PURE__*/_react.default.createElement(_style.StyledText, null, text), /*#__PURE__*/_react.default.createElement(_style.StyledValue, null, value));
};

exports.CategoryItem = CategoryItem;
CategoryItem.propTypes = {
  text: _propTypes.default.string.isRequired,
  value: _propTypes.default.string.isRequired
};
const CardItemTypes = {
  detailItem: DetailItem,
  generalItem: GeneralItem,
  categoryItem: CategoryItem
};

const CardItem = ({
  variant,
  ...props
}) => {
  const Component = CardItemTypes[variant] && CardItemTypes[variant];

  if (!Component) {
    return null;
  }

  return /*#__PURE__*/_react.default.createElement(Component, props);
};

CardItem.propTypes = {
  variant: _propTypes.default.oneOf(['detailItem', 'generalItem', 'categoryItem']).isRequired
};
var _default = CardItem;
exports.default = _default;