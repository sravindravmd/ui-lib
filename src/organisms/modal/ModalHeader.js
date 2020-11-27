import React from 'react'
import { StyledModalHeader } from './styles'
import PropTypes from 'prop-types'
import { Button } from '../../atoms'
export const ModalHeader = ({ onCancel, onSave, ...props }) => (
  <StyledModalHeader {...props}>
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
  </StyledModalHeader>
)
ModalHeader.propTypes = {
  onCancel: PropTypes.func,
  onSave: PropTypes.func,
}
