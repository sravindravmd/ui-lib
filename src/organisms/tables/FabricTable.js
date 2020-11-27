import React from 'react'
import classnames from 'classnames'
import { StyledFabricTable } from './styles'
import PropTypes from 'prop-types'

export const FabricTable = ({ className, ...props }) => (
  <StyledFabricTable
    {...props}
    {...{
      className: classnames('fabric-table', className),
    }}
  />
)
FabricTable.propTypes = {
  className: PropTypes.string,
}

export const Thead = props => <thead {...props} />
export const Tbody = props => <tbody {...props} />
export const Tfoot = props => <tfoot {...props} />
export const Tr = props => <tr {...props} />
export const Td = props => <td {...props} />
export const Th = ({ scope = 'col', ...props }) => (
  <th {...props} {...{ scope }} />
)
