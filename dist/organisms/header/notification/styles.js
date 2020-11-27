"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledItem = exports.StyledItemGroup = exports.StyledTabContent = exports.StyledNotification = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _shared = require("../../../shared");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const StyledNotification = _styledComponents.default.div`
  .notification {
    .icon-notify {
      padding: 3px 0px;
    }
    .red-dot {
      position: relative;
      &:after {
        content: '';
        display: block;
        width: 8px;
        height: 8px;
        position: absolute;
        top: -2px;
        right: -2px;
        background-color: ${_shared.theme.palette.ui.cta.red};
        border-radius: 50%;
      }
    }
    .content {
      left: auto !important;
      transform: unset !important;
      right: -160px;
      width: 465px;

      .arrows {
        left: 64%;
      }

      .tabs-notify {
        width: 100%;
        padding: 30px;
        box-sizing: border-box;
        max-height: calc(100vh - 100px);
        overflow-y: auto;

        & > div {
          & > div:nth-of-type(1) {
            & > div {
              margin-right: 15px;
              padding: 0px 10px;

              &:last-child {
                margin: unset;
              }
            }
          }
        }
      }
    }
  }
`;
exports.StyledNotification = StyledNotification;
const StyledTabContent = _styledComponents.default.div``;
exports.StyledTabContent = StyledTabContent;
const StyledItemGroup = _styledComponents.default.div`
  padding-top: 20px;
  .title {
    text-transform: uppercase;
    color: ${_shared.theme.palette.ui.neutral.grey2};
    font-size: 12px;
    padding: 8px 0px;
  }
`;
exports.StyledItemGroup = StyledItemGroup;
const StyledItem = _styledComponents.default.div`
  border-bottom: 1px solid #f7f7f7;
  display: flex;
  color: ${_shared.theme.palette.brand.primary.charcoal};
  font-size: 13px;
  padding: 15px 0px;
  box-sizing: border-box;
  align-items: center;

  &:last-child {
    border: none;
  }

  .column {
    display: flex;

    &.left {
      justify-content: flex-start;
    }

    .image {
      flex-basis: 36px;
      height: 36px;
      background-color: #f7f7f7;

      img {
        vertical-align: top;
      }
    }
    .description {
      flex-basis: 100%;
      padding-left: 14px;
      padding-right: 55px;
      box-sizing: border-box;

      span {
        color: ${_shared.theme.palette.ui.cta.blue};
      }
      p {
        margin: 0px;
      }
    }
    &.right {
      button {
        white-space: nowrap;
      }
    }
  }
`;
exports.StyledItem = StyledItem;