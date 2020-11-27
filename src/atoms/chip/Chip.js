import React from 'react'
import PropTypes from 'prop-types'
import { StyledChip, StyledCloseButton } from './Chip.styles'
import CloseBtn from '../../assets/images/cross'

export const Chip = React.memo(({ uid, text, onClose, ...props }) => {
  return (
    <StyledChip {...props}>
      {text}
      <StyledCloseButton onClick={e => onClose(e, uid)}>
        <CloseBtn />
      </StyledCloseButton>
    </StyledChip>
  )
})

Chip.defaultProps = {
  disabled: false,
}

Chip.propTypes = {
  text: PropTypes.string.isRequired,
  uid: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
}
