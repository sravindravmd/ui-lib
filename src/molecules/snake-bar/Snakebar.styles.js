import styled from 'styled-components'
import { theme } from '../../shared'

export const StyledSnakebar = styled.div`
  font-family: 'Gilroy-Regular';
  padding: 10px 24px;
  box-sizing: border-box;
  border-radius: 10px;
  font-size: 1rem;
  letter-spacing: 0.02em;
  height: 60px;

  .dismiss {
    path {
      fill: ${theme.palette.brand.primary.charcoal};
    }
  }

  &.success {
    background-color: rgba(0, 138, 30, 0.15);
  }

  &.alert {
    background-color: rgba(213, 0, 0, 0.15);
  }

  &.notification {
    background-color: ${theme.palette.brand.primary.white};
    box-shadow: 0px 5px 20px rgba(115, 127, 143, 0.1);
  }

  &.message {
    background-color: ${theme.palette.brand.primary.charcoal};
    color: ${theme.palette.brand.primary.white};
    box-shadow: 0px 5px 20px rgba(115, 127, 143, 0.1);

    .dismiss {
      path {
        fill: ${theme.palette.brand.primary.white};
      }
    }
  }

  .row {
    display: flex;
    align-items: center;
    height: 100%;

    svg {
      vertical-align: top;
    }

    .icon {
      margin-right: 16px;
    }

    .dismiss {
      margin-left: 16px;
      cursor: pointer;
    }

    .col-middle {
      flex: 0 1 100%;
    }
  }
`
