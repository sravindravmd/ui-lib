import styled from 'styled-components'
import { theme } from '../../../shared'

export const StyledCarouselCard = styled.div`
  font-family: ${theme.typography.link.fontFamily};
  width: 200px;
  background: ${theme.palette.brand.primary.white};
  border: 2px solid transparent;
  border-radius: 4px;
  :hover {
    ${({ selected }) => !selected && `background: #f1f2f4`}
  }

  &:focus {
    outline: none;
    background: ${theme.palette.brand.primary.white};
    ${({ selected }) =>
      !selected &&
      `
		border: 2px solid ${theme.palette.ui.cta.yellow};
		`}
  }

  ${({ selected }) =>
    selected && `border: 2px solid ${theme.palette.ui.cta.blue}`}
`

export const StyledImg = styled.img`
  max-width: 100%;
  height: 140px;
  background: ${theme.palette.brand.primary.gray};
  border-radius: 4px 4px 0 0;
  object-fit: cover;
`

export const StyledContent = styled.div`
  padding: 16px 20px;
  font-size: 0.8125rem;
  line-height: ${theme.typography.link.lineHeight};
  letter-spacing: 0.02em;
  box-sizing: border-box;
`

export const StyledTitle = styled.div`
  color: ${theme.palette.brand.primary.charcoal};
`

export const StyledSubtitle = styled.div`
  margin-top: 4px;
  color: ${theme.palette.brand.primary.gray};
  word-wrap: break-word;
`
export const StyledCardContent = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  &:focus {
    border: none;
    outline: none;
  }
`
