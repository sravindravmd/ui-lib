import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { DownCaret } from '../../../assets/images'
import {
  StyledCard,
  StyledCardHeader,
  StyledHeading,
  StyledCardContent,
  StyledCaret,
} from './style'

const ExpandableCard = ({ heading, children, ...props }) => {
  const [expand, setExpand] = useState(false)

  const handleExpand = () => {
    setExpand(e => !e)
  }
  return (
    <StyledCard {...props} expand={expand}>
      <StyledCardHeader>
        <StyledHeading>{heading}</StyledHeading>
        <StyledCaret
          data-testid='downarrow'
          expand={expand}
          onClick={handleExpand}
        >
          <DownCaret />
        </StyledCaret>
      </StyledCardHeader>
      <StyledCardContent expand={expand}>{children}</StyledCardContent>
    </StyledCard>
  )
}

ExpandableCard.propTypes = {
  heading: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
}

export default ExpandableCard
