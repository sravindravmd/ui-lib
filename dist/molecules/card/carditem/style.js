"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledValue = exports.StyledText = exports.StyledCategoryItem = exports.StyledArrow = exports.StyledSubtitle = exports.StyledTitle = exports.StyledContent = exports.StyledThumbnail = exports.StyledItemGeneral = exports.StyledItemDetail = exports.StyledItemProperty = exports.StyledItemDetailTitle = exports.StyledPen = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _shared = require("../../../shared");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* Detail Item styles */
const StyledPen = _styledComponents.default.span`
  position: relative;
  top: 2px;
  margin-left: 12px;
`;
exports.StyledPen = StyledPen;
const StyledItemDetailTitle = _styledComponents.default.div`
  max-width: 60%;
  word-wrap: break-word;
`;
exports.StyledItemDetailTitle = StyledItemDetailTitle;
const StyledItemProperty = _styledComponents.default.div`
  width: 30%;
  word-wrap: break-word;
`;
exports.StyledItemProperty = StyledItemProperty;
const StyledItemDetail = _styledComponents.default.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 0.8125rem;
  line-height: ${_shared.theme.typography.link.lineHeight};
  letter-spacing: 0.02em;
  border-bottom: 1px solid ${`${_shared.theme.palette.brand.primary.gray}50`};
  padding: 0 0 8px 0;
  box-sizing: border-box;
  margin-top: 16px;
`;
/* Detail Item styles */

/* General Item styles */

exports.StyledItemDetail = StyledItemDetail;
const StyledItemGeneral = _styledComponents.default.div`
  position: relative;
  box-sizing: border-box;
  display: flex;
  width: 100%;
  margin-bottom: 20px;
  cursor: default;
  ${({
  isActionItem
}) => isActionItem && `
    border-bottom:1px solid #737F8F50;
  `}
  :last-child {
    border: none;
    margin: 0;
  }
`;
exports.StyledItemGeneral = StyledItemGeneral;
const StyledThumbnail = _styledComponents.default.div`
  width: 36px;
  height: 36px;
  background: ${_shared.theme.palette.brand.primary.gray};
  margin-right: 14px;
  border-radius: 4px;
  display: flex;
  overflow: hidden;
  img {
    border-radius: 4px;
    max-width: 100%;
  }
  ${({
  isActionItem
}) => !isActionItem && `align-self:center `}
`;
exports.StyledThumbnail = StyledThumbnail;
const StyledContent = _styledComponents.default.div`
  padding: ${({
  isActionItem
}) => isActionItem ? '0 0 17px 0' : '3px 0'};
  font-family: ${_shared.theme.typography.link.fontFamily};
  font-size: 0.8125rem;
  line-height: ${_shared.theme.typography.link.lineHeight};
  letter-spacing: 0.02em;
  width: 70%;
  box-sizing: border-box;
`;
exports.StyledContent = StyledContent;
const StyledTitle = _styledComponents.default.div`
  margin-bottom: 3px;
  color: ${_shared.theme.palette.brand.primary.charcoal};
`;
exports.StyledTitle = StyledTitle;
const StyledSubtitle = _styledComponents.default.div`
  color: ${_shared.theme.palette.brand.primary.gray};
`;
exports.StyledSubtitle = StyledSubtitle;
const StyledArrow = _styledComponents.default.div`
  margin-left: auto;
  display: flex;
  align-items: center;
`;
/* General Item styles */

/* Root Category Item styles */

exports.StyledArrow = StyledArrow;
const StyledCategoryItem = _styledComponents.default.div`
  font-family: ${_shared.theme.typography.link.fontFamily};
  font-size: 0.8125rem;
  line-height: ${_shared.theme.typography.link.lineHeight};
  letter-spacing: 0.02em;
  color: ${_shared.theme.palette.brand.primary.charcoal};
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
  :last-child {
    margin: 0;
  }
`;
exports.StyledCategoryItem = StyledCategoryItem;
const StyledText = _styledComponents.default.div`
  width: 50%;
  text-align: left;
  word-break: break-all;
`;
exports.StyledText = StyledText;
const StyledValue = _styledComponents.default.div`
  width: 30%;
  text-align: right;
  word-break: break-all;
`;
/* Root Category Item styles */

exports.StyledValue = StyledValue;