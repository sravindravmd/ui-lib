"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = require("react");

const useTablesSortBy = (tableData, sortByColomn, sortByDiraction, isTableSortable) => {
  const [tableEntries, setTableEntries] = (0, _react.useState)(tableData);
  const [isSortedBy, setIsSortedBy] = (0, _react.useState)(sortByColomn);
  const [sortingOrder, setSortingOrder] = (0, _react.useState)(sortByDiraction);

  function sortBy(key) {
    if (isTableSortable && key.isSortable) {
      const sortedTableEntries = [...tableEntries];

      if (sortingOrder === 'ase') {
        sortedTableEntries.sort(function (a, b) {
          return ('' + a[key.headingKey]).localeCompare(b[key.headingKey], 'en', {
            numeric: true
          });
        });
        setSortingOrder('dse');
      } else if (sortingOrder === 'dse') {
        sortedTableEntries.sort(function (a, b) {
          return ('' + b[key.headingKey]).localeCompare(a[key.headingKey], 'en', {
            numeric: true
          });
        });
        setSortingOrder('ase');
      }

      setTableEntries(sortedTableEntries);
      setIsSortedBy(key.headingLabel.toLowerCase());
    }
  }

  return {
    tableEntries,
    isSortedBy,
    sortingOrder,
    sortBy
  };
};

var _default = useTablesSortBy;
exports.default = _default;