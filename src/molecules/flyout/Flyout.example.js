import React, { useState } from 'react'
import styled from 'styled-components'
import { Flyout } from '.'
import { theme } from '../../shared'
import PropTypes from 'prop-types'
import { ButtonWithIcon } from '../../atoms'

const StyledFlyoutContent = styled.div`
  box-sizing: border-box;
  font-family: 'Gilroy-Medium';
  width: 200px;

  ul {
    list-style: none;
    padding: 0px;
    margin: 0px;

    li {
      a {
        font-size: 13px;
        line-height: 16px;
        letter-spacing: 0.02em;
        text-decoration: none;
        color: ${theme.palette.brand.primary.charcoal};
        padding: 10px 23px;
        display: block;
        box-sizing: border-box;
        transition: all 0.2s ease-in-out;

        &:hover {
          background-color: #f4f4f4;
        }
      }
    }
  }
`

export const FlyoutContent = () => {
  return (
    <StyledFlyoutContent>
      <ul>
        <li>
          <a href=''>Item</a>
        </li>
        <li>
          <a href=''>Item</a>
        </li>
        <li>
          <a href=''>Item</a>
        </li>
        <li>
          <a href=''>Item</a>
        </li>
      </ul>
    </StyledFlyoutContent>
  )
}

const Example = () => {
  const [toggle, setToggle] = useState(false)
  return (
    <>
      <ButtonWithIcon
        disabled={false}
        emphasis='high'
        icon='Add'
        iconPosition='left'
        isPrimary={false}
        isRoundIcon={false}
        onClick={() => setToggle(!toggle)}
        text='Add New'
        theme='light'
        id='target1'
      />
      <Flyout
        show={toggle}
        id='target1'
        className='target1'
        handleToggle={setToggle}
      >
        <FlyoutContent />
      </Flyout>
    </>
  )
}

Example.propTypes = {
  show: PropTypes.bool,
}

export default Example
