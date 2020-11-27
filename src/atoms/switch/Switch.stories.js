import React from 'react'
import { Switch as ToggleSwitch } from './Switch'

export default {
  title: 'atoms/Switch',
  component: ToggleSwitch,
  argTypes: {},
}

const template = args => <ToggleSwitch {...args} />

export const Switch = template.bind({})

Switch.args = {
  label: 'Label',
  initialState: false,
}
