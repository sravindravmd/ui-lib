import React from 'react'
import { render, cleanup, fireEvent } from '@testing-library/react'
import ExpandableCard from './index'
import CardItem from '../carditem'

afterEach(cleanup)

describe('<ExpandableCard/>', () => {
  it('renders ExpandableCard correctly', () => {
    const { container } = render(
      <ExpandableCard heading='Card'>
        <CardItem variant='detailItem' title='name3' property='property3' />
      </ExpandableCard>
    )
    expect(container).toMatchSnapshot()
  })

  it('expand card correctly', () => {
    const { getByTestId, getByText } = render(
      <ExpandableCard heading='Card'>
        <CardItem variant='detailItem' title='name3' property='property3' />
      </ExpandableCard>
    )
    const downArrow = getByTestId('downarrow')
    fireEvent.click(downArrow)
    expect(getByText('name3')).toBeInTheDocument()
  })
})
