import styled, { css } from 'styled-components'
import { theme } from '../../shared'

export const StyledChip = styled.button`
  font-family: ${theme.typography.link.fontFamily};
  font-size: 0.8125rem;
  line-height: ${theme.typography.link.lineHeight};
  letter-spacing: 0.02em;
  background: ${`${theme.palette.brand.primary.gray}10`};
  color: ${theme.palette.brand.primary.charcoal};
  padding: 8px 10px 8px 16px;
  border-radius: 20px;
  white-space: nowrap;
  border: 1px solid transparent;
  outline: none;
  cursor: pointer;
  :hover {
    background: ${`${theme.palette.brand.primary.gray}30`};
  }
  :focus {
    border: 1px solid ${theme.palette.ui.cta.yellow};
  }
  :active {
    border: 1px solid transparent;
    background: ${theme.palette.ui.neutral.grey1};
    color: white;
    svg {
      path {
        fill: white;
      }
    }
  }
  ${({ disabled }) =>
    disabled &&
    css`
      opacity: 0.2;
      pointer-events: none;
    `}
`
export const StyledCloseButton = styled.span`
  margin-left: 10px;
  position: relative;
  top: 1px;
`
