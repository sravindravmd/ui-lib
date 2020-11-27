import React from 'react'
import { Loading } from './'

export default {
  title: 'atoms/Loading',
  component: Loading,
  args: {
    toggle: true,
    className: 'global',
  },
}

const Template = args => <Loading {...args} />
export const Global = Template.bind({})
