"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledCardContent = exports.StyledSubtitle = exports.StyledTitle = exports.StyledContent = exports.StyledThumbnail = exports.StyledQuickAccessCard = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _shared = require("../../../shared");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const StyledQuickAccessCard = _styledComponents.default.div`
  width: 222px;
  min-height: 82px;
  background: ${_shared.theme.palette.brand.primary.white};
  border: 2px solid transparent;
  border-radius: 4px;
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
exports.StyledQuickAccessCard = StyledQuickAccessCard;
const StyledThumbnail = _styledComponents.default.div`
  width: 40px;
  height: 40px;
  margin-right: 9px;
  border-radius: 4px;
  background: ${_shared.theme.palette.brand.primary.gray};
  display: flex;
  overflow: hidden;
  img {
    border-radius: 4px;
    max-width: 100%;
    font-size: ${_shared.theme.typography.caption.fontSize};
  }
`;
exports.StyledThumbnail = StyledThumbnail;
const StyledContent = _styledComponents.default.div`
  font-family: ${_shared.theme.typography.link.fontFamily};
  font-size: 0.8125rem;
  line-height: ${_shared.theme.typography.link.lineHeight};
  letter-spacing: 0.02em;
  text-align: left;
  width: 70%;
`;
exports.StyledContent = StyledContent;
const StyledTitle = _styledComponents.default.div`
  color: ${_shared.theme.palette.brand.primary.charcoal};
  margin-bottom: 4px;
  word-wrap: break-word;
`;
exports.StyledTitle = StyledTitle;
const StyledSubtitle = _styledComponents.default.div`
  color: ${_shared.theme.palette.brand.primary.gray};
  word-wrap: break-word;
`;
exports.StyledSubtitle = StyledSubtitle;
const StyledCardContent = _styledComponents.default.div`
  padding: 16px 0px 16px 13px;
  box-sizing: border-box;
  display: flex;
  &:focus {
    outline: none;
    border: none;
  }
`;
exports.StyledCardContent = StyledCardContent;