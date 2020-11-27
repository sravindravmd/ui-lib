import styled, { css } from 'styled-components'
import { theme } from '../../../shared'

const firstLevelTitleCss = css`
  font-size: ${theme.typography.body.fontSize};
  line-height: 1.375rem;
`
const secondLevelTitleCss = css`
  font-size: 1rem;
  line-height: ${theme.typography.caption.lineHeight};
  letter-spacing: 0.02em;
`
const thirdLevelTitleCss = css`
  font-size: 0.8125rem;
  line-height: ${theme.typography.link.lineHeight};
  letter-spacing: 0.02em;
`

const titleMap = new Map()
titleMap.set('1', firstLevelTitleCss)
titleMap.set('2', secondLevelTitleCss)
titleMap.set('3', thirdLevelTitleCss)

export const StyledTreeCard = styled.div`
  width: 200px;
  min-height: 80px;
  font-family: ${theme.typography.link.fontFamily};
  background: ${theme.palette.brand.primary.white};
  border-radius: 4px;
  box-shadow: 0px 5px 20px rgba(115, 127, 143, 0.1);
  border: 2px solid transparent;
  word-break: break-all;
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

export const StyledTitle = styled.div`
  color: ${theme.palette.brand.primary.charcoal};
  ${({ level }) => level && titleMap.get(`${level}`)}
`

export const StyledContent = styled.div`
  font-size: 0.8125rem;
  line-height: ${theme.typography.link.lineHeight};
  letter-spacing: 0.02em;
  color: ${theme.palette.brand.primary.gray};
  margin-top: 8px;
  display: flex;
  flex-direction: row;
`

export const StyledCardContent = styled.div`
  padding: 17px 26px 17px 21px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  &:focus {
    outline: none;
    border: none;
  }
`
