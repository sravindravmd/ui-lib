import React from 'react'
import { Shimmer } from './'

export default {
  title: 'atoms/Shimmer',
  component: Shimmer,
  args: {
    count: 2,
    className: 'primary',
    perRow: 3,
  },
}

const Template = args => <Shimmer {...args} />

export const Primary = Template.bind({})
Primary.args = {}
