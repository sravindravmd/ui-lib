import React from 'react'
import { render, cleanup } from '@testing-library/react'
import CardItem, { DetailItem, GeneralItem, CategoryItem } from './index'

afterEach(cleanup)

describe('<CardItem/>', () => {
  const imgUrl =
    'https://images.unsplash.com/photo-1603881568692-1429786f5ce1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
  it('renders Detail Card Item correctly', () => {
    const { container } = render(
      <DetailItem title='name' property='property' />
    )
    expect(container).toMatchSnapshot()
  })

  it('renders General Card Item without action correctly', () => {
    const { container } = render(
      <GeneralItem
        title='title'
        subtitle='subtitle'
        imgUrl={imgUrl}
        imgAltText='card-item'
      />
    )
    expect(container).toMatchSnapshot()
  })

  it('renders General Card Item with action correctly', () => {
    const { container } = render(
      <GeneralItem
        title='title'
        subtitle='subtitle'
        imgUrl={imgUrl}
        imgAltText='card-item'
        isActionItem={true}
      />
    )
    expect(container).toMatchSnapshot()
  })

  it('renders Category Card Item correctly', () => {
    const { container } = render(
      <CategoryItem text='Subcategories' value='51' />
    )
    expect(container).toMatchSnapshot()
  })

  it('renders Card Item with valid variant correctly', () => {
    const { container } = render(
      <CardItem variant='detailItem' title='name2' property='property2' />
    )
    expect(container).toMatchSnapshot()
  })
})
