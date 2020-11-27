import React from 'react'
import Example from './Popover.example'

export default {
  title: 'atoms/Popover',
  component: Example,
  argTypes: {
    placement: {
      control: {
        type: 'select',
        options: ['bottom', 'top', 'left', 'right'],
      },
    },
  },
  args: {
    showArrow: true,
    className: 'primary',
  },
}

const Template = args => <Example {...args} />

export const PopOver = Template.bind({})
