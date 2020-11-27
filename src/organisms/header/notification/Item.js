import React from 'react'
import PropTypes from 'prop-types'
import { StyledItem } from './styles'
import { Button } from '../../../atoms/button/Button'

const ItemGroup = () => (
  <StyledItem>
    <div className='column left'>
      <div className='image'>
        <img src='' alt='' />
      </div>
      <div className='description'>
        <p>
          <span>The Mari Bag (0200388292)</span> was assigned to you and needs
          your approval.
        </p>
      </div>
    </div>
    <div className='column right'>
      <Button
        isPrimary={false}
        onClick={() => {}}
        size='small'
        text='Review item'
        theme='none'
      />
    </div>
  </StyledItem>
)

ItemGroup.propTypes = {
  title: PropTypes.string,
  items: PropTypes.array,
}

export default ItemGroup
