import React from 'react'
import { SnakeBar } from './'
import { render, cleanup } from '@testing-library/react'
import 'regenerator-runtime/runtime'

afterEach(cleanup)

const successProp = {
  alertIcon: 'icon-success',
  dismissable: true,
  kind: 'success',
  label: 'Image added succesfully',
  show: true,
  withIcon: true,
}

const alertProp = {
  alertIcon: 'icon-success',
  dismissable: true,
  kind: 'success',
  label: 'Something went wrong. Please try again',
  show: true,
  withIcon: true,
}

describe('<Snake Bar/>', () => {
  it('renders success ui', () => {
    const { container } = render(<SnakeBar {...successProp} />)
    expect(container).toMatchSnapshot()
  })

  it('renders alert ui', () => {
    const { container } = render(<SnakeBar {...alertProp} />)
    expect(container).toMatchSnapshot()
  })
})
