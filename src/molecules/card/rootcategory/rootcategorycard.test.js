import React from 'react'
import { render, cleanup, fireEvent } from '@testing-library/react'
import RootCategoryCard from './index'

afterEach(cleanup)

describe('<RootCategoryCard/>', () => {
  it('should render RootCategoryCard correctly ', () => {
    const { container } = render(
      <RootCategoryCard title='Shirts' subtitle='Updated 9/8 12:15PM PST' />
    )
    expect(container).toMatchSnapshot()
  })

  it('should render RootCategoryCard after click ', () => {
    const { container, getByText } = render(
      <RootCategoryCard
        title='Shirts'
        subtitle='Updated 9/8 12:15PM PST'
        onClick={() => {}}
      />
    )
    fireEvent.click(getByText('Shirts'))
    expect(container).toMatchSnapshot()
  })
})
