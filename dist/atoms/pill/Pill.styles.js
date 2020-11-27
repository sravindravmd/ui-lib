"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.pillTypes = exports.StyledPill = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _theme = _interopRequireDefault(require("../../shared/theme"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const StyledPill = _styledComponents.default.span`
  font-family: ${_theme.default.typography.link.fontFamily};
  font-size: ${_theme.default.typography.caption.fontSize};
  line-height: 0.87875rem;
  letter-spacing: 0.075em;
  background: ${({
  background
}) => background && `${background}`};
  color: ${({
  txtcolor
}) => txtcolor && `${txtcolor}`};
  padding: 6px 16px 6px 16px;
  border-radius: 16px;
  text-transform: uppercase;
`;
exports.StyledPill = StyledPill;
const pillTypes = {
  success: {
    background: _theme.default.palette.ui.cta.green,
    txtcolor: _theme.default.palette.brand.primary.white
  },
  warning: {
    background: _theme.default.palette.ui.cta.yellow,
    txtcolor: _theme.default.palette.brand.primary.charcoal
  },
  alert: {
    background: _theme.default.palette.ui.cta.red,
    txtcolor: _theme.default.palette.brand.primary.white
  }
};
exports.pillTypes = pillTypes;