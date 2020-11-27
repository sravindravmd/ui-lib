import React, { useState, useRef, useEffect } from 'react'
import PropTypes from 'prop-types'
import { StyledPopover } from './Popover.styles'

export const Popover = ({
  placement = 'bottom',
  children,
  className,
  showArrow = false,
  target,
  ...props
}) => {
  const [isVisible, setVisible] = useState(false)
  const poRef = useRef()

  useEffect(() => {
    if (poRef.current) {
      const elem = poRef.current
      elem.addEventListener('mouseenter', handleHover)
      elem.addEventListener('mouseleave', handleOut)
      return () => {
        elem.removeEventListener('mouseenter', handleHover)
        elem.removeEventListener('mouseleave', handleOut)
      }
    }
  }, [poRef])

  const handleHover = () => {
    setVisible(true)
  }

  const handleOut = () => {
    setVisible(false)
  }

  return (
    <StyledPopover
      className={`${isVisible ? 'active' : ''} ${className ? className : ''} ${
        placement ? placement : ''
      }`}
      {...props}
      ref={poRef}
    >
      {target}
      <div className='content'>
        <div className='content-inner'>
          {showArrow && <span className='arrows'></span>}
          {children && children}
        </div>
      </div>
    </StyledPopover>
  )
}

Popover.propTypes = {
  show: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  showArrow: PropTypes.bool,
  placement: PropTypes.string,
  style: PropTypes.object,
  onClick: PropTypes.func,
  target: PropTypes.any,
}
