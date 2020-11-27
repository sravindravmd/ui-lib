"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledCardHeading = exports.StyledCard = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _shared = require("../../../shared");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const generalCardCss = (0, _styledComponents.css)`
  min-height: 252px;
`;
const withActionCardCss = (0, _styledComponents.css)`
  min-height: 345px;
`;
const cardMap = new Map();
cardMap.set('general', generalCardCss);
cardMap.set('withActionItem', withActionCardCss);
const StyledCard = _styledComponents.default.div`
  box-sizing: border-box;
  width: 337px;
  background: ${_shared.theme.palette.brand.primary.white};
  border: 2px solid transparent;
  border-radius: 4px;
  padding: 16px 30px 16px 30px;
  :focus {
    outline: none;
    border: 2px solid ${_shared.theme.palette.ui.cta.yellow};
  }
  ${({
  variant
}) => variant && cardMap.get(`${variant}`)}
`;
exports.StyledCard = StyledCard;
const StyledCardHeading = _styledComponents.default.div`
  font-family: ${_shared.theme.typography.link.fontFamily};
  font-size: ${_shared.theme.typography.body.fontSize};
  line-height: ${_shared.theme.typography.body.lineHeight};
  color: ${_shared.theme.palette.brand.primary.charcoal};
  margin-bottom: 16px;
  text-align: left;
`;
exports.StyledCardHeading = StyledCardHeading;