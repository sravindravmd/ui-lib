import React from 'react'
import styled from 'styled-components'
import { Popover } from '.'
import { theme } from '../../shared'
import PropTypes from 'prop-types'
import { Link } from '../link/Link'

const StyledPopoverContent = styled.div`
  padding: 36px 36px 15px;
  box-sizing: border-box;
  font-family: 'Gilroy-Regular';

  .header {
    display: flex;
    padding: 0px 0px 30px;

    .avtar {
      width: 40px;

      span {
        display: block;
        background-color: ${theme.palette.ui.neutral.grey2};
        border-radius: 50%;
        width: 40px;
        height: 40px;
      }
    }
    .title {
      padding-left: 20px;

      strong {
        font-size: 18px;
        line-height: 150%;
        color: ${theme.palette.brand.primary.charcoal};
        font-family: 'Gilroy-SemiBold';
      }
      p {
        margin: 0px;
        color: ${theme.palette.brand.primary.gray};
        letter-spacing: 0.02em;
        font-size: 13px;
      }
    }
  }

  ul {
    list-style: none;
    padding: 0px;
    margin: 0px;

    li {
      a {
        font-size: 16px;
        line-height: 18px;
        letter-spacing: 0.02em;
        text-decoration: none;
        color: ${theme.palette.brand.primary.charcoal};
        padding: 10px 0px;
        display: block;
      }
    }
  }
`
export const PopoverContent = () => {
  return (
    <StyledPopoverContent>
      <div className='header'>
        <div className='avtar'>
          <span></span>
        </div>
        <div className='title'>
          <strong>Tiffany Doe</strong>
          <p>tiffany.doe@jcrew.com</p>
        </div>
      </div>
      <ul>
        <li>
          <a href=''>Edit Profile</a>
        </li>
        <li>
          <a href=''>Preferences</a>
        </li>
        <li>
          <a href=''>Logout</a>
        </li>
      </ul>
    </StyledPopoverContent>
  )
}
const Example = ({ showArrow, className, placement }) => {
  return (
    <div style={{ position: 'relative', width: '150px', margin: '300px auto' }}>
      <Popover
        showArrow={showArrow}
        className={className}
        placement={placement}
        target={<Link text='Link here to hover over' href='/' />}
      >
        <PopoverContent />
      </Popover>
    </div>
  )
}

Example.propTypes = {
  showArrow: PropTypes.bool,
  className: PropTypes.string,
  placement: PropTypes.string,
}

export default Example
