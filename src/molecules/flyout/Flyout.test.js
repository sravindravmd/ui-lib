import React from 'react'
import { render, cleanup } from '@testing-library/react'
import 'regenerator-runtime/runtime'
import { Flyout } from './'
import { FlyoutContent } from './mock'

afterEach(cleanup)

const prop = {
  show: true,
}

describe('<Flyout/>', () => {
  it('renders', () => {
    const { container } = render(
      <Flyout {...prop}>
        <FlyoutContent />
      </Flyout>
    )
    expect(container).toMatchSnapshot()
  })
})
