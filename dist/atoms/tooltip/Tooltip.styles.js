"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Tooltip_types = exports.Text = exports.Title = exports.StyledTooltip = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _shared = require("../../shared");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const StyledBaseTooltip = _styledComponents.default.div`
  font-family: ${_shared.theme.typography.caption.fontFamily};
  display: inline-block;
  position: absolute;
  text-align: left;
  width: 160px;
  padding: 8px;
  background: ${_shared.theme.palette.brand.primary.charcoal};
  border-radius: 1px;
  color: white;
  visibility: ${({
  show
}) => show ? 'visible' : 'hidden'};
  opacity: ${({
  show
}) => show ? 1 : 0};
  transition: all 0.2s ease-in-out;
  z-index: ${_shared.theme.zIndex.tooltip};
  font-size: ${_shared.theme.typography.link.fontSize};
  line-height: ${_shared.theme.typography.kicker.lineHeight};
  pointer-events: none;
  :before {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    border: 6px solid transparent;
    z-index: ${_shared.theme.zIndex.tooltip};
  }
`;
const StyledTooltip = (0, _styledComponents.default)(StyledBaseTooltip)`
  width: auto;
  padding: 0 8px;
  white-space: nowrap;
  left: ${({
  x
}) => x && `${x}px`};
  top: ${({
  y
}) => y && `${y}px`};
`;
exports.StyledTooltip = StyledTooltip;
const Title = _styledComponents.default.div`
  font-size: ${_shared.theme.typography.kicker.fontSize};
  line-height: ${_shared.theme.typography.kicker.lineHeight};
  text-transform: uppercase;
  letter-spacing: 0.075em;
  margin-bottom: 4px;
`;
exports.Title = Title;
const Text = _styledComponents.default.div`
  font-size: ${_shared.theme.typography.kicker.fontSize};
  line-height: ${_shared.theme.typography.caption.lineHeight};
`;
exports.Text = Text;
const StyledRightTooltip = (0, _styledComponents.default)(StyledBaseTooltip)`
  left: calc(100% + 12px);
  bottom: 0;
  :before {
    left: -11px;
    bottom: 8px;
    border-right-color: ${_shared.theme.palette.brand.primary.charcoal};
  }
`;
const StyledBottomTooltip = (0, _styledComponents.default)(StyledBaseTooltip)`
  top: calc(100% + 12px);
  right: 0;
  :before {
    right: 8px;
    top: -11px;
    border-bottom-color: ${_shared.theme.palette.brand.primary.charcoal};
  }
`;
const Tooltip_types = {
  right: StyledRightTooltip,
  bottom: StyledBottomTooltip
};
exports.Tooltip_types = Tooltip_types;