import React from 'react'
import { Dropdown } from './Dropdown'
import { dropdownPropsWithTrue } from './mock'
export default {
  title: 'molecules/Dropdown',
  component: Dropdown,
  argTypes: {
    titleLabel: { control: 'text' },
    className: { control: 'text' },
  },
}

const Template = args => <Dropdown {...args} />

export const PrimaryDropdown = Template.bind({})

PrimaryDropdown.args = dropdownPropsWithTrue
