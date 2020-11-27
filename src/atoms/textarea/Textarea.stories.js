import React from 'react'
import { Textarea } from '.'

export default {
  title: 'atoms/Textarea',
  component: Textarea,
  argTypes: {
    onClick: { action: 'click' },
  },
}

const Template = args => <Textarea {...args} />

export const Multiline = Template.bind({})
Multiline.args = {
  className: 'multiline',
  label: 'Description',
  textareaProps: {
    limit: 100,
    rows: 5,
  },
}
