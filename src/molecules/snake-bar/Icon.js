import React from 'react'
import IconTick from '../../assets/images/icon-tick'
import IconWarning from '../../assets/images/icon-warning'
import PropTypes from 'prop-types'

const Icon = ({ kind }) => {
  if (kind == 'success') return <IconTick />
  if (kind == 'alert') return <IconWarning />
  return <span />
}

Icon.propTypes = {
  kind: PropTypes.string,
}

export default Icon
