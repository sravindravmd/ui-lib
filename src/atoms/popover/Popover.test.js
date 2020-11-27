import React from 'react'
import { render, cleanup } from '@testing-library/react'
import 'regenerator-runtime/runtime'
import { Popover } from './'
import { PopoverContent } from './mock'

afterEach(cleanup)

const prop = {
  show: true,
}

describe('<Popover/>', () => {
  it('renders', () => {
    const { container } = render(
      <Popover {...prop}>
        <PopoverContent />
      </Popover>
    )
    expect(container).toMatchSnapshot()
  })
})
