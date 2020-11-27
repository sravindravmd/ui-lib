import React, { useState } from 'react'
import PropTypes from 'prop-types'
import {
  StyledCarouselCard,
  StyledCardContent,
  StyledImg,
  StyledContent,
  StyledTitle,
  StyledSubtitle,
} from './style'

const CarouselCard = ({
  title,
  subtitle,
  imgUrl,
  onClick,
  imgAltText = 'CardImage',
  ...props
}) => {
  const [selected, setSelected] = useState(false)

  const handleCardSelect = e => {
    setSelected(select => !select)
    onClick(e)
  }

  return (
    <StyledCarouselCard
      {...props}
      selected={selected}
      onClick={handleCardSelect}
    >
      <StyledCardContent tabIndex='-1'>
        {imgUrl && <StyledImg src={imgUrl} alt={imgAltText} />}
        <StyledContent>
          {title && <StyledTitle>{title}</StyledTitle>}
          {subtitle && <StyledSubtitle>{subtitle}</StyledSubtitle>}
        </StyledContent>
      </StyledCardContent>
    </StyledCarouselCard>
  )
}

CarouselCard.defaultProps = {
  onClick: () => {},
}

CarouselCard.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired,
  imgAltText: PropTypes.string.isRequired,
  onClick: PropTypes.func,
}

export default CarouselCard
