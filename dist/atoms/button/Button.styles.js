"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledButton = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _index = require("../../shared/index");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const PrimaryNoThemeCss = (0, _styledComponents.css)`
  &:hover {
    opacity: 0.8;
  }
  &:focus {
    border: 2px solid ${_index.theme.palette.ui.cta.yellow};
  }
  &:active {
    background: ${_index.theme.palette.ui.neutral.grey1};
    border: 2px solid ${_index.theme.palette.ui.neutral.grey1};
    opacity: 1;
  }
`;
const SecondaryNoThemeCss = (0, _styledComponents.css)`
  &:hover {
    opacity: 0.8;
    background: ${_index.theme.palette.brand.primary.gray};
    border: 2px solid ${_index.theme.palette.brand.primary.gray};
    color: ${_index.theme.palette.brand.primary.white};
  }
  &:focus {
    border: 2px solid ${_index.theme.palette.ui.cta.yellow};
  }
  &:active {
    background: ${_index.theme.palette.ui.neutral.grey1};
    border: 2px solid ${_index.theme.palette.ui.neutral.grey1};
  }
  ${({
  disabled
}) => disabled && `background: ${_index.theme.palette.brand.primary.charcoal};
     color: ${_index.theme.palette.brand.primary.white};
  `}
`;
const PrimaryDarkThemeCss = (0, _styledComponents.css)`
  &:hover {
    background: ${_index.theme.palette.brand.primary.white};
    color: ${_index.theme.palette.brand.primary.charcoal};
    border: 2px solid ${_index.theme.palette.brand.primary.white};
  }
  &:focus {
    background: ${_index.theme.palette.brand.primary.white};
    border: 2px solid ${_index.theme.palette.ui.cta.yellow};
    color: ${_index.theme.palette.brand.primary.charcoal};
  }
  &:active {
    background: ${_index.theme.palette.ui.neutral.grey1};
    border: 2px solid ${_index.theme.palette.ui.neutral.grey1};
    color: ${_index.theme.palette.brand.primary.white};
  }
  ${({
  disabled
}) => disabled && `opacity: 0.15;
    background: ${_index.theme.palette.ui.neutral.grey1};
    border: 2px solid ${_index.theme.palette.ui.neutral.grey1};
    color: ${_index.theme.palette.brand.primary.white};
  `}
`;
const SecondaryDarkThemeCss = (0, _styledComponents.css)`
  color: ${_index.theme.palette.brand.primary.white};
  background: ${_index.theme.palette.brand.primary.charcoal};
  border: 2px solid ${_index.theme.palette.brand.primary.white};
  &:hover {
    background: ${_index.theme.palette.brand.primary.white};
    color: ${_index.theme.palette.brand.primary.charcoal};
    border: 2px solid ${_index.theme.palette.brand.primary.white};
  }
  &:focus {
    background: ${_index.theme.palette.brand.primary.white};
    border: 2px solid ${_index.theme.palette.ui.cta.yellow};
    color: ${_index.theme.palette.brand.primary.charcoal};
  }
  &:active {
    background: ${_index.theme.palette.ui.neutral.grey1};
    border: 2px solid ${_index.theme.palette.ui.neutral.grey1};
    color: ${_index.theme.palette.brand.primary.white};
  }
  ${({
  disabled
}) => disabled && `opacity: 0.2;
    background: ${_index.theme.palette.brand.primary.charcoal};
    border: 2px solid ${_index.theme.palette.ui.neutral.grey2};
    color: ${_index.theme.palette.ui.neutral.grey2};
  `}
`;
const themePrimaryMap = new Map();
themePrimaryMap.set('none', PrimaryNoThemeCss);
themePrimaryMap.set('dark', PrimaryDarkThemeCss);
const themeSecondaryMap = new Map();
themeSecondaryMap.set('none', SecondaryNoThemeCss);
themeSecondaryMap.set('dark', SecondaryDarkThemeCss);
const PrimaryCss = (0, _styledComponents.css)`
  color: ${_index.theme.palette.brand.primary.white};
  background: ${_index.theme.palette.ui.cta.blue};
  border: 2px solid ${_index.theme.palette.ui.cta.blue};
  border-radius: 60px;
  cursor: pointer;
  outline: none;
  box-shadow: none;
  display: flex;
  justify-content: center;
  align-items: center;
  ${({
  theme
}) => themePrimaryMap.get(`${theme}`)};
`;
const SecondaryCss = (0, _styledComponents.css)`
  color: ${_index.theme.palette.brand.primary.charcoal};
  background: ${_index.theme.palette.brand.primary.white};
  border: 1px solid ${_index.theme.palette.brand.primary.charcoal};
  border-radius: 60px;
  cursor: pointer;
  outline: none;
  box-shadow: none;
  display: flex;
  ${({
  theme
}) => themeSecondaryMap.get(`${theme}`)};
`;
const smallCss = (0, _styledComponents.css)`
  ${({
  isPrimary
}) => isPrimary ? `font-size: 14px;  line-height: 16px; padding: 10px 20px;` : `font-size: 14px;  line-height: 16px; padding: 10px 14px;`}
`;
const largeCss = (0, _styledComponents.css)`
  ${({
  isPrimary
}) => isPrimary ? `font-size: 18px; line-height: 22px; padding: 14px 27px; height: 50px;` : ` font-size: 18px; line-height: 22px; padding: 0px 20px; height: 36px;`}
`;
const sizeMap = new Map();
sizeMap.set('small', smallCss);
sizeMap.set('large', largeCss);
const StyledButton = _styledComponents.default.button`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  ${({
  size
}) => sizeMap.get(`${size}`)};
  font-family: Gilroy-Medium;
  text-align: center;
  ${({
  isPrimary
}) => isPrimary ? PrimaryCss : SecondaryCss}
  ${({
  disabled
}) => disabled && `opacity: 0.2;
   pointer-events: none;
  `}
`;
exports.StyledButton = StyledButton;