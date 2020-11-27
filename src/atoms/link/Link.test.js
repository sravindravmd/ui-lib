import React from 'react'
import { render, cleanup } from '@testing-library/react'
import { Link } from './Link'

afterEach(cleanup)

describe('<Link/>', () => {
  it('renders correctly', () => {
    const { container } = render(<Link text='I am a Link' href='/' />)
    expect(container).toMatchSnapshot()
  })

  it('render prop values correctly', () => {
    const { getByText } = render(<Link text='I am a Link' href='/' />)
    const link = getByText('I am a Link')
    expect(link).toHaveTextContent('I am a Link')
    expect(link.getAttribute('href')).toBe('/')
  })
})
