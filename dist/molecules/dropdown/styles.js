"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ListItem = exports.DropDownList = exports.DropDownListContainer = exports.StyledDropdownHeader = exports.StyledDropdownLabel = exports.DropDownContainer = exports.StyledPrimaryDropdown = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _shared = require("../../shared");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const StyledPrimaryDropdown = (0, _styledComponents.default)('div')`
  .custom-select__overlay {
    background: transparent;
  }
`;
exports.StyledPrimaryDropdown = StyledPrimaryDropdown;
const DropDownContainer = (0, _styledComponents.default)('div')`
  ${props => props.isDefault ? `width:21.625rem` : `width:11rem`};
  margin: 0.625rem auto;
  margin: 0.625rem auto;
  position: relative;
  font-family: ${_shared.theme.typography.caption.fontFamily};
`;
exports.DropDownContainer = DropDownContainer;
const StyledDropdownLabel = (0, _styledComponents.default)('div')`
  .dd-lable {
    font-size: 0.8125rem;
    color: #737f8f;
  }
`;
exports.StyledDropdownLabel = StyledDropdownLabel;
const StyledDropdownHeader = (0, _styledComponents.default)('div')`
  text-align: center;
  align-items: center;
  height: ${props => props.height}px;
  ${props => props.isDefault ? `box-shadow: inset 0 -0.0625rem 0 #121213` : `box-shadow:none`};
  display: flex;
  justify-content: center;
  padding: 0.8125rem 0;
  padding-top: 0.4375rem;
  box-sizing: border-box;

  .content-wrapper {
    flex: 1;
    display: flex;
    justify-content: left;
    align-items: baseline;

    label {
      display: inline-block;
      ${props => props.isDefault ? `width:100%` : `width:auto;margin-right:0.625rem`};
      text-align: left;
      color: #121213;
    }
    .option-label {
      font-family: ${_shared.theme.typography.caption.fontFamily};
    }
    svg {
      path {
        fill: #2b2b2b;
      }
    }
    .icon {
      position: absolute;
      right: 0;
      ${props => props.isDefault ? `position: absolute;
      right: 0;` : `position: relative;`};
    }
    .rotate0 {
      transform: rotate(0deg);
    }

    .rotate180 {
      transform: rotate(180deg);
    }
  }
`;
exports.StyledDropdownHeader = StyledDropdownHeader;
const DropDownListContainer = (0, _styledComponents.default)('div')`
  position: absolute;
  cursor: pointer;
  width: inherit;
  z-index: 3;
`;
exports.DropDownListContainer = DropDownListContainer;
const DropDownList = (0, _styledComponents.default)('ul')`
  ::-webkit-scrollbar {
    -webkit-appearance: none;
    width: 0.25rem;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 0.25rem;
    background-color: rgba(0, 0, 0, 0.5);
    box-shadow: 0 0 0.0625rem rgba(255, 255, 255, 0.5);
  }
  padding: 0;
  margin: 0;
  max-height: 11.875rem;
  overflow: auto;
  box-sizing: border-box;
  ${props => props.isDefault ? ` box-shadow: 0 0.3125rem 1.25rem rgba(115, 127, 143, 0.1);` : ` border: 0.0625rem solid #737f8f;`};
  border-radius: 0.25rem;
  background: ${_shared.theme.palette.brand.primary.white};
  .active {
    background: #f1f2f4;
  }
  .selected {
    background: gray;
  }
`;
exports.DropDownList = DropDownList;
const ListItem = (0, _styledComponents.default)('li')`
  text-align: left;
  list-style: none;
  cursor: pointer;
  color: #121213;
  padding: 0.875rem 1.25rem 0.875rem 1.5rem;

  &:hover {
    background-color: #f1f2f4;
  }
  :first-child {
    padding-top: 0.875rem;
    padding-bottom: 0.875rem;
  }
  :last-child {
    padding-top: 0.875rem;
    padding-bottom: 0.875rem;
  }
`;
exports.ListItem = ListItem;