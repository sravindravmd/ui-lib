import React, { useState } from 'react'
import PropTypes from 'prop-types'
import {
  StyledQuickAccessCard,
  StyledCardContent,
  StyledThumbnail,
  StyledContent,
  StyledTitle,
  StyledSubtitle,
} from './style'

const QuickAccessCard = ({
  title,
  subtitle,
  imgUrl,
  imgAltText,
  onClick,
  ...props
}) => {
  const [selected, setSelected] = useState(false)

  const handleCardSelect = e => {
    setSelected(select => !select)
    onClick(e)
  }
  return (
    <StyledQuickAccessCard
      {...props}
      selected={selected}
      onClick={handleCardSelect}
    >
      <StyledCardContent tabIndex='-1'>
        <StyledThumbnail>
          <img src={imgUrl} alt={imgAltText} />
        </StyledThumbnail>
        <StyledContent>
          <StyledTitle>{title}</StyledTitle>
          <StyledSubtitle>{subtitle}</StyledSubtitle>
        </StyledContent>
      </StyledCardContent>
    </StyledQuickAccessCard>
  )
}

QuickAccessCard.defaultProps = {
  onClick: () => {},
}

QuickAccessCard.propTypes = {
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
  subtitle: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired,
  imgAltText: PropTypes.string.isRequired,
  onClick: PropTypes.func,
}

export default QuickAccessCard
