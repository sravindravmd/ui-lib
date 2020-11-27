import React from 'react'
import { render, fireEvent, cleanup } from '@testing-library/react'
import { Tab, TabItem } from './Tab'

afterEach(cleanup)

describe('<Tab/>', () => {
  it('renders horizontal tab correctly', () => {
    const { container } = render(
      <Tab heading='ALL Items' variant='horizontal'>
        <TabItem title='Performance'>performance</TabItem>
        <TabItem title='Recent Activity'>Recent Activity</TabItem>
      </Tab>
    )
    expect(container).toMatchSnapshot()
  })

  it('renders vertical tab correctly', () => {
    const { container } = render(
      <Tab variant='vertical'>
        <TabItem title='Performance'>performance</TabItem>
        <TabItem title='Recent Activity'>Recent Activity</TabItem>
      </Tab>
    )
    expect(container).toMatchSnapshot()
  })

  it('renders horizontal tab with TabItem disabled', () => {
    const { container } = render(
      <Tab heading='Tooltip' variant='horizontal'>
        <TabItem title='Performance' disabled>
          performance
        </TabItem>
        <TabItem title='Recent Activity'>Recent Activity</TabItem>
      </Tab>
    )
    expect(container).toMatchSnapshot()
  })

  it('render selected tab content correctly', () => {
    const { getByText } = render(
      <Tab heading='Tooltip' variant='horizontal'>
        <TabItem title='Performance'>Content for performance</TabItem>
        <TabItem title='Recent Activity'>Content for Recent activity</TabItem>
      </Tab>
    )
    const tabItem = getByText('Performance')
    fireEvent.click(tabItem)
    expect(getByText('Content for performance')).toBeInTheDocument()
  })
})
