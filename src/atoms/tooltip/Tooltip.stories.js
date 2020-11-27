import React from 'react'

import { Tooltip } from './Tooltip'

export default {
  title: 'atoms/Tooltip',
  component: Tooltip,
  argTypes: {
    position: {
      control: {
        type: 'select',
        options: ['right', 'bottom'],
      },
    },
    size: {
      control: {
        type: 'select',
        options: ['small', 'large'],
      },
    },
    title: { control: 'text' },
    text: { control: 'text' },
  },
}

const styles = {
  margin: '6em auto',
  background: 'gold',
  width: '100px',
  textAlign: 'center',
}

const Template = args => <Tooltip {...args} />

export const DefaultTooltip = Template.bind({})
DefaultTooltip.args = {
  size: 'large',
  position: 'bottom',
  title: 'Tooltip',
  text: 'Text for tooltip goes here and it is responsive. ',
}

DefaultTooltip.decorators = [
  Story => (
    <div style={styles}>
      Hover over me
      <Story />
    </div>
  ),
]

export const MovableTooltip = Template.bind({})
MovableTooltip.args = {
  size: 'small',
  text: 'Hover over',
}

MovableTooltip.decorators = [
  Story => (
    <div style={styles}>
      Hover over me
      <Story />
    </div>
  ),
]
