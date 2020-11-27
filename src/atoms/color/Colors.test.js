import React from 'react'
import { render, cleanup } from '@testing-library/react'
import { Colors } from './Colors'
import { theme } from '../../shared'

afterEach(cleanup)

const colors = [
  {
    color: theme.palette.ui.neutral.grey1,
    name: 'Grey1',
    path: 'theme.palette.ui.neutral.grey1',
  },
  {
    color: theme.palette.ui.neutral.grey2,
    name: 'Grey2',
    path: 'theme.palette.ui.neutral.grey2',
  },
]

describe('<Colors/>', () => {
  it('renders Colors component correctly', () => {
    const { colorSnap } = render(<Colors colors={colors} />)
    expect(colorSnap).toMatchSnapshot()
  })
})
