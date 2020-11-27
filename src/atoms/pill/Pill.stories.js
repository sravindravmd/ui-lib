import React from 'react'

import { Pill as Pills } from './Pill'

export default {
  title: 'atoms/chips&pills/pill',
  component: Pills,
  argTypes: {
    text: { control: 'text' },
    variant: {
      control: {
        type: 'select',
        options: ['success', 'warning', 'alert'],
      },
    },
  },
}

const Template = args => <Pills {...args} />

export const Pill = Template.bind({})
Pill.args = {
  text: 'Label',
  variant: 'success',
}
