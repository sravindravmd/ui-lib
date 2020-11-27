import React from 'react'
import { render, fireEvent, cleanup } from '@testing-library/react'
import CarouselCard from './index'

afterEach(cleanup)

describe('<CarouselCard/>', () => {
  const imgUrl =
    'https://images.unsplash.com/photo-1603881568692-1429786f5ce1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
  it('renders CarouselCard correctly', () => {
    const { container } = render(
      <CarouselCard
        title='V-neck Ruffle Top in Floral Sunset'
        subtitle='921403392'
        imgUrl={imgUrl}
        imgAltText='card-img'
        onClick={() => {}}
      />
    )
    expect(container).toMatchSnapshot()
  })

  it('should render CarouselCard after click', () => {
    const { container, getByText } = render(
      <CarouselCard
        title='V-neck Ruffle Top in Floral Sunset'
        subtitle='921403392'
        imgUrl={imgUrl}
        imgAltText='card-img'
        onClick={() => {}}
      />
    )
    fireEvent.click(getByText('V-neck Ruffle Top in Floral Sunset'))
    expect(container).toMatchSnapshot()
  })
})
