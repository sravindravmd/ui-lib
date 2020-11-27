import React from 'react'
import { render, cleanup } from '@testing-library/react'
import { Pill } from './Pill'

afterEach(cleanup)

describe('<Pill/>', () => {
  it('renders Pill component with variant:success correctly', () => {
    const { container } = render(<Pill variant='success' text='Pill Label' />)
    expect(container).toMatchSnapshot()
  })

  it('renders Pill component with variant:warning correctly', () => {
    const { container } = render(<Pill variant='warning' text='Pill Label' />)
    expect(container).toMatchSnapshot()
  })

  it('renders Pill component with variant:alert correctly', () => {
    const { container } = render(<Pill variant='alert' text='Pill Label' />)
    expect(container).toMatchSnapshot()
  })
})
