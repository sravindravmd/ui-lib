import React from 'react'
import { Button } from './Button'

export default {
  title: 'atoms/Buttons',
  component: Button,
  argTypes: {
    text: { control: 'text' },
    onClick: { action: 'clicked' },
    size: {
      control: {
        type: 'select',
        options: ['small', 'large'],
      },
    },
    theme: {
      control: {
        type: 'select',
        options: ['none', 'dark'],
      },
    },
  },
}

const Template = args => <Button {...args} />

export const PrimaryButton = Template.bind({})
PrimaryButton.args = {
  text: 'Button Label',
  disabled: false,
  isPrimary: true,
}
export const SecondaryButton = Template.bind({})
SecondaryButton.args = {
  text: 'Button Label',
  disabled: false,
  isPrimary: false,
}
