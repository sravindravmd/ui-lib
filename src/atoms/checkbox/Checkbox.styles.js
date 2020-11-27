import styled, { css } from 'styled-components'
import { theme } from '../../shared'

const disbaledStyle = css`
  pointer-events: none;
  opacity: 0.2;
`

const selectedStyle = css`
  background: ${theme.palette.ui.cta.blue};
  border: 1px solid transparent;
  svg {
    opacity: 1;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`

export const StyledCheckboxWrapper = styled.label`
  font-family: ${theme.typography.link.fontFamily};
  color: black;
  padding: 9px 16px;
  display: inline-flex;
  align-items: center;
  box-sizing: border-box;
  border: 1px solid transparent;
  border-radius: 2px;
  user-select: none;
  input {
    width: 0px;
    height: 0px;
    margin: 0;
    padding: 0;
  }
  &:hover {
    background: ${theme.palette.brand.primary.gray}10;
  }
  &:focus {
    outline: none;
    border: 1px solid ${theme.palette.ui.cta.yellow};
    background: ${theme.palette.brand.primary.white};
  }
  &:active {
    background: ${theme.palette.brand.primary.white};
    border: 1px solid transparent;
  }
  &:active > span:first-child {
    background: ${theme.palette.ui.neutral.grey1};
  }
  ${({ disabled }) => disabled && disbaledStyle};
`

export const StyledText = styled.span`
  margin-left: 6px;
  font-size: 0.8125rem;
  line-height: ${theme.typography.link.lineHeight};
  letter-spacing: 0.02em;
`

export const StyledBox = styled.span`
  position: relative;
  width: 16px;
  height: 16px;
  border: 1px solid ${theme.palette.ui.neutral.grey1};
  border-radius: 2px;
  ${({ selected }) => selected && selectedStyle}
`
