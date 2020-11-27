import styled from 'styled-components'
import { theme } from '../../../shared'

export const StyledRootCard = styled.div`
  width: 271px;
  background: ${theme.palette.brand.primary.white};
  border: 2px solid transparent;
  border-radius: 4px;
  box-sizing: border-box;
  :hover {
    ${({ selected }) =>
      !selected && `background: ${`${theme.palette.brand.primary.gray}10`};`}
  }
  :focus {
    outline: none;
    background: ${theme.palette.brand.primary.white};
    ${({ selected }) =>
      !selected &&
      `
    border: 2px solid ${theme.palette.ui.cta.yellow};
		`}
  }
  ${({ selected }) =>
    selected && `border: 2px solid ${theme.palette.ui.cta.blue}`};
`

export const StyledRootHeader = styled.div`
  font-family: ${theme.typography.link.fontFamily};
  padding-bottom: ${theme.typography.link.fontSize};
  margin-bottom: ${theme.typography.link.lineHeight};
  border-bottom: 1px solid ${`${theme.palette.brand.primary.gray}30`};
`

export const StyledTitle = styled.div`
  font-size: ${theme.typography.body.fontSize};
  line-height: 1.375rem;
  color: ${theme.palette.brand.primary.charcoal};
  margin-bottom: 4px;
`

export const StyledSubtitle = styled.div`
  font-size: 0.8125rem;
  line-height: ${theme.typography.link.lineHeight};
  letter-spacing: 0.02em;
  color: ${theme.palette.brand.primary.gray};
`
export const StyledContent = styled.div`
  box-sizing: border-box;
  padding: 24px;
  &:focus {
    outline: none;
    border: none;
  }
`
