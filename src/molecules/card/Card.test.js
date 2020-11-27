import React from 'react'
import { render, cleanup } from '@testing-library/react'
import { Card } from './Card'

afterEach(cleanup)

describe('<Card/>', () => {
  it('renders Card with variant:expandable correctly ', () => {
    const { container } = render(<Card variant='expandable' heading='Card' />)
    expect(container).toMatchSnapshot()
  })
})
