import React from 'react'
import { Radio } from './radio'
import {
  render,
  cleanup,
  fireEvent,
  waitFor,
  screen,
} from '@testing-library/react'
import 'regenerator-runtime/runtime'
import 'uuid'

afterEach(cleanup)
jest.mock('uuid', () => {
  return { v4: jest.fn(() => 1) }
})

const props = {
  label: 'Radio Label',
  value: 'default',
  checked: true,
  name: 'default',
  tabIndex: 0,
  id: 'radio',
}

describe('<Radio/>', () => {
  it('renders', () => {
    const { container } = render(<Radio {...props} />)
    expect(container).toMatchSnapshot()
  })

  it('check if radio is in dom', async () => {
    const { container } = render(<Radio {...props} />)
    await waitFor(() => screen.getByText(/Radio Label/i))
    const radio = container.querySelector('.radio-input')
    fireEvent.click(radio)
  })
})
