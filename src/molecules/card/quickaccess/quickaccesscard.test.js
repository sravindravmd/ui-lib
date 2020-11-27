import React from 'react'
import { render, cleanup, fireEvent } from '@testing-library/react'
import QuickAccessCard from './index'

afterEach(cleanup)

describe('<QuickAccessCard/>', () => {
  const imgUrl =
    'https://images.unsplash.com/photo-1603881568692-1429786f5ce1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
  it('renders QuickAccessCard correctly ', () => {
    const { container } = render(
      <QuickAccessCard
        title='23987532950 - The Fleet Fox'
        subtitle='Shirts/Flanne'
        imgUrl={imgUrl}
        imgAltText='card-img'
      />
    )
    expect(container).toMatchSnapshot()
  })
  it('should render QuickAccessCard after click', () => {
    const { container, getByText } = render(
      <QuickAccessCard
        title='23987532950 - The Fleet Fox'
        subtitle='Shirts/Flanne'
        imgUrl={imgUrl}
        imgAltText='card-img'
        onClick={() => {}}
      />
    )
    fireEvent.click(getByText('23987532950 - The Fleet Fox'))
    expect(container).toMatchSnapshot()
  })
})
