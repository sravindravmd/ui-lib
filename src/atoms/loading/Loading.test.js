import React from 'react'
import { Loading } from '.'
import { render, cleanup } from '@testing-library/react'
import 'regenerator-runtime/runtime'

afterEach(cleanup)
const args = {
  toggle: true,
  className: 'global',
}
describe('<Loading/>', () => {
  it('renders loading svg', () => {
    const { container } = render(<Loading {...args} />)
    expect(container).toMatchSnapshot()
  })
})
