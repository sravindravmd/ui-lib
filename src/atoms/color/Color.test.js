import React from 'react'
import { render, cleanup } from '@testing-library/react'
import { Color } from './Color'
import { theme } from '../../shared'

afterEach(cleanup)

describe('<Color/>', () => {
  it('renders Color component correctly', () => {
    const { colorSnap } = render(
      <Color
        color={theme.palette.brand.primary.gray}
        name={theme.palette.brand.primary.gray}
        path='theme.palette.brand.primary.gray'
      />
    )
    expect(colorSnap).toMatchSnapshot()
  })
})
