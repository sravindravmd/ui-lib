"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledPopover = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _shared = require("../../shared");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const StyledPopover = _styledComponents.default.div`
  position: relative;

  .arrows {
    position: absolute;
    display: block;
    width: 16px;
    height: 8px;
    display: none;

    &:before,
    &:after {
      position: absolute;
      display: block;
      content: '';
      border-color: transparent;
      border-style: solid;
    }
  }

  &.bottom {
    .arrows {
      left: 50%;
      transform: translateX(-50%);
      top: -8px;

      &:before {
        top: 0;
        border-width: 0 0.5rem 0.5rem 0.5rem;
        border-bottom-color: rgba(0, 0, 0, 0.25);
      }

      &:after {
        top: 1px;
        border-width: 0 0.5rem 0.5rem 0.5rem;
        border-bottom-color: #ffffff;
      }
    }

    &.active {
      .content {
        left: 50%;
        transform: translateX(-50%);
        top: 15px;
        padding-top: 35px;
      }
    }
  }

  &.left {
    .arrows {
      top: 50%;
      transform: translateY(-50%);
      right: -8px;

      &:before {
        right: 0;
        border-width: 0.5rem 0 0.5rem 0.5rem;
        border-left-color: rgba(0, 0, 0, 0.25);
      }

      &:after {
        right: 1px;
        border-width: 0.5rem 0 0.5rem 0.5rem;
        border-left-color: #ffffff;
      }
    }

    &.active {
      .content {
        top: 50%;
        transform: translate(0%, -50%);
        right: 100%;
        padding-right: 15px;
      }
    }
  }

  &.top {
    .arrows {
      left: 50%;
      transform: translateX(-50%);
      bottom: -8px;

      &:before {
        top: 0;
        border-width: 0.5rem 0.5rem 0 0.5rem;
        border-top-color: rgba(0, 0, 0, 0.25);
      }

      &:after {
        top: -1px;
        border-width: 0.5rem 0.5rem 0 0.5rem;
        border-top-color: #ffffff;
      }
    }

    &.active {
      .content {
        left: 50%;
        transform: translate(-50%, 0%);
        bottom: 100%;
        padding-bottom: 15px;
      }
    }
  }

  &.right {
    .arrows {
      top: 50%;
      transform: translateY(-50%);
      left: -8px;

      &:before {
        left: 0;
        border-width: 0.5rem 0.5rem 0.5rem 0;
        border-right-color: rgba(0, 0, 0, 0.25);
      }

      &:after {
        left: 1px;
        border-width: 0.5rem 0.5rem 0.5rem 0;
        border-right-color: #ffffff;
      }
    }

    &.active {
      .content {
        top: 50%;
        transform: translate(0%, -50%);
        left: 100%;
        padding-left: 15px;
      }
    }
  }

  &.active {
    .content {
      display: block;
    }

    .arrows {
      display: block;
    }
  }

  .content {
    display: none;
    position: absolute;

    .content-inner {
      border: 1px solid rgb(115, 127, 143, 0.5);
      box-sizing: border-box;
      box-shadow: 0px 6px 16px rgba(115, 127, 143, 0.16);
      border-radius: 4px;
      background-color: ${_shared.theme.palette.brand.primary.white};
      position: relative;
    }
  }
`;
exports.StyledPopover = StyledPopover;