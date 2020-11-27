import React from 'react'
import { render, cleanup, fireEvent } from '@testing-library/react'
import { Chip } from './Chip'

afterEach(cleanup)

const onClose = jest.fn()

describe('<Chip/>', () => {
  it('renders Chip component correctly', () => {
    const { container } = render(
      <Chip uid='chip' text='Chip Label' onClose={onClose} />
    )
    expect(container).toMatchSnapshot()
  })

  it('close action must call fireEvent.click', () => {
    const { getByText } = render(
      <Chip uid='chip' text='Chip Label' onClose={onClose} />
    )
    const chip = getByText('Chip Label')
    fireEvent.click(chip.firstElementChild, {})
    expect(onClose).toHaveBeenCalledTimes(1)
  })
})
