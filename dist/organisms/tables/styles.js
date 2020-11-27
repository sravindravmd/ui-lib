"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledFabricTable = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _shared = require("../../shared");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const StyledFabricTable = (0, _styledComponents.default)('table')`
  border-collapse: collapse;
  font-size: 0.8125rem;
  margin: auto;
  font-family: ${_shared.theme.typography.caption.fontFamily};

  td,
  th {
    padding: 0.76rem;
    height: 4rem;
    min-width: 3.125rem;
    position: relative;
    box-sizing: border-box;
  }
  tr {
    box-shadow: inset 0rem -0.0625rem 0rem rgba(115, 127, 143, 0.2);
    border-radius: 0.25rem 0.25rem 0 0;
  }
  svg.path-fill path {
    fill: #121213 !important;
  }
  .active {
    color: #121213 !important;
  }
  span.dotes {
    display: none;
    width: 1.25rem;
    right: 0.25rem;
    top: 1.875rem;
    height: auto;
    text-align: center;
    cursor: pointer;
    position: absolute;
  }
  span.arrow {
    display: inline-block;
    margin-left: 0.625rem;
  }
  .rotate180 {
    transform: rotate(180deg);
  }
  thead th:hover {
    cursor: pointer;
  }

  tbody tr:hover {
  }
  tbody tr:hover span.dotes {
    display: block;
  }
  th {
    padding: 0.625rem;
    text-align: left;
    color: #737f8f;
    height: 5rem;
    padding: 0.625rem 1.25rem;
  }
  .drop-down {
    .content-wrapper {
      .icon {
        position: absolute;
        right: 3.875rem;
      }
    }
  }
`;
exports.StyledFabricTable = StyledFabricTable;