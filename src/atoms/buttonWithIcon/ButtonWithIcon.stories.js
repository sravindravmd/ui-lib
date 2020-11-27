import React from 'react'
import { ButtonWithIcon } from './ButtonWithIcon'

export default {
  title: 'atoms/Buttons+Icon+Text',
  component: ButtonWithIcon,
  argTypes: {
    text: { control: 'text' },
    onClick: { action: 'clicked' },
    theme: {
      control: {
        type: 'select',
        options: ['none', 'dark', 'light'],
      },
    },
    emphasis: {
      control: {
        type: 'select',
        options: ['none', 'high', 'low'],
      },
    },
    icon: {
      control: {
        type: 'select',
        options: ['DownArrow', 'Add', 'Close', 'Edit'],
      },
    },
    iconPosition: {
      control: {
        type: 'select',
        options: ['left', 'right'],
      },
    },
  },
}

const Template = args => <ButtonWithIcon {...args} />

export const PrimaryButtonWithRightIcon = Template.bind({})
PrimaryButtonWithRightIcon.args = {
  text: 'Button Label',
  disabled: false,
  isPrimary: true,
  icon: 'DownArrow',
  iconPosition: 'right',
}
export const SecondaryButtonWithHighEmphasis = Template.bind({})
SecondaryButtonWithHighEmphasis.args = {
  text: 'Button Label',
  disabled: false,
  isPrimary: false,
  icon: 'Add',
  iconPosition: 'left',
  theme: 'light',
  emphasis: 'high',
}
export const SecondaryButtonWithLowEmphasis = Template.bind({})
SecondaryButtonWithLowEmphasis.args = {
  ...SecondaryButtonWithHighEmphasis.args,
  emphasis: 'low',
}

export const PrimaryRoundedIcon = Template.bind({})
PrimaryRoundedIcon.args = {
  disabled: false,
  isPrimary: true,
  icon: 'Add',
  isRoundIcon: true,
}
export const SecondaryRoundedIconWithHighEmphasis = Template.bind({})
SecondaryRoundedIconWithHighEmphasis.args = {
  disabled: false,
  isPrimary: false,
  icon: 'Close',
  isRoundIcon: true,
  theme: 'light',
  emphasis: 'high',
}
export const SecondaryRoundedIconWithLowEmphasis = Template.bind({})
SecondaryRoundedIconWithLowEmphasis.args = {
  ...SecondaryRoundedIconWithHighEmphasis.args,
  icon: 'Edit',
  emphasis: 'low',
}
