"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledCardContent = exports.StyledHeading = exports.StyledCardHeader = exports.StyledCaret = exports.StyledCard = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _shared = require("../../../shared");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const StyledCard = _styledComponents.default.div`
  font-family: ${_shared.theme.typography.link.fontFamily};
  width: 337px;
  padding: 16px 27px 0px 32px;
  display: flex;
  flex-direction: column;
  border: 2px solid ${`${_shared.theme.palette.brand.primary.gray}20`};
  border-radius: 4px;
  background: ${_shared.theme.palette.brand.primary.white};
  box-sizing: border-box;
  :hover {
    background: ${`${_shared.theme.palette.brand.primary.gray}20`};
  }
  :focus {
    outline: none;
    background: ${_shared.theme.palette.brand.primary.white};
    border: 2px solid ${_shared.theme.palette.ui.cta.yellow};
  }
  :active {
    background: ${_shared.theme.palette.brand.primary.white};
    border: 2px solid ${`${_shared.theme.palette.brand.primary.gray}20`};
    outline: none;
  }
`;
exports.StyledCard = StyledCard;
const StyledCaret = _styledComponents.default.div`
  display: flex;
  transition: all 0.3s ease-in-out;
  transform-origin: center center;
  ${({
  expand
}) => expand && `
    transform:rotateZ(180deg);
  `}
`;
exports.StyledCaret = StyledCaret;
const StyledCardHeader = _styledComponents.default.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: ${_shared.theme.typography.body.fontSize};
  line-height: ${_shared.theme.typography.body.lineHeight};
  padding-bottom: 14px;
`;
exports.StyledCardHeader = StyledCardHeader;
const StyledHeading = _styledComponents.default.div`
  word-break: break-all;
`;
exports.StyledHeading = StyledHeading;
const StyledCardContent = _styledComponents.default.div`
  padding-bottom: 74px;
  display: ${({
  expand
}) => expand ? 'block' : 'none'};
`;
exports.StyledCardContent = StyledCardContent;