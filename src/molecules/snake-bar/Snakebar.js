import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { StyledSnakebar } from './Snakebar.styles'
import Icon from './Icon'
import IconClose from '../../assets/images/icon-close'

export const SnakeBar = ({
  kind,
  children,
  dismissable,
  label,
  onDismiss,
  show,
  withIcon,
  className,
  ...others
}) => {
  const [alertVisible, setVisible] = useState(false)

  const handleAlertDismiss = () => {
    if (onDismiss) onDismiss()
    setVisible({ alertVisible: false })
  }

  const visible = typeof show === 'undefined' ? alertVisible : show

  if (!visible) return <span />

  let iconColumn
  if (withIcon) {
    iconColumn = (
      <div className='icon'>
        <Icon kind={kind} />
      </div>
    )
  }

  let dismissableColumn
  if (dismissable) {
    dismissableColumn = (
      <div className='dismiss' onClick={handleAlertDismiss}>
        <IconClose />
      </div>
    )
  }

  return (
    <StyledSnakebar
      className={`${kind} ${className ? className : ''}`}
      {...others}
    >
      <div className='row'>
        {iconColumn}
        <div className='col col-middle'>
          <div>
            {label && <span className='label'>{label}</span>}
            {children}
          </div>
        </div>
        {dismissableColumn}
      </div>
    </StyledSnakebar>
  )
}

SnakeBar.propTypes = {
  closeLabel: PropTypes.node,
  dismissable: PropTypes.bool,
  kind: PropTypes.oneOf(['alert', 'success', 'message', 'notification']),
  label: PropTypes.string,
  onDismiss: PropTypes.func,
  show: PropTypes.bool,
  withIcon: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
}

SnakeBar.defaultProps = {
  closeLabel: 'Close alert',
  dismissable: false,
  withIcon: false,
}
