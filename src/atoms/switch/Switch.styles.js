import styled from 'styled-components'
import { theme } from '../../shared'

export const StyledSwitchWrapper = styled.label`
  box-sizing: border-box;
  display: inline-flex;
  align-items: center;
  font-family: ${theme.typography.link.fontFamily};
  font-size: ${theme.typography.link.fontSize};
  line-height: ${theme.typography.link.lineHeight};
  color: ${theme.palette.brand.primary.charcoal};
  cursor: pointer;
`

export const StyledToggleSwitch = styled.span`
  position: relative;
  display: inline-block;
  width: 38px;
  height: 21px;
`

export const StyledCheckbox = styled.input`
  opacity: 0;
  width: 0;
  height: 0;
`

export const Slider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 30px;
  background-color: ${theme.palette.brand.primary.gray};
  transition: all 250ms ease;

  ${({ toggle }) =>
    toggle &&
    `
      background-color:${theme.palette.ui.cta.blue};
    `}

  :before {
    position: absolute;
    content: '';
    height: 16px;
    width: 16px;
    left: 3px;
    top: 2px;
    border-radius: 50%;
    background-color: ${theme.palette.brand.primary.white};
    transition: all 250ms ease;

    ${({ toggle }) =>
      toggle &&
      `
        transform: translateX(16px);
      `}
  }
`
export const Styledtext = styled.span`
  margin-left: 8px;
`
