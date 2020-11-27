import styled, { css } from 'styled-components'
import theme from '../../shared/theme'

const smallCss = css`
  max-width: 27.75rem;
`
const mediumCss = css`
  max-width: 48.6875rem;
`
const largeCss = css`
  max-width: 90%;
`
const maxSizeMap = new Map()
maxSizeMap.set('small', smallCss)
maxSizeMap.set('medium', mediumCss)
maxSizeMap.set('large', largeCss)

export const ModalOverlay = styled('div')`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1040;
  width: 100vw;
  height: 100vh;
  background-color: #121213;
  opacity: 0.75;
`
export const StyledModalHeader = styled('div')`
  display: flex;
  justify-content: flex-end;
  font-family: ${theme.typography.caption.fontFamily};
  margin-bottom: 3rem;
`
export const StyledModalFooter = styled('div')`
  display: flex;
  justify-content: flex-end;
  font-family: ${theme.typography.caption.fontFamily};
  margin-top: 3rem;
`
export const ModalWrapper = styled('div')`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1050;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  outline: 0;
  font-family: ${theme.typography.caption.fontFamily};
  .content-wrapper {
  }
  .cross-btn {
    position: absolute;
    top: 23px;
    right: 23px;
    ${({ size }) => maxSizeMap.get(`${size}`)};
    display: flex;
    padding-right: 3.125;
    justify-content: flex-end;
  }
  .modal {
    z-index: 100;
    background: white;
    position: relative;
    margin: 1.75rem auto;
    border-radius: 0.1875rem;
    ${({ size }) => maxSizeMap.get(`${size}`)};
  }

  .modal-header {
    display: flex;
    justify-content: flex-end;
  }

  .modal-close-button {
    display: inline-flex;
    align-items: center;
    margin-right: 8px;
    border: none;
  }

  button {
    display: block;
    padding: 0.5rem 1.25rem;
    font-size: 0.875rem;
  }
  .modal-titel {
    font-size: 1.125rem;
  }
  .modal-body {
    font-size: 0.8125rem;
    margin-top: 1.3125rem;
  }
`
