"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledShimmerWrapper = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const placeholderShimmer = (0, _styledComponents.keyframes)`
  0% {
    background-position: -468px 0;
  }
  
  100% {
    background-position: 468px 0; 
  }
`;
const StyledShimmerWrapper = _styledComponents.default.div`
  background: white;
  display: flex;
  flex-wrap: wrap;

  .shine {
    background: #f6f7f8;
    background-image: linear-gradient(
      to right,
      #f6f7f8 0%,
      #edeef1 20%,
      #f6f7f8 40%,
      #f6f7f8 100%
    );
    background-repeat: no-repeat;
    background-size: 800px 104px;

    -webkit-animation-duration: 1s;
    -webkit-animation-fill-mode: forwards;
    -webkit-animation-iteration-count: infinite;
    -webkit-animation-name: ${placeholderShimmer};
    -webkit-animation-timing-function: linear;
  }

  .shimmer-item {
    flex-basis: 100%;
    ${props => props.perRow && `
        flex-basis: calc(100% / ${props.perRow});
      `}
    padding: 20px 50px;
    box-sizing: border-box;

    > div {
      height: 15px;
      border-radius: 50px;
      margin-bottom: 15px;
    }

    .sh-first {
      width: 40%;
    }
    .sh-second {
      width: 70%;
    }
    .sh-third {
      height: 60px;
    }
    .sh-fourth {
      display: flex;
      background: transparent;
      align-items: start;
      margin-bottom: 20px;
      height: auto;

      .sh-f-1 {
        width: 60px;
        text-align: right;

        span {
          display: inline-block;
          width: 20px;
          height: 20px;
          border-radius: 50px;
        }
      }
      .sh-f-2 {
        flex-basis: 100%;
        padding-left: 10px;

        .sh-fc-1 {
          width: 20%;
        }

        div {
          height: 15px;
          margin-bottom: 3px;
          border-radius: 50px;
        }
      }
    }
  }
`;
exports.StyledShimmerWrapper = StyledShimmerWrapper;