"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledHeader = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _shared = require("../../shared");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const StyledHeader = _styledComponents.default.header`
  background-color: ${_shared.theme.palette.brand.primary.charcoal};
  color: ${_shared.theme.palette.brand.primary.white};
  padding: 0px 40px;
  box-sizing: border-box;
  font-family: ${_shared.theme.typography.link};

  .inner {
    display: flex;
    align-items: center;
    height: 60px;
    justify-content: space-between;

    .col {
      &.left {
        .logo {
          max-width: 150px;
          max-height: 60px;
          overflow: hidden;

          img {
            max-width: 100%;
            height: auto;
          }
        }
      }
      &.middle {
        .product-links {
          display: flex;
          flex: 1;
          justify-content: center;
          font-size: 0.75rem;
          text-transform: uppercase;

          .product-link {
            display: flex;
            width: 120px;
            position: relative;
            padding: 0px 5px;

            &.active {
              a {
                &:after {
                  background: ${_shared.theme.palette.ui.cta.blue};
                }
              }
            }

            a {
              color: ${_shared.theme.palette.brand.primary.white};
              display: flex;
              align-items: center;
              text-decoration: none;
              padding: 18px 0px 18px;
              box-sizing: border-box;
              position: relative;
              justify-content: center;
              width: 100%;

              &:after {
                content: '';
                height: 4px;
                display: block;
                left: 0;
                right: 0;
                position: absolute;
                bottom: 0;
                z-index: 1;
              }

              .icon {
                padding-right: 17px;

                svg {
                  vertical-align: middle;

                  * {
                    fill: ${_shared.theme.palette.brand.primary.white};
                  }
                }
              }
              .text {
                line-height: initial;
                letter-spacing: 0.075em;
              }
            }
          }
        }
      }
      &.actions {
        display: flex;
        align-items: center;

        & > div {
          padding-left: 30px;
        }
      }
    }
  }
`;
exports.StyledHeader = StyledHeader;