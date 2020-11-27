import React from 'react'
import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'

import theme from '../../shared/theme'

const StyledLink = styled.a`
  font-family: ${theme.typography.link.fontFamily};
  font-size: ${theme.typography.link.fontSize};
  line-height: ${theme.typography.link.lineHeight};
  color: ${theme.palette.ui.cta.blue};
  text-align: center;
  outline: none;
  text-decoration: none;
  cursor: pointer;
  border: 1px solid transparent;
  padding: 0px 2px;
  :hover {
    color: ${theme.palette.ui.neutral.grey2};
  }
  :focus {
    padding: 0px 2px;
    border: 1px solid ${theme.palette.ui.cta.yellow};
    border-radius: 6px;
  }
  :active {
    border: 1px solid transparent;
    color: ${theme.palette.ui.neutral.grey1};
  }
  ${({ disabled }) =>
    disabled &&
    css`
      color: ${theme.palette.brand.primary.charcoal};
      opacity: 0.4;
      pointer-events: none;
    `}
`

export const Link = React.forwardRef(({ text, href, ...props }, ref) => {
  return (
    <StyledLink {...props} href={href} ref={ref}>
      {text}
    </StyledLink>
  )
})

Link.propTypes = {
  text: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
}
