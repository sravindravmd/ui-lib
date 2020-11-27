import React from 'react'
import { SnakeBar } from './'
import styled from 'styled-components'
import { Button } from '../../atoms'

export default {
  title: 'molecules/Snakebar',
  component: SnakeBar,
  argTypes: {
    onClick: { action: 'clicked' },
  },
}

const Template = args => <SnakeBar {...args} />

export const SuccessUI = Template.bind({})
SuccessUI.args = {
  alertIcon: 'icon-success',
  dismissable: true,
  kind: 'success',
  label: 'Image added succesfully',
  show: true,
  withIcon: true,
  onDismiss: () => {},
}

export const AlertUI = Template.bind({})
AlertUI.args = {
  alertIcon: 'icon-alert',
  dismissable: true,
  kind: 'alert',
  label: 'Something went wrong. Please try again',
  show: true,
  withIcon: true,
  onDismiss: () => {},
}

export const MessageUI = Template.bind({})
MessageUI.args = {
  dismissable: true,
  kind: 'message',
  label: 'New updates on PIM available',
  show: true,
  onDismiss: () => {},
}

const StyledContent = styled.div`
  display: flex;
  align-items: center;

  .col {
    &.left {
      flex-basis: 100%;

      p {
        margin: 0px;
        color: #737f8f;

        span {
          color: #121213;
        }
      }
    }
    &.right {
      display: flex;
      align-items: center;
      justify-content: space-between;

      button {
        margin-left: 8px;
        white-space: nowrap;
      }
    }
  }
`

export const NotificationUI = args => (
  <SnakeBar {...args}>
    <StyledContent>
      <div className='col left'>
        <p>
          <span>10 SKU</span> prices have been updated.{' '}
        </p>
      </div>
      <div className='col right'>
        <Button text='View items in Offers' size='small' isPrimary={false} />
        <Button text='OK' size='small' />
      </div>
    </StyledContent>
  </SnakeBar>
)
NotificationUI.args = {
  kind: 'notification',
  show: true,
}
