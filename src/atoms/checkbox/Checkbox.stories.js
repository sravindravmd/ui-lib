import React from 'react'

import { Checkbox as CustomCheckbox } from './Checkbox'

export default {
  title: 'atoms/checkbox',
  component: CustomCheckbox,
  argTypes: {},
}

const Template = args => <CustomCheckbox {...args} />

export const Checkbox = Template.bind({})
Checkbox.args = {
  label: 'Label',
  value: 'John Doe',
}
