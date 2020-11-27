import React from 'react'
import { render, cleanup } from '@testing-library/react'
import 'regenerator-runtime/runtime'
import { Header } from './'
import links from './mock'

afterEach(cleanup)

const props = {
  company: 'SPORTS & CO',
  productLinks: links,
}

describe('<Global Header/>', () => {
  it('renders', () => {
    const { container } = render(<Header {...props} />)
    expect(container).toMatchSnapshot()
  })
})
