import React, { useState } from 'react'
import PropTypes from 'prop-types'
import {
  StyledTreeCard,
  StyledCardContent,
  StyledTitle,
  StyledContent,
} from './style'

const HierarchyTreeCard = ({
  title,
  subtitle,
  level,
  children,
  onClick,
  ...props
}) => {
  const [selected, setSelected] = useState(false)

  const handleCardSelect = e => {
    setSelected(select => !select)
    onClick(e)
  }

  if (children) {
    return (
      <StyledTreeCard {...props} selected={selected} onClick={handleCardSelect}>
        <StyledCardContent tabIndex='-1'>
          <StyledTitle level={level}>{title}</StyledTitle>
          <StyledContent>{children}</StyledContent>
        </StyledCardContent>
      </StyledTreeCard>
    )
  }

  return (
    <StyledTreeCard {...props} selected={selected} onClick={handleCardSelect}>
      <StyledCardContent tabIndex='-1'>
        <StyledTitle level={level}>{title}</StyledTitle>
        <StyledContent>{subtitle}</StyledContent>
      </StyledCardContent>
    </StyledTreeCard>
  )
}

HierarchyTreeCard.defaultProps = {
  onClick: () => {},
}

HierarchyTreeCard.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  level: PropTypes.oneOf(['1', '2', '3']).isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  onClick: PropTypes.func,
}

export default HierarchyTreeCard
