import React, { useMemo } from 'react'
import PropTypes from 'prop-types'
import { v4 as uuidv4 } from 'uuid'
import { StyledRadio } from './Radio.styles'

export const Radio = ({
  label,
  value,
  checked,
  onChange,
  name,
  tabIndex = 0,
  disabled,
  className,
  ...other
}) => {
  const uid = useMemo(() => uuidv4(), [])

  return (
    <StyledRadio {...other} className={className}>
      <input
        type='radio'
        name={name || uid}
        className='radio-input'
        checked={checked || false}
        value={value}
        onChange={event => onChange(event)}
        id={uid}
        tabIndex={tabIndex}
        disabled={disabled}
      />
      <label htmlFor={uid} className='radio-label'>
        <span className='circle'></span>
        <span className='label'>{label}</span>
      </label>
      {/* <RadioFocus /> */}
    </StyledRadio>
  )
}

Radio.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  id: PropTypes.string,
  className: PropTypes.string,
  checked: PropTypes.bool,
  name: PropTypes.string,
  onChange: PropTypes.func,
  tabIndex: PropTypes.number,
  disabled: PropTypes.bool,
}

Radio.defaultProps = {
  checked: false,
}
