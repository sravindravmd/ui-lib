import React from 'react'
import renderer from 'react-test-renderer'
import { Button } from './Button'

describe('Button', () => {
  it('renders primary Button correctly with default props', () => {
    const fn = jest.fn()
    const tree = renderer
      .create(
        <Button
          text='Button Label'
          isPrimary={true}
          size='small'
          onClick={fn}
        />
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
  it('renders primary Button correctly with size:small, theme: dark, isPrimary:false', () => {
    const fn = jest.fn()
    const tree = renderer
      .create(
        <Button
          text='Button Label'
          isPrimary={true}
          size='small'
          onClick={fn}
        />
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
  it('renders primary Button correctly with size:large, theme: light, isPrimary:false', () => {
    const fn = jest.fn()
    const tree = renderer
      .create(
        <Button
          text='Button Label'
          isPrimary={false}
          size='large'
          theme='light'
          onClick={fn}
        />
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
