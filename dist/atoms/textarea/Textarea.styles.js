"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledMultiline = exports.StyledTextareaContainer = exports.StyledTextareaComponent = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _shared = require("../../shared");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const StyledTextareaComponent = _styledComponents.default.div`
  font-family: ${_shared.theme.typography.caption};

  .error {
    margin-top: 4px;
    margin-left: 1px;
    letter-spacing: 0.02em;
    font-size: 0.812rem;
    color: ${_shared.theme.palette.ui.cta.red};
  }
`;
exports.StyledTextareaComponent = StyledTextareaComponent;
const StyledTextareaContainer = _styledComponents.default.div`
  .textarea_parent {
    width: 100%;
    height: 100%;
    position: relative;
    padding: 0 0.75rem;
    box-sizing: border-box;
  }

  .textarea {
    &__label {
      font-size: 0.812rem;
      font-weight: normal;
      display: block;
      z-index: 1;
      text-overflow: ellipsis;
      box-sizing: border-box;
      color: ${_shared.theme.palette.ui.neutral.grey2};
      padding-bottom: 9px;

      &--hidden {
        position: absolute;
        text-indent: -9999px;
      }
    }
  }

  &.container_focus {
    .limit {
      display: block;
    }
  }
`;
exports.StyledTextareaContainer = StyledTextareaContainer;
const StyledMultiline = _styledComponents.default.div`
  position: relative;

  &.has-content {
    textarea {
      border-bottom-color: ${_shared.theme.palette.brand.primary.charcoal};
      border-top-color: transparent;
    }
  }

  textarea {
    max-width: 100%;
    box-sizing: border-box;
    width: 100%;
    resize: none;
    border: 1px solid transparent;
    outline: none;
    border-top-color: ${_shared.theme.palette.brand.primary.charcoal};

    &:focus,
    &:active {
      border-color: ${_shared.theme.palette.ui.neutral.grey4};
    }
  }

  .limit {
    display: flex;
    position: absolute;
    bottom: 10px;
    right: 10px;
    display: none;
    color: ${_shared.theme.palette.ui.neutral.grey2};
    font-size: 12px;
  }
`;
exports.StyledMultiline = StyledMultiline;