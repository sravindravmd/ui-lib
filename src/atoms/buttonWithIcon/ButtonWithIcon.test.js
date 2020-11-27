import React from 'react'
import renderer from 'react-test-renderer'
import { ButtonWithIcon } from './ButtonWithIcon'

describe('Button', () => {
  it('renders primary Button + Icon correctly with default props', () => {
    const fn = jest.fn()
    const tree = renderer
      .create(
        <ButtonWithIcon
          text='Button Label'
          isPrimary={true}
          size='small'
          onClick={fn}
        />
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
  it('renders primary Button correctly with size:small, theme: dark, isPrimary:true, iconPosition: right, icon: DownArrow, emphasis:high', () => {
    const fn = jest.fn()
    const tree = renderer
      .create(
        <ButtonWithIcon
          text='Button Label'
          isPrimary={true}
          size='small'
          onClick={fn}
          icon='DownArrow'
          iconPosition='right'
          emphasis='high'
        />
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
  it('renders primary Button correctly with size:small, theme: light, isPrimary:false, iconPosition: right, icon: Add, emphasis:low', () => {
    const fn = jest.fn()
    const tree = renderer
      .create(
        <ButtonWithIcon
          text='Button Label'
          isPrimary={false}
          size='small'
          theme='light'
          onClick={fn}
          icon='DownArrow'
          iconPosition='left'
          emphasis='low'
        />
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('Render Icon Button with isRoundIcon: true, isPrimary: true', async () => {
    const fn = jest.fn()
    const tree = renderer
      .create(
        <ButtonWithIcon
          isRoundIcon={true}
          isPrimary={true}
          icon='Add'
          onClick={fn}
        />
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('Render Icon Button with isRoundIcon: true, isPrimary: false, emphasis: high, theme: light', async () => {
    const fn = jest.fn()
    const tree = renderer
      .create(
        <ButtonWithIcon
          isRoundIcon={true}
          isPrimary={true}
          emphasis='high'
          theme='light'
          icon='Add'
          onClick={fn}
        />
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
  it('Render Icon Button with isRoundIcon: true, isPrimary: false, emphasis: low, theme: light', async () => {
    const fn = jest.fn()
    const tree = renderer
      .create(
        <ButtonWithIcon
          isRoundIcon={true}
          isPrimary={true}
          emphasis='low'
          theme='light'
          icon='Add'
          onClick={fn}
        />
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
