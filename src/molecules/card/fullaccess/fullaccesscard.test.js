import React from 'react'
import { render, cleanup } from '@testing-library/react'
import FullAccessCard from './index'

afterEach(cleanup)

describe('<FullAccessCard/>', () => {
  it('renders FullAccessCard with variant:general', () => {
    const { container } = render(
      <FullAccessCard variant='general' heading='Card' />
    )
    expect(container).toMatchSnapshot()
  })

  it('renders FullAccessCard with variant:withActionItem', () => {
    const { container } = render(
      <FullAccessCard variant='withActionItem' heading='Card' />
    )
    expect(container).toMatchSnapshot()
  })
})
