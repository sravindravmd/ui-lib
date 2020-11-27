import React from 'react'
import { Textarea } from './'
import { render, cleanup } from '@testing-library/react'
import 'regenerator-runtime/runtime'

afterEach(cleanup)

const props = {
  className: 'multiline',
  label: 'Description',
  textareaProps: {
    limit: 100,
    rows: 5,
  },
}

describe('<Textarea/>', () => {
  it('renders Input component', () => {
    const { container } = render(<Textarea {...props} />)

    expect(container).toMatchSnapshot()
  })
})
