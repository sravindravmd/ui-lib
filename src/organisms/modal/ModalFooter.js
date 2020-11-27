import React from 'react'
import { StyledModalFooter } from './styles'
import PropTypes from 'prop-types'
import { Button } from '../../atoms'
export const ModalFooter = ({ onCancel, onSave, ...props }) => (
  <StyledModalFooter {...props}>
    <Button
      data-dismiss='modal'
      aria-label='Close'
      size='small'
      text='Cancel'
      theme='none'
      className='modal-close-button'
      isPrimary={false}
      onClick={onCancel}
    />
    <Button
      data-dismiss='modal'
      aria-label='Close'
      size='small'
      onClick={onSave}
      text='Save'
    />
  </StyledModalFooter>
)
ModalFooter.propTypes = {
  onCancel: PropTypes.func,
  onSave: PropTypes.func,
}
