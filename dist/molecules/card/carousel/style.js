"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledCardContent = exports.StyledSubtitle = exports.StyledTitle = exports.StyledContent = exports.StyledImg = exports.StyledCarouselCard = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _shared = require("../../../shared");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const StyledCarouselCard = _styledComponents.default.div`
  font-family: ${_shared.theme.typography.link.fontFamily};
  width: 200px;
  background: ${_shared.theme.palette.brand.primary.white};
  border: 2px solid transparent;
  border-radius: 4px;
  :hover {
    ${({
  selected
}) => !selected && `background: #f1f2f4`}
  }

  &:focus {
    outline: none;
    background: ${_shared.theme.palette.brand.primary.white};
    ${({
  selected
}) => !selected && `
		border: 2px solid ${_shared.theme.palette.ui.cta.yellow};
		`}
  }

  ${({
  selected
}) => selected && `border: 2px solid ${_shared.theme.palette.ui.cta.blue}`}
`;
exports.StyledCarouselCard = StyledCarouselCard;
const StyledImg = _styledComponents.default.img`
  max-width: 100%;
  height: 140px;
  background: ${_shared.theme.palette.brand.primary.gray};
  border-radius: 4px 4px 0 0;
  object-fit: cover;
`;
exports.StyledImg = StyledImg;
const StyledContent = _styledComponents.default.div`
  padding: 16px 20px;
  font-size: 0.8125rem;
  line-height: ${_shared.theme.typography.link.lineHeight};
  letter-spacing: 0.02em;
  box-sizing: border-box;
`;
exports.StyledContent = StyledContent;
const StyledTitle = _styledComponents.default.div`
  color: ${_shared.theme.palette.brand.primary.charcoal};
`;
exports.StyledTitle = StyledTitle;
const StyledSubtitle = _styledComponents.default.div`
  margin-top: 4px;
  color: ${_shared.theme.palette.brand.primary.gray};
  word-wrap: break-word;
`;
exports.StyledSubtitle = StyledSubtitle;
const StyledCardContent = _styledComponents.default.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  &:focus {
    border: none;
    outline: none;
  }
`;
exports.StyledCardContent = StyledCardContent;