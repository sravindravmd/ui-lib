import React from 'react'
import PropTypes from 'prop-types'

const Logo = props => {
  const { logo, title } = props
  return (
    <div className='logo'>
      {logo ? <img src={logo} alt={title} /> : title ? title : 'Copilot'}
    </div>
  )
}

Logo.propTypes = {
  logo: PropTypes.string,
  title: PropTypes.string,
}

export default Logo
