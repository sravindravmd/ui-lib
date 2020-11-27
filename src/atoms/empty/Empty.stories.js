import React from 'react'
import { Empty } from '.'

export default {
  title: 'atoms/Empty',
  component: Empty,
}

const Footer = () => (
  <p>
    Learn more about master hierarchys <br /> in our{' '}
    <a href=''>Knowledge base</a>
  </p>
)

const Template = args => <Empty {...args} />
export const Primary = Template.bind({})
Primary.args = {
  className: 'empty',
  primaryText: 'You have no master hierarchy',
  secondaryText: 'Start by adding your master h’s and add\nany published h’s',
  buttonProps: {
    text: 'Import Master hierarchy',
    size: 'small',
  },
  footerContent: <Footer />,
}
export const Secondary = Template.bind({})
Secondary.args = {
  className: 'empty',
  primaryText: 'Error 500',
  secondaryText:
    'Seems like we can’t find the page you are\nlooking for. You can try going back. ',
  buttonProps: {
    text: 'Go back',
    size: 'small',
  },
}
