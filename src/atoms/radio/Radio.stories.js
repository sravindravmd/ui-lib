import React from 'react'
import { Radio } from './Radio'

export default {
  title: 'atoms/Radio',
  component: Radio,
  argTypes: {
    label: 'Label',
    value: null,
    checked: false,
    name: 'name',
    onClick: { actions: 'clicked' },
    tabIndex: 0,
  },
}

const Template = args => (
  <>
    <Radio {...args} />
    <Radio {...args} />
    <Radio {...args} />
  </>
)

export const Default = Template.bind({})
Default.args = {
  label: 'Label',
  value: 'default',
  checked: true,
  name: 'default',
  tabIndex: 0,
}
