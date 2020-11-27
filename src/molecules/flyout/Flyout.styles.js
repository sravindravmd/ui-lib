import styled from 'styled-components'
import { theme } from '../../shared'

export const StyledFlyout = styled.div`
  position: relative;

  &.active {
    .content {
      display: block;
    }
  }

  .content {
    display: none;
    position: absolute;

    .content-inner {
      border: 1px solid ${theme.palette.ui.neutral.grey5};
      box-sizing: border-box;
      box-shadow: 0px 6px 16px rgba(115, 127, 143, 0.16);
      border-radius: 4px;
      background-color: ${theme.palette.brand.primary.white};
      position: relative;
      top: 5px;
    }
  }
`
