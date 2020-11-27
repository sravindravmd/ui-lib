"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledIconButton = void 0;

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
    opacity: 1;
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
const highEmphasisCss = (0, _styledComponents.css)`
  color: ${_index.theme.palette.brand.primary.charcoal};
  background: transparent;
  border: ${({
  isRoundIcon
}) => isRoundIcon ? `1px solid ${_index.theme.palette.brand.primary.charcoal}` : `2px solid transparent`};
  &:hover {
    background: ${_index.theme.palette.brand.primary.gray};
    color: ${_index.theme.palette.brand.primary.white};
    border: 2px solid ${_index.theme.palette.brand.primary.gray};
    .icon {
      fill: ${_index.theme.palette.brand.primary.white};
    }
  }
  &:focus {
    background: ${_index.theme.palette.brand.primary.white};
    border: 2px solid ${_index.theme.palette.ui.cta.yellow};
    color: ${_index.theme.palette.brand.primary.charcoal};
    .icon {
      fill: ${_index.theme.palette.brand.primary.charcoal};
    }
  }
  &:active {
    background: ${_index.theme.palette.ui.neutral.grey1};
    border: 2px solid ${_index.theme.palette.ui.neutral.grey1};
    color: ${_index.theme.palette.brand.primary.white};
    .icon {
      fill: ${_index.theme.palette.brand.primary.white};
    }
  }
  ${({
  disabled
}) => disabled && `opacity: 0.2;
    background: transparent;
    border: 2px solid transparent;
    color: ${_index.theme.palette.ui.neutral.grey2};
    .icon {
      fill: ${_index.theme.palette.ui.neutral.grey2};
    }
  `}
`;
const lowEmphasisCss = (0, _styledComponents.css)`
  color: ${_index.theme.palette.brand.primary.charcoal};
  background: ${_index.theme.palette.brand.primary.white};
  border: 2px solid ${_index.theme.palette.brand.primary.white};
  box-shadow: 0px 5px 20px rgba(115, 127, 143, 0.1);
  &:hover {
    background: ${_index.theme.palette.brand.primary.gray};
    color: ${_index.theme.palette.brand.primary.white};
    border: 2px solid ${_index.theme.palette.brand.primary.gray};
    .icon {
      fill: ${_index.theme.palette.brand.primary.white};
    }
  }
  &:focus {
    background: ${_index.theme.palette.brand.primary.white};
    border: 2px solid ${_index.theme.palette.ui.cta.yellow};
    color: ${_index.theme.palette.brand.primary.charcoal};
    .icon {
      fill: ${_index.theme.palette.brand.primary.charcoal};
    }
  }
  &:active {
    background: ${_index.theme.palette.ui.neutral.grey1};
    border: 2px solid ${_index.theme.palette.ui.neutral.grey1};
    color: ${_index.theme.palette.brand.primary.white};
    .icon {
      fill: ${_index.theme.palette.brand.primary.white};
    }
  }
  ${({
  disabled
}) => disabled && `opacity: 0.2;
    background: ${_index.theme.palette.brand.primary.white};
    border: 2px solid ${_index.theme.palette.brand.primary.white};
    color: ${_index.theme.palette.ui.neutral.grey2};
    .icon {
      fill: ${_index.theme.palette.ui.neutral.grey2};
    }
  `}
`;
const emphasisMap = new Map();
emphasisMap.set('high', highEmphasisCss);
emphasisMap.set('low', lowEmphasisCss);
const SecondaryLightThemeCss = (0, _styledComponents.css)`
  color: ${_index.theme.palette.brand.primary.charcoal};
  background: ${_index.theme.palette.brand.primary.white};
  border: 1px solid
    ${({
  isRoundIcon
}) => isRoundIcon ? `${_index.theme.palette.brand.primary.charcoal}` : `${_index.theme.palette.brand.primary.white}`};
  &:hover {
    background: ${_index.theme.palette.brand.primary.gray};
    color: ${_index.theme.palette.brand.primary.white};
    border: 2px solid ${_index.theme.palette.brand.primary.gray};
    .icon {
      fill: ${_index.theme.palette.brand.primary.white};
    }
  }
  &:focus {
    background: ${_index.theme.palette.brand.primary.white};
    border: 2px solid ${_index.theme.palette.ui.cta.yellow};
    color: ${_index.theme.palette.brand.primary.charcoal};
    .icon {
      fill: ${_index.theme.palette.brand.primary.charcoal};
    }
  }
  &:active {
    background: ${_index.theme.palette.ui.neutral.grey1};
    border: 2px solid ${_index.theme.palette.ui.neutral.grey1};
    color: ${_index.theme.palette.brand.primary.white};
    .icon {
      fill: ${_index.theme.palette.brand.primary.white};
    }
  }
  ${({
  disabled
}) => disabled && `opacity: 0.2;
    background: ${_index.theme.palette.brand.primary.white};
    border: 2px solid ${_index.theme.palette.brand.primary.white};
    color: ${_index.theme.palette.ui.neutral.grey2};
    .icon {
      fill: ${_index.theme.palette.ui.neutral.grey2};
    }
  `}
`;
const themePrimaryMap = new Map();
themePrimaryMap.set('none', PrimaryNoThemeCss);
themePrimaryMap.set('dark', PrimaryDarkThemeCss);
const themeSecondaryMap = new Map();
themeSecondaryMap.set('none', SecondaryNoThemeCss);
themeSecondaryMap.set('dark', SecondaryDarkThemeCss);
themeSecondaryMap.set('light', SecondaryLightThemeCss);
const PrimaryCss = (0, _styledComponents.css)`
  color: ${_index.theme.palette.brand.primary.white};
  background: ${_index.theme.palette.ui.cta.blue};
  border: 2px solid ${_index.theme.palette.ui.cta.blue};
  border-radius: 60px;
  cursor: pointer;
  outline: none;
  box-shadow: none;
  ${({
  theme
}) => themePrimaryMap.get(`${theme}`)};
  .icon {
    fill: ${_index.theme.palette.brand.primary.white};
  }
`;
const SecondaryCss = (0, _styledComponents.css)`
  color: ${_index.theme.palette.brand.primary.charcoal};
  background: ${_index.theme.palette.brand.primary.white};
  border: 1px solid ${_index.theme.palette.brand.primary.charcoal};
  border-radius: 60px;
  cursor: pointer;
  outline: none;
  box-shadow: none;
  ${({
  theme
}) => themeSecondaryMap.get(`${theme}`)};
  ${({
  emphasis
}) => emphasisMap.get(`${emphasis}`)};
  .icon {
    fill: ${_index.theme.palette.brand.primary.charcoal};
  }
`;
const StyledIconButton = _styledComponents.default.button`
  display: inline-flex;
  max-height: 36px;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  font-size: 14px;
  line-height: 16px;
  padding: ${({
  isRoundIcon
}) => isRoundIcon ? '10px' : '8.25px 20px'};
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
  .right-icon {
    margin-left: 5px;
  }
  .left-icon {
    margin-right: 10px;
  }

  ${({
  isRoundIcon
}) => isRoundIcon && `width: 36px; height: 36px`}
`;
exports.StyledIconButton = StyledIconButton;