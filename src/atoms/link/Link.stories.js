import React from 'react'

import { Link } from './Link'

export default {
  title: 'atoms/Link',
  component: Link,
  argTypes: {
    href: { control: 'text' },
    text: { control: 'text' },
  },
}

const Template = args => <Link {...args} />

export const PrimaryLink = Template.bind({})
PrimaryLink.args = {
  text: 'I am just a Link',
  href: '/',
}
