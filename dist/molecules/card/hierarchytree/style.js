"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledCardContent = exports.StyledContent = exports.StyledTitle = exports.StyledTreeCard = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _shared = require("../../../shared");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const firstLevelTitleCss = (0, _styledComponents.css)`
  font-size: ${_shared.theme.typography.body.fontSize};
  line-height: 1.375rem;
`;
const secondLevelTitleCss = (0, _styledComponents.css)`
  font-size: 1rem;
  line-height: ${_shared.theme.typography.caption.lineHeight};
  letter-spacing: 0.02em;
`;
const thirdLevelTitleCss = (0, _styledComponents.css)`
  font-size: 0.8125rem;
  line-height: ${_shared.theme.typography.link.lineHeight};
  letter-spacing: 0.02em;
`;
const titleMap = new Map();
titleMap.set('1', firstLevelTitleCss);
titleMap.set('2', secondLevelTitleCss);
titleMap.set('3', thirdLevelTitleCss);
const StyledTreeCard = _styledComponents.default.div`
  width: 200px;
  min-height: 80px;
  font-family: ${_shared.theme.typography.link.fontFamily};
  background: ${_shared.theme.palette.brand.primary.white};
  border-radius: 4px;
  box-shadow: 0px 5px 20px rgba(115, 127, 143, 0.1);
  border: 2px solid transparent;
  word-break: break-all;
  :hover {
    ${({
  selected
}) => !selected && `background: ${`${_shared.theme.palette.brand.primary.gray}10`};`}
  }
  :focus {
    outline: none;
    background: ${_shared.theme.palette.brand.primary.white};
    ${({
  selected
}) => !selected && `border: 2px solid ${_shared.theme.palette.ui.cta.yellow};`}
  }
  ${({
  selected
}) => selected && `border: 2px solid ${_shared.theme.palette.ui.cta.blue};`}
`;
exports.StyledTreeCard = StyledTreeCard;
const StyledTitle = _styledComponents.default.div`
  color: ${_shared.theme.palette.brand.primary.charcoal};
  ${({
  level
}) => level && titleMap.get(`${level}`)}
`;
exports.StyledTitle = StyledTitle;
const StyledContent = _styledComponents.default.div`
  font-size: 0.8125rem;
  line-height: ${_shared.theme.typography.link.lineHeight};
  letter-spacing: 0.02em;
  color: ${_shared.theme.palette.brand.primary.gray};
  margin-top: 8px;
  display: flex;
  flex-direction: row;
`;
exports.StyledContent = StyledContent;
const StyledCardContent = _styledComponents.default.div`
  padding: 17px 26px 17px 21px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  &:focus {
    outline: none;
    border: none;
  }
`;
exports.StyledCardContent = StyledCardContent;