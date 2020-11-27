import React from 'react'
import PropTypes from 'prop-types'
import { StyledButton } from './Button.styles'

export const Button = ({ text, ...rest }) => (
  <StyledButton {...rest}>{text}</StyledButton>
)

Button.defaultProps = {
  disabled: false,
  isPrimary: true,
  size: 'large',
  theme: 'none',
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  isPrimary: PropTypes.bool,
  size: PropTypes.oneOf(['small', 'large']),
  theme: PropTypes.oneOf(['none', 'dark', 'light']),
}
