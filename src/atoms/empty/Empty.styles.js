import styled from 'styled-components'
import { theme } from '../../shared'

export const StyledEmptyWrapper = styled.div`
  background-color: ${theme.palette.ui.neutral.grey4};
  text-align: center;
  font-family: ${theme.typography.body};
  padding: 120px 0px;

  a {
    color: ${theme.palette.ui.cta.blue};
    text-decoration: none;
  }

  .primary-text {
    font-family: ${theme.typography.caption};
    text-transform: uppercase;
    font-size: 12px;
    color: ${theme.palette.ui.neutral.grey2};
    padding-bottom: 16px;
    white-space: pre-wrap;
  }

  .secondary-text {
    color: ${theme.palette.brand.primary.charcoal};
    font-size: 24px;
    padding-bottom: 54px;
    white-space: pre-wrap;
  }

  .button-block {
    padding-bottom: 140px;
    button {
      display: inline-block;
    }
  }

  .footer-content {
    font-family: ${theme.typography.caption};
    line-height: 16px;
    font-size: 13px;
  }
`
