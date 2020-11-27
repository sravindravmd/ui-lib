import styled from 'styled-components'
import { theme } from '../../shared'

export const StyledInputComponent = styled.div`
  .error {
    margin-top: 4px;
    margin-left: 1px;
    letter-spacing: 0.02em;
    font-size: 0.812rem;
    color: ${theme.palette.ui.cta.red};
  }
  flex: 1;
  box-sizing: border-box;
  font-family: ${theme.typography.caption};
`

export const StyledInputContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  position: relative;

  * {
    box-sizing: border-box;
    width: 100%;
  }

  &.boxed {
    .input {
      &__label {
        padding-bottom: 5px;
      }
    }
  }

  &.container_error {
    input {
      border-color: ${theme.palette.ui.cta.red};
    }
  }

  .input__parent {
    flex-wrap: wrap;
    display: flex;
    width: 100%;
    height: 100%;
    position: relative;
    flex: 0 1 auto;
    padding: 0 0.75rem;
  }

  .input {
    &__label {
      font-size: 0.812rem;
      font-weight: normal;
      display: block;
      z-index: 1;
      text-overflow: ellipsis;
      box-sizing: border-box;
      color: ${theme.palette.ui.neutral.grey2};

      &--hidden {
        position: absolute;
        text-indent: -9999px;
      }
    }

    &__wrapper {
      position: relative;

      .icon {
        position: absolute;
        width: 20px;
        height: auto;
        top: 50%;
        transform: translateY(-50%);
        left: 2px;

        svg {
          vertical-align: top;
        }
      }
    }

    &__show {
      cursor: pointer;
      font-size: 0.675rem;
      text-decoration: underline;
      line-height: 1;
      font-weight: 300;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      right: 20px;
    }
  }

  &.icon-left {
    input {
      padding-left: 35px;
    }
  }

  &.sm {
    &.boxed {
      &.icon-left {
        .icon {
          .left {
            left: 10px;
          }
        }
      }
    }

    &.icon-left {
      .icon {
        width: 14px;
        left: 10px;
      }
    }
    input {
      padding-top: 8px;
      padding-bottom: 9px;
    }
  }
`

export const StyledInput = styled.input`
  border: none;
  border-bottom: 1px #121213 solid;
  background-clip: padding-box;
  display: block;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  width: 100%;
  padding: 10px 0px 10px;
  word-break: normal;
  line-height: inherit;
  transition: all 0.2s ease-out;
  font-family: sans-serif;
  outline: none;

  &:disabled {
    pointer-events: none;
    opacity: 0.5;
    color: inherit;
  }

  /* &:focus {
    outline: none;
    border-color: #197bbd;
    -webkit-box-shadow: 0 0 0 1px #197bbd;
    box-shadow: 0 0 0 1px #197bbd;
  } */

  ::placeholder {
    opacity: 0.5;
    color: inherit;
  }

  &.custom {
    padding: 0px;
    margin: 0px;

    &:focus {
      border: none;
      padding: none;
    }
  }

  ${props =>
    props.boxed &&
    `
      border: 1px solid ${theme.palette.brand.primary.charcoal};
      width: inherit;
      font-size: 0.812rem;
      padding: 15px 14px;
      border-radius: 4px;
      box-sizing: border-box;
  `}
`
