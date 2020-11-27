import React from 'react'
import Example from './Flyout.example.js'

export default {
  title: 'molecules/Flyout',
  component: Example,
  argTypes: {
    onClick: { action: 'click' },
  },
  args: {
    show: false,
    className: 'primary',
  },
}

const Template = args => <Example {...args} />

export const Flyout = Template.bind({})
