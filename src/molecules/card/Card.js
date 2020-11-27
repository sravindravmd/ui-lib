import React from 'react'
import PropTypes from 'prop-types'
import ExpandableCard from './expandable'
import CarouselCard from './carousel'
import FullAccessCard from './fullaccess'
import RootCategoryCard from './rootcategory'
import QuickAccessCard from './quickaccess'
import HierarchyTreeCard from './hierarchytree'
import CardItems from './carditem'

const CardTypes = {
  expandable: ExpandableCard,
  carousel: CarouselCard,
  general: FullAccessCard,
  withActionItem: FullAccessCard,
  rootCategory: RootCategoryCard,
  quickAccess: QuickAccessCard,
  hierarchytree: HierarchyTreeCard,
}

export const Card = ({ variant, heading, children, ...props }) => {
  const Component = CardTypes[variant] && CardTypes[variant]

  if (!Component) {
    return null
  }
  return (
    <>
      <Component {...props} variant={variant} heading={heading}>
        {children}
      </Component>
    </>
  )
}

export const CardItem = CardItems

Card.propTypes = {
  variant: PropTypes.oneOf([
    'expandable',
    'carousel',
    'general',
    'withActionItem',
    'rootCategory',
    'quickAccess',
    'hierarchytree',
  ]),
  heading: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
}
