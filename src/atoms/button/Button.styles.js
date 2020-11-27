import styled, { css } from 'styled-components'
import { theme } from '../../shared/index'

const PrimaryNoThemeCss = css`
  &:hover {
    opacity: 0.8;
  }
  &:focus {
    border: 2px solid ${theme.palette.ui.cta.yellow};
  }
  &:active {
    background: ${theme.palette.ui.neutral.grey1};
    border: 2px solid ${theme.palette.ui.neutral.grey1};
    opacity: 1;
  }
`
const SecondaryNoThemeCss = css`
  &:hover {
    opacity: 0.8;
    background: ${theme.palette.brand.primary.gray};
    border: 2px solid ${theme.palette.brand.primary.gray};
    color: ${theme.palette.brand.primary.white};
  }
  &:focus {
    border: 2px solid ${theme.palette.ui.cta.yellow};
  }
  &:active {
    background: ${theme.palette.ui.neutral.grey1};
    border: 2px solid ${theme.palette.ui.neutral.grey1};
  }
  ${({ disabled }) =>
    disabled &&
    `background: ${theme.palette.brand.primary.charcoal};
     color: ${theme.palette.brand.primary.white};
  `}
`
const PrimaryDarkThemeCss = css`
  &:hover {
    background: ${theme.palette.brand.primary.white};
    color: ${theme.palette.brand.primary.charcoal};
    border: 2px solid ${theme.palette.brand.primary.white};
  }
  &:focus {
    background: ${theme.palette.brand.primary.white};
    border: 2px solid ${theme.palette.ui.cta.yellow};
    color: ${theme.palette.brand.primary.charcoal};
  }
  &:active {
    background: ${theme.palette.ui.neutral.grey1};
    border: 2px solid ${theme.palette.ui.neutral.grey1};
    color: ${theme.palette.brand.primary.white};
  }
  ${({ disabled }) =>
    disabled &&
    `opacity: 0.15;
    background: ${theme.palette.ui.neutral.grey1};
    border: 2px solid ${theme.palette.ui.neutral.grey1};
    color: ${theme.palette.brand.primary.white};
  `}
`
const SecondaryDarkThemeCss = css`
  color: ${theme.palette.brand.primary.white};
  background: ${theme.palette.brand.primary.charcoal};
  border: 2px solid ${theme.palette.brand.primary.white};
  &:hover {
    background: ${theme.palette.brand.primary.white};
    color: ${theme.palette.brand.primary.charcoal};
    border: 2px solid ${theme.palette.brand.primary.white};
  }
  &:focus {
    background: ${theme.palette.brand.primary.white};
    border: 2px solid ${theme.palette.ui.cta.yellow};
    color: ${theme.palette.brand.primary.charcoal};
  }
  &:active {
    background: ${theme.palette.ui.neutral.grey1};
    border: 2px solid ${theme.palette.ui.neutral.grey1};
    color: ${theme.palette.brand.primary.white};
  }
  ${({ disabled }) =>
    disabled &&
    `opacity: 0.2;
    background: ${theme.palette.brand.primary.charcoal};
    border: 2px solid ${theme.palette.ui.neutral.grey2};
    color: ${theme.palette.ui.neutral.grey2};
  `}
`
const themePrimaryMap = new Map()
themePrimaryMap.set('none', PrimaryNoThemeCss)
themePrimaryMap.set('dark', PrimaryDarkThemeCss)
const themeSecondaryMap = new Map()
themeSecondaryMap.set('none', SecondaryNoThemeCss)
themeSecondaryMap.set('dark', SecondaryDarkThemeCss)

const PrimaryCss = css`
  color: ${theme.palette.brand.primary.white};
  background: ${theme.palette.ui.cta.blue};
  border: 2px solid ${theme.palette.ui.cta.blue};
  border-radius: 60px;
  cursor: pointer;
  outline: none;
  box-shadow: none;
  display: flex;
  justify-content: center;
  align-items: center;
  ${({ theme }) => themePrimaryMap.get(`${theme}`)};
`
const SecondaryCss = css`
  color: ${theme.palette.brand.primary.charcoal};
  background: ${theme.palette.brand.primary.white};
  border: 1px solid ${theme.palette.brand.primary.charcoal};
  border-radius: 60px;
  cursor: pointer;
  outline: none;
  box-shadow: none;
  display: flex;
  ${({ theme }) => themeSecondaryMap.get(`${theme}`)};
`
const smallCss = css`
  ${({ isPrimary }) =>
    isPrimary
      ? `font-size: 14px;  line-height: 16px; padding: 10px 20px;`
      : `font-size: 14px;  line-height: 16px; padding: 10px 14px;`}
`
const largeCss = css`
  ${({ isPrimary }) =>
    isPrimary
      ? `font-size: 18px; line-height: 22px; padding: 14px 27px; height: 50px;`
      : ` font-size: 18px; line-height: 22px; padding: 0px 20px; height: 36px;`}
`
const sizeMap = new Map()
sizeMap.set('small', smallCss)
sizeMap.set('large', largeCss)

export const StyledButton = styled.button`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  ${({ size }) => sizeMap.get(`${size}`)};
  font-family: Gilroy-Medium;
  text-align: center;
  ${({ isPrimary }) => (isPrimary ? PrimaryCss : SecondaryCss)}
  ${({ disabled }) =>
    disabled &&
    `opacity: 0.2;
   pointer-events: none;
  `}
`
