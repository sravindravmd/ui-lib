import React from 'react'
import PropTypes from 'prop-types'
import { StyledNotification } from './styles'
import { Popover } from '../../../atoms/popover'
import { Tab, TabItem } from '../../../atoms/tab/Tab'
import IconNotification from '../../../assets/images/icon-notification'
import ItemGroup from './ItemGroup'

const NotificationNav = ({ status }) => {
  return (
    <div className={`icon-notify ${status ? 'red-dot' : ''}`}>
      <IconNotification />
    </div>
  )
}

NotificationNav.propTypes = {
  status: PropTypes.bool,
}

const Notification = props => {
  return (
    <StyledNotification>
      <Popover
        showArrow={true}
        className='notification'
        placement='bottom'
        target={<NotificationNav status={true} />}
      >
        <div className='tabs-notify'>
          <Tab {...props}>
            <TabItem title='All'>
              <ItemGroup title='Today' />
              <ItemGroup title='Yesterday' />
            </TabItem>
            <TabItem title='Mentions'>
              <ItemGroup title='Today' />
            </TabItem>
            <TabItem title='Fabric Updates'>
              <ItemGroup title='Today' />
              <ItemGroup title='Yesterday' />
            </TabItem>
          </Tab>
        </div>
      </Popover>
    </StyledNotification>
  )
}

Notification.propTypes = {}

export default Notification
