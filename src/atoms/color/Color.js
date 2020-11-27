import React from 'react'
import { StyledColorContainer, StyledColor } from './Color.styles'
import PropTypes from 'prop-types'

export const Color = ({ color, name, path }) => {
  return (
    <StyledColorContainer>
      <StyledColor color={color} />
      <div>{color}</div>
      <br />
      <div>{name}</div>
      <div>{path}</div>
    </StyledColorContainer>
  )
}

Color.defaultProps = {
  color: '',
}

Color.propTypes = {
  color: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
}
