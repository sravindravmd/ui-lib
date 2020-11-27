import React, { useState, useCallback } from 'react'
import {
  StyledSwitchWrapper,
  StyledToggleSwitch,
  StyledCheckbox,
  Slider,
  Styledtext,
} from './Switch.styles'
import PropTypes from 'prop-types'

export const Switch = ({ initialState, label, ontoggle, ...props }) => {
  const [toggle, setToggle] = useState(initialState)

  const handleToggle = useCallback(
    e => {
      setToggle(e.target.checked)
      ontoggle(e.target.checked)
    },
    [ontoggle]
  )

  return (
    <StyledSwitchWrapper>
      <StyledToggleSwitch>
        <StyledCheckbox
          {...props}
          data-testid='toggle'
          type='checkbox'
          checked={toggle}
          value={toggle}
          onChange={e => handleToggle(e)}
        />
        <Slider toggle={toggle}></Slider>
      </StyledToggleSwitch>
      {label && <Styledtext>{label}</Styledtext>}
    </StyledSwitchWrapper>
  )
}

Switch.defaultProps = {
  label: '',
  ontoggle: () => {},
  initialState: false,
}

Switch.propTypes = {
  label: PropTypes.string,
  ontoggle: PropTypes.func,
  initialState: PropTypes.bool,
}
