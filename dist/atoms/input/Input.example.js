"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ContextualSearch = void 0;

var _react = _interopRequireDefault(require("react"));

var _ = require("./");

var _molecules = require("../../molecules");

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _iconSearch = _interopRequireDefault(require("../../assets/images/icon-search"));

var _shared = require("../../shared");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const StyledCSearch = _styledComponents.default.div`
  display: flex;
  box-shadow: 0px 5px 20px rgba(115, 127, 143, 0.1);
  background-color: #ffffff;
  border-radius: 50px;
  box-sizing: border-box;
  padding: 5px 25px;
  align-items: center;

  .column {
    &.left {
      flex-basis: 100%;

      input {
        border: none;
      }
    }
    &.right {
      flex-basis: 300px;

      .option-label {
        text-align: right;
        padding-right: 25px;
      }

      .ctx-search {
        > div:nth-child(3) {
          right: -25px;
          top: 50px;
          border: 1px solid ${_shared.theme.palette.ui.neutral.grey4};
          border-radius: 4px;
        }
      }

      & > div {
        width: auto;
        margin: auto;

        > div:nth-of-type(2) {
          box-shadow: none;
        }
      }
    }
  }
`;
const options = [{
  id: 1,
  name: 'Josh Weir'
}, {
  id: 2,
  name: 'Sarah Weir'
}, {
  id: 3,
  name: 'Alicia Weir'
}, {
  id: 4,
  name: 'Ashutosh Tiwari'
}];
const dropdownPropsWithTrue = {
  isDefault: true,
  options: [...options],
  value: {
    id: 0,
    name: 'All Item Types'
  },
  className: 'ctx-search'
};

const ContextualSearch = () => {
  return /*#__PURE__*/_react.default.createElement(StyledCSearch, null, /*#__PURE__*/_react.default.createElement("div", {
    className: "column left"
  }, /*#__PURE__*/_react.default.createElement(_.Input, {
    iconLeft: /*#__PURE__*/_react.default.createElement(_iconSearch.default, null),
    className: "search-contextual",
    inputProps: {
      placeholder: 'Search by SKU Number, Category, or Collections'
    }
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "column right"
  }, /*#__PURE__*/_react.default.createElement(_molecules.Dropdown, dropdownPropsWithTrue)));
};

exports.ContextualSearch = ContextualSearch;
ContextualSearch.propTypes = {};