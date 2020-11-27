import React from 'react'
import ReactDOM from 'react-dom'
import { ModalWrapper, ModalOverlay } from './styles'
import Cross from '../../assets/images/cross'
import PropTypes from 'prop-types'
export const Modal = ({ isShowing, isCrossIconActive, onCancel, ...props }) =>
  isShowing
    ? ReactDOM.createPortal(
        <React.Fragment>
          <ModalOverlay />
          <ModalWrapper
            aria-modal
            aria-hidden
            tabIndex={-1}
            role='dialog'
            {...props}
          >
            <div className='content-wrapper'>
              <div className='modal'>
                {isCrossIconActive && (
                  <div className='cross-btn'>
                    <Cross onClick={onCancel} />
                    {/* <button>X</button> */}
                  </div>
                )}
                {props.children}
              </div>
            </div>
          </ModalWrapper>
        </React.Fragment>,
        document.body
      )
    : null

Modal.defaultProps = {
  size: 'large',
  isCrossIconActive: false,
}

Modal.propTypes = {
  isShowing: PropTypes.bool,
  isCrossIconActive: PropTypes.bool,
  size: PropTypes.oneOf(['small', 'large', 'medium']),
  onCancel: PropTypes.func.isRequired,
  className: PropTypes.string,
}
