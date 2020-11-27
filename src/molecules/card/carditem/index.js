import React from 'react'
import PropTypes from 'prop-types'
import { RightArrow, EditPen } from '../../../assets/images'

import {
  StyledPen,
  StyledItemDetail,
  StyledItemDetailTitle,
  StyledItemProperty,
  StyledItemGeneral,
  StyledThumbnail,
  StyledContent,
  StyledTitle,
  StyledSubtitle,
  StyledArrow,
  StyledCategoryItem,
  StyledText,
  StyledValue,
} from './style'

export const DetailItem = ({ title, property, ...props }) => {
  return (
    <StyledItemDetail {...props}>
      <StyledItemDetailTitle>{title}</StyledItemDetailTitle>
      <StyledItemProperty>
        {property}
        <StyledPen>
          <EditPen />
        </StyledPen>
      </StyledItemProperty>
    </StyledItemDetail>
  )
}

DetailItem.propTypes = {
  title: PropTypes.string.isRequired,
  property: PropTypes.string.isRequired,
}

export const GeneralItem = ({
  title,
  subtitle,
  imgUrl,
  imgAltText = 'item-img',
  isActionItem,
  onClick,
  ...props
}) => {
  return (
    <StyledItemGeneral {...props} isActionItem={isActionItem}>
      <StyledThumbnail isActionItem={isActionItem}>
        {imgUrl && <img src={imgUrl} alt={imgAltText} />}
      </StyledThumbnail>
      <StyledContent isActionItem={isActionItem}>
        <StyledTitle>{title}</StyledTitle>
        <StyledSubtitle>{subtitle}</StyledSubtitle>
      </StyledContent>
      {isActionItem && (
        <StyledArrow onClick={onClick}>
          <RightArrow />
        </StyledArrow>
      )}
    </StyledItemGeneral>
  )
}

GeneralItem.defaultProps = {
  isActionItem: false,
}
GeneralItem.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired,
  imgAltText: PropTypes.string.isRequired,
  isActionItem: PropTypes.bool,
  onClick: PropTypes.func,
}

export const CategoryItem = ({ text, value, ...props }) => {
  return (
    <StyledCategoryItem {...props}>
      <StyledText>{text}</StyledText>
      <StyledValue>{value}</StyledValue>
    </StyledCategoryItem>
  )
}

CategoryItem.propTypes = {
  text: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
}

const CardItemTypes = {
  detailItem: DetailItem,
  generalItem: GeneralItem,
  categoryItem: CategoryItem,
}

const CardItem = ({ variant, ...props }) => {
  const Component = CardItemTypes[variant] && CardItemTypes[variant]

  if (!Component) {
    return null
  }
  return <Component {...props} />
}

CardItem.propTypes = {
  variant: PropTypes.oneOf(['detailItem', 'generalItem', 'categoryItem'])
    .isRequired,
}

export default CardItem
