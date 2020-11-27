import React from 'react'
import { render, fireEvent, cleanup } from '@testing-library/react'
import { Calendar } from './Calendar'

afterEach(cleanup)

describe('<Calendar/>', () => {
  it('should render Calendar input correctly', () => {
    const { container } = render(<Calendar />)
    const input = container.querySelector('input')
    fireEvent.change(input, { target: { value: '10-10-2020' } })
    expect(container).toMatchSnapshot()
  })

  it('should render Calendar correctly', () => {
    const { container } = render(<Calendar />)
    const input = container.querySelector('input')
    fireEvent.change(input, { target: { value: '10-10-2020' } })
    fireEvent.click(input)
    expect(container).toMatchSnapshot()
  })

  it('should render Calendar with next month correctly', () => {
    const { container, getByTestId } = render(<Calendar />)
    const input = container.querySelector('input')
    fireEvent.change(input, { target: { value: '10-10-2020' } })
    fireEvent.click(input)
    fireEvent.click(getByTestId('increment-year'))
    expect(getByTestId('year-title')).toHaveTextContent('Nov 2020')
    expect(container).toMatchSnapshot()
  })

  it('should render Calendar with previous month correctly', () => {
    const { container, getByTestId } = render(<Calendar />)
    const input = container.querySelector('input')
    fireEvent.change(input, { target: { value: '10-10-2020' } })
    fireEvent.click(input)
    fireEvent.click(getByTestId('decrement-year'))
    expect(getByTestId('year-title')).toHaveTextContent('Sept 2020')
    expect(container).toMatchSnapshot()
  })
})
