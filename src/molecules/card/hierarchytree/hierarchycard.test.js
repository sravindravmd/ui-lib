import React from 'react'
import { render, fireEvent, cleanup } from '@testing-library/react'
import HierarchyTreeCard from './index'

afterEach(cleanup)

describe('<HierarchyTreeCard/>', () => {
  it('renders HierarchyTreeCard with level=1 ', () => {
    const { container, getByText } = render(
      <HierarchyTreeCard
        title='Shirts'
        subtitle='12 Subcategories'
        level='1'
        onClick={() => {}}
      />
    )
    fireEvent.click(getByText('Shirts'))
    expect(container).toMatchSnapshot()
  })

  it('renders HierarchyTreeCard with level=2 ', () => {
    const { container } = render(
      <HierarchyTreeCard title='Shirts' subtitle='12 Subcategories' level='2' />
    )
    expect(container).toMatchSnapshot()
  })

  it('renders HierarchyTreeCard with level=3 ', () => {
    const { container } = render(
      <HierarchyTreeCard title='Shirts' subtitle='12 Subcategories' level='3' />
    )
    expect(container).toMatchSnapshot()
  })
})
