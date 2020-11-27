"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledBox = exports.StyledText = exports.StyledCheckboxWrapper = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _shared = require("../../shared");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const disbaledStyle = (0, _styledComponents.css)`
  pointer-events: none;
  opacity: 0.2;
`;
const selectedStyle = (0, _styledComponents.css)`
  background: ${_shared.theme.palette.ui.cta.blue};
  border: 1px solid transparent;
  svg {
    opacity: 1;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;
const StyledCheckboxWrapper = _styledComponents.default.label`
  font-family: ${_shared.theme.typography.link.fontFamily};
  color: black;
  padding: 9px 16px;
  display: inline-flex;
  align-items: center;
  box-sizing: border-box;
  border: 1px solid transparent;
  border-radius: 2px;
  user-select: none;
  input {
    width: 0px;
    height: 0px;
    margin: 0;
    padding: 0;
  }
  &:hover {
    background: ${_shared.theme.palette.brand.primary.gray}10;
  }
  &:focus {
    outline: none;
    border: 1px solid ${_shared.theme.palette.ui.cta.yellow};
    background: ${_shared.theme.palette.brand.primary.white};
  }
  &:active {
    background: ${_shared.theme.palette.brand.primary.white};
    border: 1px solid transparent;
  }
  &:active > span:first-child {
    background: ${_shared.theme.palette.ui.neutral.grey1};
  }
  ${({
  disabled
}) => disabled && disbaledStyle};
`;
exports.StyledCheckboxWrapper = StyledCheckboxWrapper;
const StyledText = _styledComponents.default.span`
  margin-left: 6px;
  font-size: 0.8125rem;
  line-height: ${_shared.theme.typography.link.lineHeight};
  letter-spacing: 0.02em;
`;
exports.StyledText = StyledText;
const StyledBox = _styledComponents.default.span`
  position: relative;
  width: 16px;
  height: 16px;
  border: 1px solid ${_shared.theme.palette.ui.neutral.grey1};
  border-radius: 2px;
  ${({
  selected
}) => selected && selectedStyle}
`;
exports.StyledBox = StyledBox;