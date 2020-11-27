import React, { useState } from 'react'
import PropTypes from 'prop-types'
import {
  StyledRootCard,
  StyledContent,
  StyledRootHeader,
  StyledTitle,
  StyledSubtitle,
} from './style'

const RootCategoryCard = ({ title, subtitle, children, onClick, ...props }) => {
  const [selected, setSelected] = useState(false)

  const handleCardSelect = e => {
    setSelected(select => !select)
    onClick(e)
  }

  return (
    <StyledRootCard {...props} selected={selected} onClick={handleCardSelect}>
      <StyledContent tabIndex='-1'>
        <StyledRootHeader>
          <StyledTitle>{title}</StyledTitle>
          <StyledSubtitle>{subtitle}</StyledSubtitle>
        </StyledRootHeader>
        {children}
      </StyledContent>
    </StyledRootCard>
  )
}

RootCategoryCard.defaultProps = {
  onClick: () => {},
}

RootCategoryCard.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  onClick: PropTypes.func,
}

export default RootCategoryCard
