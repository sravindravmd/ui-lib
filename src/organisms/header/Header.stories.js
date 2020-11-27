import React from 'react'
import { Header } from './'
import links from './mock'

export default {
  title: 'organisms/Header',
  component: Header,
  argTypes: {
    onClick: { action: 'click' },
  },
  args: {
    company: 'SPORTS & CO',
    productLinks: links,
  },
}

const Template = args => <Header {...args} />

export const Index = Template.bind({})
