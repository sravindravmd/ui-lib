import React from 'react'
import styled from 'styled-components'
import { theme } from '../../shared'

const StyledFlyoutContent = styled.div`
  box-sizing: border-box;
  font-family: 'Gilroy-Regular';
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
