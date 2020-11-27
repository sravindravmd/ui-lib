import styled from 'styled-components'
import { theme } from '../../../shared'

export const StyledCard = styled.div`
  font-family: ${theme.typography.link.fontFamily};
  width: 337px;
  padding: 16px 27px 0px 32px;
  display: flex;
  flex-direction: column;
  border: 2px solid ${`${theme.palette.brand.primary.gray}20`};
  border-radius: 4px;
  background: ${theme.palette.brand.primary.white};
  box-sizing: border-box;
  :hover {
    background: ${`${theme.palette.brand.primary.gray}20`};
  }
  :focus {
    outline: none;
    background: ${theme.palette.brand.primary.white};
    border: 2px solid ${theme.palette.ui.cta.yellow};
  }
  :active {
    background: ${theme.palette.brand.primary.white};
    border: 2px solid ${`${theme.palette.brand.primary.gray}20`};
    outline: none;
  }
`

export const StyledCaret = styled.div`
  display: flex;
  transition: all 0.3s ease-in-out;
  transform-origin: center center;
  ${({ expand }) =>
    expand &&
    `
    transform:rotateZ(180deg);
  `}
`

export const StyledCardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: ${theme.typography.body.fontSize};
  line-height: ${theme.typography.body.lineHeight};
  padding-bottom: 14px;
`

export const StyledHeading = styled.div`
  word-break: break-all;
`

export const StyledCardContent = styled.div`
  padding-bottom: 74px;
  display: ${({ expand }) => (expand ? 'block' : 'none')};
`
