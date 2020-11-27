"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledContent = exports.StyledSubtitle = exports.StyledTitle = exports.StyledRootHeader = exports.StyledRootCard = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _shared = require("../../../shared");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const StyledRootCard = _styledComponents.default.div`
  width: 271px;
  background: ${_shared.theme.palette.brand.primary.white};
  border: 2px solid transparent;
  border-radius: 4px;
  box-sizing: border-box;
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
}) => !selected && `
    border: 2px solid ${_shared.theme.palette.ui.cta.yellow};
		`}
  }
  ${({
  selected
}) => selected && `border: 2px solid ${_shared.theme.palette.ui.cta.blue}`};
`;
exports.StyledRootCard = StyledRootCard;
const StyledRootHeader = _styledComponents.default.div`
  font-family: ${_shared.theme.typography.link.fontFamily};
  padding-bottom: ${_shared.theme.typography.link.fontSize};
  margin-bottom: ${_shared.theme.typography.link.lineHeight};
  border-bottom: 1px solid ${`${_shared.theme.palette.brand.primary.gray}30`};
`;
exports.StyledRootHeader = StyledRootHeader;
const StyledTitle = _styledComponents.default.div`
  font-size: ${_shared.theme.typography.body.fontSize};
  line-height: 1.375rem;
  color: ${_shared.theme.palette.brand.primary.charcoal};
  margin-bottom: 4px;
`;
exports.StyledTitle = StyledTitle;
const StyledSubtitle = _styledComponents.default.div`
  font-size: 0.8125rem;
  line-height: ${_shared.theme.typography.link.lineHeight};
  letter-spacing: 0.02em;
  color: ${_shared.theme.palette.brand.primary.gray};
`;
exports.StyledSubtitle = StyledSubtitle;
const StyledContent = _styledComponents.default.div`
  box-sizing: border-box;
  padding: 24px;
  &:focus {
    outline: none;
    border: none;
  }
`;
exports.StyledContent = StyledContent;