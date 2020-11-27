import styled, { css } from 'styled-components'
import { theme } from '../../../shared'

const generalCardCss = css`
  min-height: 252px;
`
const withActionCardCss = css`
  min-height: 345px;
`

const cardMap = new Map()
cardMap.set('general', generalCardCss)
cardMap.set('withActionItem', withActionCardCss)

export const StyledCard = styled.div`
  box-sizing: border-box;
  width: 337px;
  background: ${theme.palette.brand.primary.white};
  border: 2px solid transparent;
  border-radius: 4px;
  padding: 16px 30px 16px 30px;
  :focus {
    outline: none;
    border: 2px solid ${theme.palette.ui.cta.yellow};
  }
  ${({ variant }) => variant && cardMap.get(`${variant}`)}
`

export const StyledCardHeading = styled.div`
  font-family: ${theme.typography.link.fontFamily};
  font-size: ${theme.typography.body.fontSize};
  line-height: ${theme.typography.body.lineHeight};
  color: ${theme.palette.brand.primary.charcoal};
  margin-bottom: 16px;
  text-align: left;
`
