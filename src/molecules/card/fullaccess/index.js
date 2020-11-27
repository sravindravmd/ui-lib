import React from 'react'
import PropTypes from 'prop-types'
import { StyledCard, StyledCardHeading } from './style'

const FullAccessCard = ({ variant, heading, children, ...props }) => {
  return (
    <StyledCard {...props} variant={variant}>
      <StyledCardHeading>{heading}</StyledCardHeading>
      {children}
    </StyledCard>
  )
}

FullAccessCard.propTypes = {
  variant: PropTypes.oneOf(['general', 'withActionItem']).isRequired,
  heading: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
}

export default FullAccessCard
