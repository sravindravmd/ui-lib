import React from 'react'
import { Input } from './'
import { render, cleanup } from '@testing-library/react'
import 'regenerator-runtime/runtime'

afterEach(cleanup)

const props = {
  className: 'primary',
  label: 'Field Label',
  inputProps: {
    placeholder: 'Text',
  },
}

describe('<Input/>', () => {
  it('renders Input component', () => {
    const { container } = render(<Input {...props} />)
    expect(container).toMatchSnapshot()
  })
})
