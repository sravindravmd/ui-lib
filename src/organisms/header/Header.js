import React from 'react'
import PropTypes from 'prop-types'
import { StyledHeader } from './Header.styles'
import Logo from './Logo'
import ProductLinks from './ProductLinks'
import Notification from './notification'
import UserAction from './profile'

export const Header = ({ logo, company, productLinks = [] }) => {
  return (
    <StyledHeader>
      <div className='inner'>
        <div className='col left'>
          <Logo logo={logo} title={company} />
        </div>
        <div className='col middle'>
          <ProductLinks productLinks={productLinks} />
        </div>
        <div className='col actions'>
          <Notification />
          <UserAction />
        </div>
      </div>
    </StyledHeader>
  )
}

Header.propTypes = {
  logo: PropTypes.string,
  productLinks: PropTypes.array,
  company: PropTypes.string,
}
