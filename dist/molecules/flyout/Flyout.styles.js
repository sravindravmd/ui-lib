"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledFlyout = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _shared = require("../../shared");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const StyledFlyout = _styledComponents.default.div`
  position: relative;

  &.active {
    .content {
      display: block;
    }
  }

  .content {
    display: none;
    position: absolute;

    .content-inner {
      border: 1px solid ${_shared.theme.palette.ui.neutral.grey5};
      box-sizing: border-box;
      box-shadow: 0px 6px 16px rgba(115, 127, 143, 0.16);
      border-radius: 4px;
      background-color: ${_shared.theme.palette.brand.primary.white};
      position: relative;
      top: 5px;
    }
  }
`;
exports.StyledFlyout = StyledFlyout;