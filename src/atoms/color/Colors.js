import React from 'react'
import { StyledColorsContainer } from './Color.styles'
import { Color } from './Color'
import PropTypes from 'prop-types'

export const Colors = ({ colors = [] }) => {
  return (
    <StyledColorsContainer>
      {colors.map(({ name, path, color }) => (
        <Color color={color} name={name} path={path} key={name} />
      ))}
    </StyledColorsContainer>
  )
}

Colors.propTypes = {
  colors: PropTypes.array,
}
