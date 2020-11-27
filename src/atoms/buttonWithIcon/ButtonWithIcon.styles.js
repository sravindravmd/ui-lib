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
    opacity: 1;
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
const highEmphasisCss = css`
  color: ${theme.palette.brand.primary.charcoal};
  background: transparent;
  border: ${({ isRoundIcon }) =>
    isRoundIcon
      ? `1px solid ${theme.palette.brand.primary.charcoal}`
      : `2px solid transparent`};
  &:hover {
    background: ${theme.palette.brand.primary.gray};
    color: ${theme.palette.brand.primary.white};
    border: 2px solid ${theme.palette.brand.primary.gray};
    .icon {
      fill: ${theme.palette.brand.primary.white};
    }
  }
  &:focus {
    background: ${theme.palette.brand.primary.white};
    border: 2px solid ${theme.palette.ui.cta.yellow};
    color: ${theme.palette.brand.primary.charcoal};
    .icon {
      fill: ${theme.palette.brand.primary.charcoal};
    }
  }
  &:active {
    background: ${theme.palette.ui.neutral.grey1};
    border: 2px solid ${theme.palette.ui.neutral.grey1};
    color: ${theme.palette.brand.primary.white};
    .icon {
      fill: ${theme.palette.brand.primary.white};
    }
  }
  ${({ disabled }) =>
    disabled &&
    `opacity: 0.2;
    background: transparent;
    border: 2px solid transparent;
    color: ${theme.palette.ui.neutral.grey2};
    .icon {
      fill: ${theme.palette.ui.neutral.grey2};
    }
  `}
`
const lowEmphasisCss = css`
  color: ${theme.palette.brand.primary.charcoal};
  background: ${theme.palette.brand.primary.white};
  border: 2px solid ${theme.palette.brand.primary.white};
  box-shadow: 0px 5px 20px rgba(115, 127, 143, 0.1);
  &:hover {
    background: ${theme.palette.brand.primary.gray};
    color: ${theme.palette.brand.primary.white};
    border: 2px solid ${theme.palette.brand.primary.gray};
    .icon {
      fill: ${theme.palette.brand.primary.white};
    }
  }
  &:focus {
    background: ${theme.palette.brand.primary.white};
    border: 2px solid ${theme.palette.ui.cta.yellow};
    color: ${theme.palette.brand.primary.charcoal};
    .icon {
      fill: ${theme.palette.brand.primary.charcoal};
    }
  }
  &:active {
    background: ${theme.palette.ui.neutral.grey1};
    border: 2px solid ${theme.palette.ui.neutral.grey1};
    color: ${theme.palette.brand.primary.white};
    .icon {
      fill: ${theme.palette.brand.primary.white};
    }
  }
  ${({ disabled }) =>
    disabled &&
    `opacity: 0.2;
    background: ${theme.palette.brand.primary.white};
    border: 2px solid ${theme.palette.brand.primary.white};
    color: ${theme.palette.ui.neutral.grey2};
    .icon {
      fill: ${theme.palette.ui.neutral.grey2};
    }
  `}
`
const emphasisMap = new Map()
emphasisMap.set('high', highEmphasisCss)
emphasisMap.set('low', lowEmphasisCss)

const SecondaryLightThemeCss = css`
  color: ${theme.palette.brand.primary.charcoal};
  background: ${theme.palette.brand.primary.white};
  border: 1px solid
    ${({ isRoundIcon }) =>
      isRoundIcon
        ? `${theme.palette.brand.primary.charcoal}`
        : `${theme.palette.brand.primary.white}`};
  &:hover {
    background: ${theme.palette.brand.primary.gray};
    color: ${theme.palette.brand.primary.white};
    border: 2px solid ${theme.palette.brand.primary.gray};
    .icon {
      fill: ${theme.palette.brand.primary.white};
    }
  }
  &:focus {
    background: ${theme.palette.brand.primary.white};
    border: 2px solid ${theme.palette.ui.cta.yellow};
    color: ${theme.palette.brand.primary.charcoal};
    .icon {
      fill: ${theme.palette.brand.primary.charcoal};
    }
  }
  &:active {
    background: ${theme.palette.ui.neutral.grey1};
    border: 2px solid ${theme.palette.ui.neutral.grey1};
    color: ${theme.palette.brand.primary.white};
    .icon {
      fill: ${theme.palette.brand.primary.white};
    }
  }
  ${({ disabled }) =>
    disabled &&
    `opacity: 0.2;
    background: ${theme.palette.brand.primary.white};
    border: 2px solid ${theme.palette.brand.primary.white};
    color: ${theme.palette.ui.neutral.grey2};
    .icon {
      fill: ${theme.palette.ui.neutral.grey2};
    }
  `}
`
const themePrimaryMap = new Map()
themePrimaryMap.set('none', PrimaryNoThemeCss)
themePrimaryMap.set('dark', PrimaryDarkThemeCss)
const themeSecondaryMap = new Map()
themeSecondaryMap.set('none', SecondaryNoThemeCss)
themeSecondaryMap.set('dark', SecondaryDarkThemeCss)
themeSecondaryMap.set('light', SecondaryLightThemeCss)

const PrimaryCss = css`
  color: ${theme.palette.brand.primary.white};
  background: ${theme.palette.ui.cta.blue};
  border: 2px solid ${theme.palette.ui.cta.blue};
  border-radius: 60px;
  cursor: pointer;
  outline: none;
  box-shadow: none;
  ${({ theme }) => themePrimaryMap.get(`${theme}`)};
  .icon {
    fill: ${theme.palette.brand.primary.white};
  }
`
const SecondaryCss = css`
  color: ${theme.palette.brand.primary.charcoal};
  background: ${theme.palette.brand.primary.white};
  border: 1px solid ${theme.palette.brand.primary.charcoal};
  border-radius: 60px;
  cursor: pointer;
  outline: none;
  box-shadow: none;
  ${({ theme }) => themeSecondaryMap.get(`${theme}`)};
  ${({ emphasis }) => emphasisMap.get(`${emphasis}`)};
  .icon {
    fill: ${theme.palette.brand.primary.charcoal};
  }
`

export const StyledIconButton = styled.button`
  display: inline-flex;
  max-height: 36px;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  font-size: 14px;
  line-height: 16px;
  padding: ${({ isRoundIcon }) => (isRoundIcon ? '10px' : '8.25px 20px')};
  font-family: Gilroy-Medium;
  text-align: center;
  ${({ isPrimary }) => (isPrimary ? PrimaryCss : SecondaryCss)}
  ${({ disabled }) =>
    disabled &&
    `opacity: 0.2;
   pointer-events: none;
  `}
  .right-icon {
    margin-left: 5px;
  }
  .left-icon {
    margin-right: 10px;
  }

  ${({ isRoundIcon }) => isRoundIcon && `width: 36px; height: 36px`}
`
