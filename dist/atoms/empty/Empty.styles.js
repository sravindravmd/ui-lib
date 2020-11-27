"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledEmptyWrapper = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _shared = require("../../shared");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const StyledEmptyWrapper = _styledComponents.default.div`
  background-color: ${_shared.theme.palette.ui.neutral.grey4};
  text-align: center;
  font-family: ${_shared.theme.typography.body};
  padding: 120px 0px;

  a {
    color: ${_shared.theme.palette.ui.cta.blue};
    text-decoration: none;
  }

  .primary-text {
    font-family: ${_shared.theme.typography.caption};
    text-transform: uppercase;
    font-size: 12px;
    color: ${_shared.theme.palette.ui.neutral.grey2};
    padding-bottom: 16px;
    white-space: pre-wrap;
  }

  .secondary-text {
    color: ${_shared.theme.palette.brand.primary.charcoal};
    font-size: 24px;
    padding-bottom: 54px;
    white-space: pre-wrap;
  }

  .button-block {
    padding-bottom: 140px;
    button {
      display: inline-block;
    }
  }

  .footer-content {
    font-family: ${_shared.theme.typography.caption};
    line-height: 16px;
    font-size: 13px;
  }
`;
exports.StyledEmptyWrapper = StyledEmptyWrapper;