import { css } from 'styled-components'
import theme from './theme.js'

export default {
  all: (...args) => css(...args),
  small: (...args) => css`
    @media (max-width: ${theme.breakpoints.values.md}px) {
      ${css(...args)};
    }
  `,
  gtSmall: (...args) => css`
    @media (min-width: ${theme.breakpoints.values.md + 1}px) {
      ${css(...args)};
    }
  `,
  medium: (...args) => css`
    @media (min-width: ${theme.breakpoints.values.md +
      1}px and max-width ${theme.breakpoints.values.lg}px) {
      ${css(...args)}
    }
  `,
  gtMedium: (...args) => css`
    @media (min-width: ${theme.breakpoints.values.md + 1}px) {
      ${css(...args)};
    }
  `,
  large: (...args) => css`
    @media (min-width: ${theme.breakpoints.values.lg + 1}px) {
      ${css(...args)};
    }
  `,
  gtLarge: (...args) => css`
    @media (min-width: ${theme.breakpoints.values.lg + 1}px) {
      ${css(...args)};
    }
  `,
}
