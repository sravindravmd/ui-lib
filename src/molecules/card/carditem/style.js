import styled from 'styled-components'
import { theme } from '../../../shared'

/* Detail Item styles */
export const StyledPen = styled.span`
  position: relative;
  top: 2px;
  margin-left: 12px;
`
export const StyledItemDetailTitle = styled.div`
  max-width: 60%;
  word-wrap: break-word;
`

export const StyledItemProperty = styled.div`
  width: 30%;
  word-wrap: break-word;
`
export const StyledItemDetail = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 0.8125rem;
  line-height: ${theme.typography.link.lineHeight};
  letter-spacing: 0.02em;
  border-bottom: 1px solid ${`${theme.palette.brand.primary.gray}50`};
  padding: 0 0 8px 0;
  box-sizing: border-box;
  margin-top: 16px;
`
/* Detail Item styles */

/* General Item styles */
export const StyledItemGeneral = styled.div`
  position: relative;
  box-sizing: border-box;
  display: flex;
  width: 100%;
  margin-bottom: 20px;
  cursor: default;
  ${({ isActionItem }) =>
    isActionItem &&
    `
    border-bottom:1px solid #737F8F50;
  `}
  :last-child {
    border: none;
    margin: 0;
  }
`

export const StyledThumbnail = styled.div`
  width: 36px;
  height: 36px;
  background: ${theme.palette.brand.primary.gray};
  margin-right: 14px;
  border-radius: 4px;
  display: flex;
  overflow: hidden;
  img {
    border-radius: 4px;
    max-width: 100%;
  }
  ${({ isActionItem }) => !isActionItem && `align-self:center `}
`

export const StyledContent = styled.div`
  padding: ${({ isActionItem }) => (isActionItem ? '0 0 17px 0' : '3px 0')};
  font-family: ${theme.typography.link.fontFamily};
  font-size: 0.8125rem;
  line-height: ${theme.typography.link.lineHeight};
  letter-spacing: 0.02em;
  width: 70%;
  box-sizing: border-box;
`
export const StyledTitle = styled.div`
  margin-bottom: 3px;
  color: ${theme.palette.brand.primary.charcoal};
`

export const StyledSubtitle = styled.div`
  color: ${theme.palette.brand.primary.gray};
`

export const StyledArrow = styled.div`
  margin-left: auto;
  display: flex;
  align-items: center;
`
/* General Item styles */

/* Root Category Item styles */
export const StyledCategoryItem = styled.div`
  font-family: ${theme.typography.link.fontFamily};
  font-size: 0.8125rem;
  line-height: ${theme.typography.link.lineHeight};
  letter-spacing: 0.02em;
  color: ${theme.palette.brand.primary.charcoal};
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
  :last-child {
    margin: 0;
  }
`

export const StyledText = styled.div`
  width: 50%;
  text-align: left;
  word-break: break-all;
`

export const StyledValue = styled.div`
  width: 30%;
  text-align: right;
  word-break: break-all;
`
/* Root Category Item styles */
