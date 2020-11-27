import React from 'react'
import { render, fireEvent, cleanup } from '@testing-library/react'
import { Switch } from './Switch'

afterEach(cleanup)

describe('<Switch/>', () => {
  it('renders Switch with initialState:false correctly', () => {
    const { container, getByText } = render(<Switch label='Label' />)
    expect(getByText('Label')).toHaveTextContent('Label')
    expect(container).toMatchSnapshot()
  })

  it('renders Switch with initialState:true correctly', () => {
    const { container, getByText } = render(
      <Switch initialState={true} label='Label' />
    )
    expect(getByText('Label')).toHaveTextContent('Label')
    expect(container).toMatchSnapshot()
  })

  it('renders Switch with initialState:true correctly', () => {
    const { getByTestId, getByText } = render(<Switch label='Label' />)
    fireEvent.click(getByText('Label'))
    expect(getByTestId('toggle')).toBeChecked()
    fireEvent.click(getByText('Label'))
    expect(getByTestId('toggle')).not.toBeChecked()
  })
})
