import React from 'react'
import PropTypes from 'prop-types'
import { DownCaret } from '../../assets/images'
import { FabricTable, Thead, Tbody, Tr, Td, Th } from './FabricTable'
import { MoreBtnWrapper } from './MoreBtnWrapper'
import { Dropdown } from '../../molecules'
import Box from '../../assets/images/box'
import useTablesSortBy from './use-tables'
export const Table = ({
  tableData,
  headerElement,
  isTableSortable = false,
  className,
}) => {
  const { tableEntries, isSortedBy, sortingOrder, sortBy } = useTablesSortBy(
    tableData,
    'name',
    'ase',
    isTableSortable
  )

  const RenderHeader = () => {
    return headerElement.map((key, index) => {
      return (
        <Th
          key={index}
          onClick={() => sortBy(key)}
          className={
            isSortedBy === key.headingLabel.toLowerCase() ? 'active' : undefined
          }
        >
          <span className='header'>{key.headingLabel}</span>
          <span
            className={
              isSortedBy === key.headingLabel.toLowerCase() &&
              sortingOrder === 'ase'
                ? 'arrow'
                : 'arrow rotate180'
            }
          >
            {isTableSortable && key.isSortable && (
              <DownCaret
                className={
                  isSortedBy === key.headingLabel.toLowerCase()
                    ? 'path-fill'
                    : undefined
                }
              />
            )}
          </span>
        </Th>
      )
    })
  }

  const RenderBody = () => {
    return (
      tableEntries &&
      tableEntries.map(
        ({
          id: parentId,
          orderId,
          created,
          customerName,
          total,
          profit,
          status,
          notes,
          hasChild,
          childROW,
        }) => {
          return (
            <React.Fragment key={`parent-${parentId}`}>
              <Tr>
                <Td>{parentId}</Td>
                <Td>{orderId}</Td>
                <Td>{created}</Td>
                <Td>{customerName}</Td>
                <Td>{profit}</Td>
                <Td>{total}</Td>
                <Td className='drop-down'>
                  {notes && (
                    <Dropdown
                      value={status.value}
                      isDefault={false}
                      options={status.options}
                      titleLabel='select'
                    />
                  )}
                </Td>
                <Td>
                  <Box />
                  <MoreBtnWrapper id={parentId}></MoreBtnWrapper>
                </Td>
              </Tr>

              {hasChild &&
                childROW.length &&
                childROW.map(
                  ({
                    id: childId,
                    orderId,
                    created,
                    customerName,
                    total,
                    profit,
                    status,
                    notes,
                  }) => {
                    return (
                      <Tr key={`child-${childId}`}>
                        <Td>{childId}</Td>
                        <Td>{orderId}</Td>
                        <Td>{created}</Td>
                        <Td>{customerName}</Td>
                        <Td>{profit}</Td>
                        <Td>{total}</Td>
                        <Td className='drop-down'>
                          {notes && (
                            <Dropdown
                              value={status.value}
                              isDefault={false}
                              options={status.options}
                              titleLabel='select'
                            />
                          )}
                        </Td>
                        <Td>
                          <Box />
                          <MoreBtnWrapper id={childId}></MoreBtnWrapper>
                        </Td>
                      </Tr>
                    )
                  }
                )}
            </React.Fragment>
          )
        }
      )
    )
  }

  return (
    <>
      <FabricTable id='table' className={className ? className : undefined}>
        <Thead>
          <Tr>
            <RenderHeader />
          </Tr>
        </Thead>
        <Tbody>
          <RenderBody />
        </Tbody>
      </FabricTable>
    </>
  )
}
Table.propTypes = {
  tableData: PropTypes.array.isRequired,
  headerElement: PropTypes.array.isRequired,
  isTableSortable: PropTypes.bool,
  className: PropTypes.string,
}
