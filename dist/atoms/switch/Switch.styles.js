"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Styledtext = exports.Slider = exports.StyledCheckbox = exports.StyledToggleSwitch = exports.StyledSwitchWrapper = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _shared = require("../../shared");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const StyledSwitchWrapper = _styledComponents.default.label`
  box-sizing: border-box;
  display: inline-flex;
  align-items: center;
  font-family: ${_shared.theme.typography.link.fontFamily};
  font-size: ${_shared.theme.typography.link.fontSize};
  line-height: ${_shared.theme.typography.link.lineHeight};
  color: ${_shared.theme.palette.brand.primary.charcoal};
  cursor: pointer;
`;
exports.StyledSwitchWrapper = StyledSwitchWrapper;
const StyledToggleSwitch = _styledComponents.default.span`
  position: relative;
  display: inline-block;
  width: 38px;
  height: 21px;
`;
exports.StyledToggleSwitch = StyledToggleSwitch;
const StyledCheckbox = _styledComponents.default.input`
  opacity: 0;
  width: 0;
  height: 0;
`;
exports.StyledCheckbox = StyledCheckbox;
const Slider = _styledComponents.default.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 30px;
  background-color: ${_shared.theme.palette.brand.primary.gray};
  transition: all 250ms ease;

  ${({
  toggle
}) => toggle && `
      background-color:${_shared.theme.palette.ui.cta.blue};
    `}

  :before {
    position: absolute;
    content: '';
    height: 16px;
    width: 16px;
    left: 3px;
    top: 2px;
    border-radius: 50%;
    background-color: ${_shared.theme.palette.brand.primary.white};
    transition: all 250ms ease;

    ${({
  toggle
}) => toggle && `
        transform: translateX(16px);
      `}
  }
`;
exports.Slider = Slider;
const Styledtext = _styledComponents.default.span`
  margin-left: 8px;
`;
exports.Styledtext = Styledtext;