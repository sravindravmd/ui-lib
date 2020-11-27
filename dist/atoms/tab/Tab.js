"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.TabItem = exports.Tab = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Tab = require("./Tab.styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const Tab = /*#__PURE__*/(0, _react.memo)(({
  variant,
  heading,
  children,
  navStyle,
  navClassName,
  ...props
}) => {
  const [tabs, setTabs] = (0, _react.useState)([]);
  const [activeIndex, setActiveIndex] = (0, _react.useState)(0);

  const elements = _react.default.Children.toArray(children).filter(ele => typeof ele.type === 'function');

  const Content = /*#__PURE__*/_react.default.cloneElement(elements[activeIndex], {
    title: ''
  });

  const handleTabChange = index => {
    setActiveIndex(index);
  };

  (0, _react.useEffect)(() => {
    const tabs = elements.map((ele, i) => ({
      id: i,
      title: ele.props.title,
      disabled: ele.props.disabled
    }));
    setTabs(tabs);
  }, []);
  return /*#__PURE__*/_react.default.createElement(_Tab.StyledTabContainer, _extends({
    variant: variant
  }, props), heading && variant === 'horizontal' && /*#__PURE__*/_react.default.createElement(_Tab.TabHeading, null, heading), /*#__PURE__*/_react.default.createElement(_Tab.TabNavigation, {
    variant: variant
  }, tabs.length && tabs.map((tab, i) => {
    return /*#__PURE__*/_react.default.createElement(_Tab.StyledTabItem, {
      key: tab.title,
      onClick: () => handleTabChange(i),
      active: activeIndex === i ? true : false,
      variant: variant,
      disabled: tab.disabled,
      style: navStyle,
      className: navClassName
    }, variant === 'vertical' ? /*#__PURE__*/_react.default.createElement("span", null, tab.title) : tab.title);
  })), Content);
});
exports.Tab = Tab;

const TabItem = ({
  children,
  ...props
}) => {
  return /*#__PURE__*/_react.default.createElement("div", props, children);
};

exports.TabItem = TabItem;
TabItem.propTypes = {
  children: _propTypes.default.oneOfType([_propTypes.default.arrayOf(_propTypes.default.node), _propTypes.default.node])
};
Tab.propTypes = {
  variant: _propTypes.default.oneOf(['horizontal', 'vertical']),
  children: _propTypes.default.oneOfType([_propTypes.default.arrayOf(_propTypes.default.node), _propTypes.default.node]),
  heading: _propTypes.default.string,
  disabled: _propTypes.default.bool,
  navStyle: _propTypes.default.object,
  navClassName: _propTypes.default.string
};
Tab.defaultProps = {
  variant: 'horizontal',
  disabled: false
};
var _default = Tab;
exports.default = _default;