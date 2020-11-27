import React from 'react'
import PropTypes from 'prop-types'
import { StyledLoading } from './Loading.styles'
import IconLoading from '../../svg/icon-loading'

export const Loading = ({ className, toggle }) => {
  return toggle ? (
    <StyledLoading className={className}>
      <IconLoading />
    </StyledLoading>
  ) : null
}

Loading.propTypes = {
  toggle: PropTypes.bool,
  className: PropTypes.string,
}

Loading.defaultProps = {
  toggle: true,
}
