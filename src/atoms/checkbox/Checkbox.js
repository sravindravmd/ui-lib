import React, { useState, useRef } from 'react'
import { v4 as uuidv4 } from 'uuid'
import PropTypes from 'prop-types'

import { StyledCheckboxWrapper, StyledText, StyledBox } from './Checkbox.styles'
import { Checkmark } from '../../assets/images'

export const Checkbox = ({
  initialState,
  label,
  name,
  value,
  onChange,
  tabIndex,
  disabled,
  className,
  ...props
}) => {
  const [selected, setSelected] = useState(initialState)
  const checkboxRef = useRef(uuidv4())

  const handleCheck = e => {
    setSelected(e.target.checked)
    onChange(e)
  }

  return (
    <StyledCheckboxWrapper
      tabIndex={tabIndex}
      disabled={disabled}
      className={className}
    >
      <StyledBox selected={selected}>
        <Checkmark opacity='0' />
      </StyledBox>
      <input
        {...props}
        type='checkbox'
        name={name || checkboxRef.current}
        onChange={handleCheck}
        value={value}
        checked={selected}
        data-testid='checkbox'
      />
      <StyledText>{label}</StyledText>
    </StyledCheckboxWrapper>
  )
}

Checkbox.defaultProps = {
  initialState: false,
  tabIndex: 0,
  disabled: false,
  className: '',
  onChange: () => {},
}

Checkbox.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string,
  initialState: PropTypes.bool,
  disabled: PropTypes.bool,
  tabIndex: PropTypes.number,
  className: PropTypes.string,
}
