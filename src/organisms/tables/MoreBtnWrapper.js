import React, { useState, useRef } from 'react'
import PropTypes from 'prop-types'
import { Flyout } from '../../molecules'
import { FlyoutContent } from '../../molecules/flyout/mock'
import Dotes from '../../assets/images/dots'
import useClickOutside from '../../hooks/click-outside'

export const MoreBtnWrapper = ({ id }) => {
  const [showFlyout, setShowFlyout] = useState(false)
  const clickRef = useRef()

  useClickOutside(
    clickRef,
    () => {
      setShowFlyout(false)
    },
    showFlyout
  )
  return (
    <>
      <span
        className='dotes'
        ref={clickRef}
        id={'flyout' + id}
        onClick={() => {
          setShowFlyout(!showFlyout)
        }}
      >
        <Dotes />
      </span>
      <span style={{ position: 'absolute', top: '50px', zIndex: 1, right: 0 }}>
        <Flyout
          show={showFlyout}
          id={'flyout' + id}
          handleToggle={setShowFlyout}
        >
          <FlyoutContent />
        </Flyout>
      </span>
    </>
  )
}

MoreBtnWrapper.propTypes = {
  id: PropTypes.string,
}
