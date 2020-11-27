import React from 'react'
import { render, fireEvent, cleanup } from '@testing-library/react'
import { Checkbox } from './Checkbox'

afterEach(cleanup)

jest.mock('uuid', () => {
  return {
    v4: jest.fn(() => 1),
  }
})

describe('<Checkbox/>', () => {
  it('should render checkbox with default props', () => {
    const { container } = render(<Checkbox label='Name' value='John Doe' />)
    expect(container).toMatchSnapshot()
  })

  it('should render checkbox with external prop values', () => {
    const { container, getByTestId } = render(
      <Checkbox
        label='Name'
        name='name'
        value='John Doe'
        onChange={() => {}}
        tabIndex={1}
      />
    )
    const checkbox = getByTestId('checkbox')
    fireEvent.click(checkbox)
    expect(checkbox).toBeChecked()
    expect(container).toMatchSnapshot()

    fireEvent.click(checkbox)
    expect(checkbox).not.toBeChecked()
    expect(container).toMatchSnapshot()
  })

  it('should render disabled checkbox', () => {
    const { container } = render(
      <Checkbox
        label='Name'
        name='name'
        value='John Doe'
        initialState={true}
        onChange={() => {}}
        disabled={true}
      />
    )
    expect(container).toMatchSnapshot()
  })
})
