import React from 'react'

import { Chip as Chips } from './Chip'

export default {
  title: 'atoms/Chips&Pills/chip',
  component: Chips,
  argTypes: {
    text: { control: 'text' },
    uid: { control: 'text' },
    onClose: { action: 'click' },
    disabled: { control: 'boolean' },
  },
}

const Template = args => <Chips {...args} />

export const Chip = Template.bind({})
Chip.args = {
  text: 'Chip Label',
  uid: '',
}
