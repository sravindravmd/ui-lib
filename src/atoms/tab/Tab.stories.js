import React from 'react'
import styled from 'styled-components'
import { Tab, TabItem } from './Tab'

export default {
  title: 'atoms/Tab',
  component: Tab,
  argTypes: {
    variant: {
      control: {
        type: 'select',
        options: ['horizontal', 'vertical'],
      },
    },
    heading: { control: 'text' },
  },
}

const StyledContent = styled.div`
  font-family: 'Gilroy-Medium';
  margin: 0 auto;
  padding: 60px;
`
const Template1 = args => (
  <div>
    <Tab {...args}>
      <TabItem title='Live item (50)'>
        <StyledContent>Live Items</StyledContent>
      </TabItem>
      <TabItem title='Ready to review (50)'>
        <StyledContent>Ready to review Items</StyledContent>
      </TabItem>
      <TabItem title='In progress (50)' disabled={true}>
        <StyledContent>In progress Items</StyledContent>
      </TabItem>
      <TabItem title='Archived (50)'>
        <StyledContent>Archived Items</StyledContent>
      </TabItem>
    </Tab>
  </div>
)

export const HorizontalTab = Template1.bind({})
HorizontalTab.args = {
  variant: 'horizontal',
  heading: 'ALL Items(200)',
}

HorizontalTab.decorators = [
  Story => (
    <div style={{ margin: '0 auto', padding: '60px' }}>
      <Story />
    </div>
  ),
]

const Template2 = args => (
  <div>
    <Tab {...args}>
      <TabItem title='Performance'>
        <StyledContent>Performance</StyledContent>
      </TabItem>
      <TabItem title='Recent Activity'>
        <StyledContent>Recent Activity</StyledContent>
      </TabItem>
      <TabItem title='Product performance' disabled={true}>
        <StyledContent>Product performance</StyledContent>
      </TabItem>
      <TabItem title='Recent Activity'>
        <StyledContent>Recent</StyledContent>
      </TabItem>
    </Tab>
  </div>
)
export const VerticalTab = Template2.bind({})
VerticalTab.args = {
  variant: 'vertical',
}

const verticalStyle = {
  margin: '0 auto',
  padding: '95px 57px 95px 157px',
  background: '#737F8F10',
}

VerticalTab.decorators = [
  Story => (
    <div style={verticalStyle}>
      <Story />
    </div>
  ),
]
