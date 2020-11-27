import React from 'react'
import PropTypes from 'prop-types'
import { StyledIconButton } from './ButtonWithIcon.styles'
import { DownArrow, Add, Close, Edit } from '../../assets/images'
const Icons = { DownArrow, Add, Close, Edit }
export const ButtonWithIcon = ({
  text,
  icon,
  iconPosition,
  isRoundIcon,
  ...rest
}) => {
  const Icon = Icons[icon]

  if (isRoundIcon)
    return (
      <StyledIconButton {...rest} isRoundIcon={isRoundIcon}>
        {Icon && <Icon className='icon' />}
      </StyledIconButton>
    )
  return (
    <StyledIconButton {...rest}>
      {iconPosition && iconPosition === 'left' && Icon && (
        <Icon className='icon left-icon' />
      )}
      {text}
      {iconPosition && iconPosition === 'right' && Icon && (
        <Icon className='icon right-icon' />
      )}
    </StyledIconButton>
  )
}

ButtonWithIcon.defaultProps = {
  disabled: false,
  isPrimary: true,
  theme: 'none',
  emphasis: 'none',
  isRoundIcon: false,
}

ButtonWithIcon.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  isPrimary: PropTypes.bool,
  isRoundIcon: PropTypes.bool,
  theme: PropTypes.oneOf(['none', 'dark', 'light']),
  emphasis: PropTypes.oneOf(['none', 'high', 'low']),
  icon: PropTypes.string,
  iconPosition: PropTypes.string,
}
