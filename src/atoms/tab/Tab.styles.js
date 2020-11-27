import styled, { css } from 'styled-components'
import { theme } from '../../shared'

const VerticalTabNavigationCss = css`
  flex-direction: column;
  align-self: flex-start;
`
const HorizonalTabNavigationCss = css`
  flex-direction: row;
`

const VerticalTabItemCss = css`
  font-size: ${theme.typography.body.fontSize};
  line-height: ${theme.typography.body.lineHeight};
  display: flex;
  align-items: center;
  width: 125px;
  margin-bottom: 30px;
  span {
    border-bottom: 2px solid transparent;
  }
`
const HorizontaltabItemCss = css`
  margin-right: 15px;
  font-size: 1rem;
  line-height: ${theme.typography.caption.lineHeight};
  letter-spacing: 0.02em;
  display: flex;
  align-self: flex-end;
  border-bottom: 2px solid transparent;
`

const VerticalActiveTabCss = css`
  color: ${theme.palette.brand.primary.charcoal};
  span {
    border-bottom: 2px solid #0d62ff;
  }
`

const HorizontalActiveTabCss = css`
  color: ${theme.palette.brand.primary.charcoal};
  border-bottom: 2px solid #0d62ff;
`

const tabNavigationMap = new Map()
tabNavigationMap.set('horizontal', HorizonalTabNavigationCss)
tabNavigationMap.set('vertical', VerticalTabNavigationCss)

const tabItemMap = new Map()
tabItemMap.set('horizontal', HorizontaltabItemCss)
tabItemMap.set('vertical', VerticalTabItemCss)

const activeTabMap = new Map()
activeTabMap.set('horizontal', HorizontalActiveTabCss)
activeTabMap.set('vertical', VerticalActiveTabCss)

export const StyledTabContainer = styled.div`
  font-family: 'Gilroy-Medium';
  display: flex;
  flex-direction: ${({ variant }) =>
    variant === 'vertical' ? 'row' : 'column'};
`

export const TabHeading = styled.div`
  margin-bottom: 24px;
  font-size: ${theme.typography.subtitle2.fontSize};
  line-height: 1.8125rem;
  color: ${theme.palette.brand.primary.charcoal};
`

export const TabNavigation = styled.div`
  display: flex;
  ${({ variant }) => tabNavigationMap.get(`${variant}`)}
`

export const StyledTabItem = styled.div`
  color: ${theme.palette.ui.neutral.grey2};
  ${({ variant }) => tabItemMap.get(`${variant}`)}
  ${({ active, variant }) => active && activeTabMap.get(`${variant}`)}
  ${({ disabled }) =>
    disabled &&
    `color:${theme.palette.brand.primary.charcoal};
     opacity:0.4;
     pointer-events:none;
  `}
  white-space: pre-wrap;
  text-align: left;
  cursor: pointer;
  :hover {
    color: ${theme.palette.ui.neutral.grey1};
  }
`
