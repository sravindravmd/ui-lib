import React from 'react'
import PropTypes from 'prop-types'
import IconOverview from '../../assets/images/icon-overview'
import IconPIM from '../../assets/images/icon-pim'
import IconXPM from '../../assets/images/icon-xpm'
import IconOffers from '../../assets/images/icon-offers'
import IconOMS from '../../assets/images/icon-oms'
import FabricLogo from '../../assets/images/fabric-logo'

const ProductLinks = props => {
  const { productLinks } = props
  let icon = ''

  return (
    <div className='product-links'>
      {productLinks &&
        productLinks.map((link, index) => {
          switch (link.icon) {
            case 'overview':
              icon = <IconOverview />
              break
            case 'pim':
              icon = <IconPIM />
              break
            case 'xpm':
              icon = <IconXPM />
              break
            case 'offers':
              icon = <IconOffers />
              break
            case 'oms':
              icon = <IconOMS />
              break
            default:
              icon = <FabricLogo />
          }
          return (
            <div
              className={`product-link ${link.active ? 'active' : ''}`}
              key={index}
            >
              <a href={link.href} title={link.text}>
                <span className='icon'>{icon}</span>
                <span className='text'>{link.text}</span>
              </a>
            </div>
          )
        })}
    </div>
  )
}

ProductLinks.propTypes = {
  productLinks: PropTypes.array.isRequired,
}

export default ProductLinks
