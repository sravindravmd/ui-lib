import React from 'react'

import {
  render,
  cleanup,
  fireEvent,
  waitFor,
  screen,
} from '@testing-library/react'
import { Table } from './index'
import { data } from './mock'
import 'regenerator-runtime/runtime'
const props = {
  ...data,
}

afterEach(cleanup)

describe('<Table/>', () => {
  it('render Table component correctly', () => {
    const { container } = render(<Table {...props} />)
    expect(container).toMatchSnapshot()
  })

  it('render Table correctly when isTableSortable is true', () => {
    const { container } = render(<Table {...props} isTableSortable={true} />)
    expect(container).toMatchSnapshot()
  })
  it('check for Table data length', async () => {
    const { container } = render(<Table {...props} isTableSortable={true} />)
    const TableHeader = await waitFor(() => screen.getByText(/Order ID/i))
    fireEvent.click(TableHeader)
    const option = await waitFor(() => screen.getByText(/01283884/i))
    expect(option).toBeInTheDocument()
    const hoverDots = container.querySelector('.dotes')
    fireEvent.click(hoverDots)
  })
})
