import React from 'react'
import { render, cleanup } from '@testing-library/react'
import { Shimmer } from './'

afterEach(cleanup)

describe('<Shimmer/>', () => {
  it('renders correctly', () => {
    const { container } = render(<Shimmer />)
    expect(container).toMatchSnapshot()
  })
})
