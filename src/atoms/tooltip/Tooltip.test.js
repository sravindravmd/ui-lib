import React from 'react'
import { render, fireEvent, cleanup } from '@testing-library/react'
import { Tooltip } from './Tooltip'

afterEach(cleanup)

jest.mock('uuid', () => {
  return {
    v4: jest.fn(() => 1),
  }
})

describe('<Tooltip/>', () => {
  it('renders tooltip with size:large and position:right correctly', () => {
    const { container } = render(
      <Tooltip
        title='Tooltip'
        text='Text for tooltip goes here and it is responsive'
        size='large'
        position='right'
      />
    )
    expect(container).toMatchSnapshot()
  })

  it('renders tooltip with size:large and position:bottom correctly', () => {
    const { container } = render(
      <Tooltip
        title='Tooltip'
        text='Text for tooltip goes here and it is responsive'
        size='large'
        position='bottom'
      />
    )
    expect(container).toMatchSnapshot()
  })

  it('renders tooltip with size:small and position at cursor correctly', () => {
    const { container } = render(
      <Tooltip
        title='Tooltip'
        text='Text for tooltip goes here and it is responsive'
        size='small'
      />
    )
    expect(container).toMatchSnapshot()
  })

  it('show tooltip on mouse enter event', () => {
    const { container, getByText } = render(
      <Tooltip title='Tooltip' text='Text for tooltip' size='large' />
    )
    fireEvent.mouseEnter(container)
    const tooltip = getByText('Tooltip')
    expect(tooltip).toBeInTheDocument()
  })

  it('show small tooltip on mouse move event', () => {
    const { container, getByText } = render(
      <Tooltip text='Text for tooltip' size='small' />
    )
    fireEvent.mouseEnter(container)
    const tooltip = getByText('Text for tooltip')
    expect(tooltip).toBeInTheDocument()
  })
})
