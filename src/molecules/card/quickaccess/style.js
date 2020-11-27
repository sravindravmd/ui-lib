import styled from 'styled-components'
import { theme } from '../../../shared'

export const StyledQuickAccessCard = styled.div`
  width: 222px;
  min-height: 82px;
  background: ${theme.palette.brand.primary.white};
  border: 2px solid transparent;
  border-radius: 4px;
  :hover {
    ${({ selected }) =>
      !selected && `background: ${`${theme.palette.brand.primary.gray}10`};`}
  }
  :focus {
    outline: none;
    background: ${theme.palette.brand.primary.white};
    ${({ selected }) =>
      !selected && `border: 2px solid ${theme.palette.ui.cta.yellow};`}
  }
  ${({ selected }) =>
    selected && `border: 2px solid ${theme.palette.ui.cta.blue};`}
`

export const StyledThumbnail = styled.div`
  width: 40px;
  height: 40px;
  margin-right: 9px;
  border-radius: 4px;
  background: ${theme.palette.brand.primary.gray};
  display: flex;
  overflow: hidden;
  img {
    border-radius: 4px;
    max-width: 100%;
    font-size: ${theme.typography.caption.fontSize};
  }
`

export const StyledContent = styled.div`
  font-family: ${theme.typography.link.fontFamily};
  font-size: 0.8125rem;
  line-height: ${theme.typography.link.lineHeight};
  letter-spacing: 0.02em;
  text-align: left;
  width: 70%;
`

export const StyledTitle = styled.div`
  color: ${theme.palette.brand.primary.charcoal};
  margin-bottom: 4px;
  word-wrap: break-word;
`

export const StyledSubtitle = styled.div`
  color: ${theme.palette.brand.primary.gray};
  word-wrap: break-word;
`
export const StyledCardContent = styled.div`
  padding: 16px 0px 16px 13px;
  box-sizing: border-box;
  display: flex;
  &:focus {
    outline: none;
    border: none;
  }
`
