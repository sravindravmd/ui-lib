import React from 'react'
import PropTypes from 'prop-types'
import { StyledUserAction, StyledPopoverContent } from './styles'
import { Popover } from '../../../atoms/popover'

const UserNav = ({ userName }) => {
  return (
    <div className='user-actions'>
      <div className='avatar'></div>
      <div className='user-name'>{userName}</div>
    </div>
  )
}

UserNav.propTypes = {
  userName: PropTypes.string,
}

const UserAction = () => {
  return (
    <StyledUserAction>
      <Popover
        showArrow={true}
        className='profile'
        placement='bottom'
        target={<UserNav userName='Tiffany Doe' />}
      >
        <StyledPopoverContent>
          <div className='header'>
            <div className='avatar'>
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
      </Popover>
    </StyledUserAction>
  )
}

UserAction.propTypes = {}

export default UserAction
