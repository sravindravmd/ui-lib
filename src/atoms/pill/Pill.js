import React from 'react'
import PropTypes from 'prop-types'

import { StyledPill, pillTypes } from './Pill.styles'

export const Pill = ({ variant, text, ...props }) => {
  const pillType = pillTypes[variant]
    ? pillTypes[variant]
    : pillTypes['success']

  return (
    <StyledPill {...props} {...pillType}>
      {text}
    </StyledPill>
  )
}

Pill.defaultProps = {
  variant: 'success',
}

Pill.propTypes = {
  text: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(['success', 'warning', 'alert']),
}
