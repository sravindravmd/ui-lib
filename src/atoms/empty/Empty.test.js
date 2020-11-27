import React from 'react'
import { Empty } from '.'
import { render, cleanup } from '@testing-library/react'
import 'regenerator-runtime/runtime'

afterEach(cleanup)
const args = {
  className: 'empty',
  primaryText: 'You have no master hierarchy',
  secondaryText: 'Start by adding your master h’s and add\nany published h’s',
  buttonProps: {
    text: 'Import Master hierarchy',
    size: 'small',
  },
}
describe('<Empty/>', () => {
  it('renders empty placeholder', () => {
    const { container } = render(<Empty {...args} />)
    expect(container).toMatchSnapshot()
  })
})
