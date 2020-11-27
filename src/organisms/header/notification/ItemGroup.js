import React from 'react'
import PropTypes from 'prop-types'
import { StyledItemGroup } from './styles'
import Item from './Item'

const ItemGroup = ({ title }) => (
  <StyledItemGroup>
    <div className='title'>{title}</div>
    <Item />
    <Item />
  </StyledItemGroup>
)

ItemGroup.propTypes = {
  title: PropTypes.string,
}

export default ItemGroup
