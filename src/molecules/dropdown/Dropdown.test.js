import React from 'react'
import {
  render,
  cleanup,
  fireEvent,
  waitFor,
  screen,
} from '@testing-library/react'
import { dropdownPropsWithTrue, dropdownPropsWithFalse } from './mock'
import { Dropdown } from './Dropdown'
import 'regenerator-runtime/runtime'
afterEach(cleanup)

describe('<Dropdown/>', () => {
  it('renders correctly', () => {
    const { container } = render(<Dropdown {...dropdownPropsWithTrue} />)
    expect(container).toMatchSnapshot()
  })
  it('renders correctly when isDefault is false', () => {
    const { container } = render(<Dropdown {...dropdownPropsWithFalse} />)
    expect(container).toMatchSnapshot()
  })

  it('check for Dropdown options lenght', async () => {
    const { container } = render(<Dropdown {...dropdownPropsWithTrue} />)
    await waitFor(() => screen.getByText(/Menu Title/i))
    const dropdown = container.querySelector('.content-wrapper')
    fireEvent.click(dropdown)
    const option = await waitFor(() => screen.getByText(/Josh Weir/i))
    expect(option).toBeInTheDocument()
    fireEvent.click(option)
  })
})
