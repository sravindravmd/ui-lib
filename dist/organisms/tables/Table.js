"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Table = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _images = require("../../assets/images");

var _FabricTable = require("./FabricTable");

var _MoreBtnWrapper = require("./MoreBtnWrapper");

var _molecules = require("../../molecules");

var _box = _interopRequireDefault(require("../../assets/images/box"));

var _useTables = _interopRequireDefault(require("./use-tables"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Table = ({
  tableData,
  headerElement,
  isTableSortable = false,
  className
}) => {
  const {
    tableEntries,
    isSortedBy,
    sortingOrder,
    sortBy
  } = (0, _useTables.default)(tableData, 'name', 'ase', isTableSortable);

  const RenderHeader = () => {
    return headerElement.map((key, index) => {
      return /*#__PURE__*/_react.default.createElement(_FabricTable.Th, {
        key: index,
        onClick: () => sortBy(key),
        className: isSortedBy === key.headingLabel.toLowerCase() ? 'active' : undefined
      }, /*#__PURE__*/_react.default.createElement("span", {
        className: "header"
      }, key.headingLabel), /*#__PURE__*/_react.default.createElement("span", {
        className: isSortedBy === key.headingLabel.toLowerCase() && sortingOrder === 'ase' ? 'arrow' : 'arrow rotate180'
      }, isTableSortable && key.isSortable && /*#__PURE__*/_react.default.createElement(_images.DownCaret, {
        className: isSortedBy === key.headingLabel.toLowerCase() ? 'path-fill' : undefined
      })));
    });
  };

  const RenderBody = () => {
    return tableEntries && tableEntries.map(({
      id: parentId,
      orderId,
      created,
      customerName,
      total,
      profit,
      status,
      notes,
      hasChild,
      childROW
    }) => {
      return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
        key: `parent-${parentId}`
      }, /*#__PURE__*/_react.default.createElement(_FabricTable.Tr, null, /*#__PURE__*/_react.default.createElement(_FabricTable.Td, null, parentId), /*#__PURE__*/_react.default.createElement(_FabricTable.Td, null, orderId), /*#__PURE__*/_react.default.createElement(_FabricTable.Td, null, created), /*#__PURE__*/_react.default.createElement(_FabricTable.Td, null, customerName), /*#__PURE__*/_react.default.createElement(_FabricTable.Td, null, profit), /*#__PURE__*/_react.default.createElement(_FabricTable.Td, null, total), /*#__PURE__*/_react.default.createElement(_FabricTable.Td, {
        className: "drop-down"
      }, notes && /*#__PURE__*/_react.default.createElement(_molecules.Dropdown, {
        value: status.value,
        isDefault: false,
        options: status.options,
        titleLabel: "select"
      })), /*#__PURE__*/_react.default.createElement(_FabricTable.Td, null, /*#__PURE__*/_react.default.createElement(_box.default, null), /*#__PURE__*/_react.default.createElement(_MoreBtnWrapper.MoreBtnWrapper, {
        id: parentId
      }))), hasChild && childROW.length && childROW.map(({
        id: childId,
        orderId,
        created,
        customerName,
        total,
        profit,
        status,
        notes
      }) => {
        return /*#__PURE__*/_react.default.createElement(_FabricTable.Tr, {
          key: `child-${childId}`
        }, /*#__PURE__*/_react.default.createElement(_FabricTable.Td, null, childId), /*#__PURE__*/_react.default.createElement(_FabricTable.Td, null, orderId), /*#__PURE__*/_react.default.createElement(_FabricTable.Td, null, created), /*#__PURE__*/_react.default.createElement(_FabricTable.Td, null, customerName), /*#__PURE__*/_react.default.createElement(_FabricTable.Td, null, profit), /*#__PURE__*/_react.default.createElement(_FabricTable.Td, null, total), /*#__PURE__*/_react.default.createElement(_FabricTable.Td, {
          className: "drop-down"
        }, notes && /*#__PURE__*/_react.default.createElement(_molecules.Dropdown, {
          value: status.value,
          isDefault: false,
          options: status.options,
          titleLabel: "select"
        })), /*#__PURE__*/_react.default.createElement(_FabricTable.Td, null, /*#__PURE__*/_react.default.createElement(_box.default, null), /*#__PURE__*/_react.default.createElement(_MoreBtnWrapper.MoreBtnWrapper, {
          id: childId
        })));
      }));
    });
  };

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_FabricTable.FabricTable, {
    id: "table",
    className: className ? className : undefined
  }, /*#__PURE__*/_react.default.createElement(_FabricTable.Thead, null, /*#__PURE__*/_react.default.createElement(_FabricTable.Tr, null, /*#__PURE__*/_react.default.createElement(RenderHeader, null))), /*#__PURE__*/_react.default.createElement(_FabricTable.Tbody, null, /*#__PURE__*/_react.default.createElement(RenderBody, null))));
};

exports.Table = Table;
Table.propTypes = {
  tableData: _propTypes.default.array.isRequired,
  headerElement: _propTypes.default.array.isRequired,
  isTableSortable: _propTypes.default.bool,
  className: _propTypes.default.string
};