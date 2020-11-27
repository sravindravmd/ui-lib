import React, { useState, useRef, useEffect } from 'react'
import PropTypes from 'prop-types'
import { StyledFlyout } from './Flyout.styles'
import useClickOutside from '../../hooks/click-outside'
import cx from 'classnames'

export const Flyout = ({ children, className, id, show, handleToggle }) => {
  const [styles, setStyles] = useState({})

  const ref = useRef(null)
  useClickOutside(
    ref,
    () => {
      handleToggle()
    },
    show
  )

  const handleClick = event => {
    const params = event.target.getBoundingClientRect()
    setStyles({
      position: 'fixed',
      top: params.y + params.height,
      left: params.x,
    })
  }

  useEffect(() => {
    const element = document.getElementById(id)
    if (element) {
      element.addEventListener('click', handleClick)

      return () => {
        element.removeEventListener('click', handleClick)
      }
    }
  }, [id])

  return (
    <StyledFlyout
      className={cx({
        active: show,
        [className]: className,
      })}
      ref={ref}
    >
      <div className='content' style={styles}>
        <div className='content-inner'>{children && children}</div>
      </div>
    </StyledFlyout>
  )
}

Flyout.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  id: PropTypes.string,
  show: PropTypes.bool,
  handleToggle: PropTypes.func,
}
