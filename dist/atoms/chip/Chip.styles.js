"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledCloseButton = exports.StyledChip = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _shared = require("../../shared");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const StyledChip = _styledComponents.default.button`
  font-family: ${_shared.theme.typography.link.fontFamily};
  font-size: 0.8125rem;
  line-height: ${_shared.theme.typography.link.lineHeight};
  letter-spacing: 0.02em;
  background: ${`${_shared.theme.palette.brand.primary.gray}10`};
  color: ${_shared.theme.palette.brand.primary.charcoal};
  padding: 8px 10px 8px 16px;
  border-radius: 20px;
  white-space: nowrap;
  border: 1px solid transparent;
  outline: none;
  cursor: pointer;
  :hover {
    background: ${`${_shared.theme.palette.brand.primary.gray}30`};
  }
  :focus {
    border: 1px solid ${_shared.theme.palette.ui.cta.yellow};
  }
  :active {
    border: 1px solid transparent;
    background: ${_shared.theme.palette.ui.neutral.grey1};
    color: white;
    svg {
      path {
        fill: white;
      }
    }
  }
  ${({
  disabled
}) => disabled && (0, _styledComponents.css)`
      opacity: 0.2;
      pointer-events: none;
    `}
`;
exports.StyledChip = StyledChip;
const StyledCloseButton = _styledComponents.default.span`
  margin-left: 10px;
  position: relative;
  top: 1px;
`;
exports.StyledCloseButton = StyledCloseButton;