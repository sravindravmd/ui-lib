"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledTabItem = exports.TabNavigation = exports.TabHeading = exports.StyledTabContainer = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _shared = require("../../shared");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const VerticalTabNavigationCss = (0, _styledComponents.css)`
  flex-direction: column;
  align-self: flex-start;
`;
const HorizonalTabNavigationCss = (0, _styledComponents.css)`
  flex-direction: row;
`;
const VerticalTabItemCss = (0, _styledComponents.css)`
  font-size: ${_shared.theme.typography.body.fontSize};
  line-height: ${_shared.theme.typography.body.lineHeight};
  display: flex;
  align-items: center;
  width: 125px;
  margin-bottom: 30px;
  span {
    border-bottom: 2px solid transparent;
  }
`;
const HorizontaltabItemCss = (0, _styledComponents.css)`
  margin-right: 15px;
  font-size: 1rem;
  line-height: ${_shared.theme.typography.caption.lineHeight};
  letter-spacing: 0.02em;
  display: flex;
  align-self: flex-end;
  border-bottom: 2px solid transparent;
`;
const VerticalActiveTabCss = (0, _styledComponents.css)`
  color: ${_shared.theme.palette.brand.primary.charcoal};
  span {
    border-bottom: 2px solid #0d62ff;
  }
`;
const HorizontalActiveTabCss = (0, _styledComponents.css)`
  color: ${_shared.theme.palette.brand.primary.charcoal};
  border-bottom: 2px solid #0d62ff;
`;
const tabNavigationMap = new Map();
tabNavigationMap.set('horizontal', HorizonalTabNavigationCss);
tabNavigationMap.set('vertical', VerticalTabNavigationCss);
const tabItemMap = new Map();
tabItemMap.set('horizontal', HorizontaltabItemCss);
tabItemMap.set('vertical', VerticalTabItemCss);
const activeTabMap = new Map();
activeTabMap.set('horizontal', HorizontalActiveTabCss);
activeTabMap.set('vertical', VerticalActiveTabCss);
const StyledTabContainer = _styledComponents.default.div`
  font-family: 'Gilroy-Medium';
  display: flex;
  flex-direction: ${({
  variant
}) => variant === 'vertical' ? 'row' : 'column'};
`;
exports.StyledTabContainer = StyledTabContainer;
const TabHeading = _styledComponents.default.div`
  margin-bottom: 24px;
  font-size: ${_shared.theme.typography.subtitle2.fontSize};
  line-height: 1.8125rem;
  color: ${_shared.theme.palette.brand.primary.charcoal};
`;
exports.TabHeading = TabHeading;
const TabNavigation = _styledComponents.default.div`
  display: flex;
  ${({
  variant
}) => tabNavigationMap.get(`${variant}`)}
`;
exports.TabNavigation = TabNavigation;
const StyledTabItem = _styledComponents.default.div`
  color: ${_shared.theme.palette.ui.neutral.grey2};
  ${({
  variant
}) => tabItemMap.get(`${variant}`)}
  ${({
  active,
  variant
}) => active && activeTabMap.get(`${variant}`)}
  ${({
  disabled
}) => disabled && `color:${_shared.theme.palette.brand.primary.charcoal};
     opacity:0.4;
     pointer-events:none;
  `}
  white-space: pre-wrap;
  text-align: left;
  cursor: pointer;
  :hover {
    color: ${_shared.theme.palette.ui.neutral.grey1};
  }
`;
exports.StyledTabItem = StyledTabItem;