import React, { useState, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import { v4 as uuidv4 } from 'uuid'
import { StyledTooltip, Tooltip_types, Title, Text } from './Tooltip.styles'

const styles = {
  position: 'relative',
  cursor: 'default',
}

const useTooltip = () => {
  const [show, setShow] = useState(false)
  const uid = useRef(uuidv4())

  useEffect(() => {
    const parent = document.getElementById(uid.current).parentElement
    if (parent) {
      parent.style.position = styles.position
      parent.style.cursor = styles.cursor

      const handleMouseEvent = e => {
        return e.type === 'mouseenter' ? setShow(true) : setShow(false)
      }
      parent.addEventListener('mouseenter', handleMouseEvent)
      parent.addEventListener('mouseleave', handleMouseEvent)

      return () => {
        parent.removeEventListener('mouseenter', handleMouseEvent)
        parent.removeEventListener('mouseleave', handleMouseEvent)
      }
    }
  }, [])
  return { uid, show }
}

export const Tooltip = ({
  size,
  position,
  offsetX,
  offsetY,
  title,
  text,
  ...props
}) => {
  const [coordinates, setCoordinates] = useState({ x: 0, y: 0 })
  const { uid, show } = useTooltip()

  const StyledTooltipType = Tooltip_types[position]
    ? Tooltip_types[position]
    : Tooltip_types['bottom']

  useEffect(() => {
    const parent = document.getElementById(uid.current).parentElement
    const handleMousemove = e => {
      setCoordinates({
        x: e.clientX - parent.getBoundingClientRect().x + offsetX,
        y: e.clientY - parent.getBoundingClientRect().y + offsetY,
      })
    }
    if (parent && size === 'small') {
      parent.addEventListener('mousemove', handleMousemove)
      return () => parent.removeEventListener('mousemove', handleMousemove)
    }
  }, [uid, show, offsetX, offsetY])

  return size === 'small' ? (
    <StyledTooltip {...props} id={uid.current} show={show} {...coordinates}>
      {text && <Text>{text}</Text>}
    </StyledTooltip>
  ) : (
    <StyledTooltipType {...props} id={uid.current} show={show}>
      {title && <Title>{title}</Title>}
      {text && <Text>{text}</Text>}
    </StyledTooltipType>
  )
}

Tooltip.defaultProps = {
  position: 'bottom',
  size: 'large',
  offsetX: -5,
  offsetY: 17,
}

Tooltip.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string.isRequired,
  position: PropTypes.oneOf(['right', 'bottom']),
  size: PropTypes.oneOf(['small', 'large']),
  offsetX: PropTypes.number,
  offsetY: PropTypes.number,
}
