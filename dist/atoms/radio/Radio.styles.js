"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledRadio = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _shared = require("../../shared");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const StyledRadio = _styledComponents.default.div`
  user-select: none;
  position: relative;
  display: flex;
  align-items: center;
  font-family: Gilroy-Regular;

  .radio-label {
    display: flex;
    align-items: center;
    letter-spacing: 0.02em;
    padding: 9px 16px;
    outline: none;
    border-radius: 2px;

    &:hover {
      background-color: ${_shared.theme.palette.ui.neutral.grey4};
    }

    .circle {
      border: 1px solid ${_shared.theme.palette.ui.neutral.grey1};
      border-radius: 100%;
      width: 16px;
      height: 16px;
      margin-right: 6px;
      position: relative;
      box-sizing: border-box;
      background-color: #ffffff;

      &:before {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        border-radius: 100%;
        background-color: blue;
        opacity: 0;
        width: 4px;
        height: 4px;
        transition: width ease-out 0.2s, height ease-out 0.2s;
      }
    }
  }

  .radio-input {
    position: absolute;
    left: 0;
    top: 0;
    opacity: 0;
    height: 0;
    width: 0;

    &:disabled {
      cursor: default;

      ~ .radio-label {
        opacity: 0.4;
        cursor: not-allowed;

        &:hover {
          background: transparent;
        }
      }
    }

    &:active:not(:checked) {
      & ~ .radio-label {
        background: transparent;

        .circle {
          background-color: ${_shared.theme.palette.brand.primary.charcoal};
        }
      }
    }

    &:checked {
      & ~ .radio-label .circle {
        border: 1px solid ${_shared.theme.palette.ui.cta.blue};

        &:before {
          opacity: 1;
          width: 10px;
          height: 10px;
        }
      }

      &:active {
        & ~ .radio-label {
          background: transparent;

          .circle {
            border-color: #121213;

            &:before {
              background-color: #121213;
            }
          }
        }
      }
    }

    &:focus ~ .radio-label {
      box-shadow: 0 0 0 1px ${_shared.theme.palette.ui.cta.yellow};
    }
  }
`;
exports.StyledRadio = StyledRadio;