import { useState } from 'react'

const useTablesSortBy = (
  tableData,
  sortByColomn,
  sortByDiraction,
  isTableSortable
) => {
  const [tableEntries, setTableEntries] = useState(tableData)
  const [isSortedBy, setIsSortedBy] = useState(sortByColomn)
  const [sortingOrder, setSortingOrder] = useState(sortByDiraction)

  function sortBy(key) {
    if (isTableSortable && key.isSortable) {
      const sortedTableEntries = [...tableEntries]
      if (sortingOrder === 'ase') {
        sortedTableEntries.sort(function (a, b) {
          return ('' + a[key.headingKey]).localeCompare(
            b[key.headingKey],
            'en',
            {
              numeric: true,
            }
          )
        })
        setSortingOrder('dse')
      } else if (sortingOrder === 'dse') {
        sortedTableEntries.sort(function (a, b) {
          return ('' + b[key.headingKey]).localeCompare(
            a[key.headingKey],
            'en',
            {
              numeric: true,
            }
          )
        })
        setSortingOrder('ase')
      }
      setTableEntries(sortedTableEntries)
      setIsSortedBy(key.headingLabel.toLowerCase())
    }
  }

  return {
    tableEntries,
    isSortedBy,
    sortingOrder,
    sortBy,
  }
}

export default useTablesSortBy
