import React from 'react'

import { render, cleanup, fireEvent } from '@testing-library/react'
import { Modal, ModalHeader } from './index'
import 'regenerator-runtime/runtime'

const props = {
  isShowing: true,
  isCrossIconActive: false,
  className: 'modal-wrapper',
  size: 'large',
}

afterEach(cleanup)

const onCancel = jest.fn()
const onSave = jest.fn()
const testStyle = { padding: '2rem' }
describe('<Modal/>', () => {
  it('render Modal component correctly', () => {
    const { container } = render(
      <Modal {...props} onCancel={onCancel} onSave={onSave}>
        <div style={testStyle}>
          {props.size !== 'small' && (
            <ModalHeader onCancel={onCancel} onSave={onSave} />
          )}
          <div>
            {' '}
            Cancelling this order is an action that cannot be undone. This order
            will no longer be visible in Order List Page
          </div>
        </div>
      </Modal>
    )
    expect(container).toMatchSnapshot()
  })

  it('close action must call fireEvent.click', () => {
    const { getByText } = render(
      <Modal {...props} onCancel={onCancel} onSave={onSave}>
        <div style={testStyle}>
          {props.size !== 'small' && (
            <ModalHeader onCancel={onCancel} onSave={onSave} />
          )}
          <div>
            {' '}
            Cancelling this order is an action that cannot be undone. This order
            will no longer be visible in Order List Page
          </div>
        </div>
      </Modal>
    )
    const cancel = getByText('Cancel')
    fireEvent.click(cancel, {})
    expect(onCancel).toHaveBeenCalledTimes(1)
  })

  it('save action must call fireEvent.click', () => {
    const { getByText } = render(
      <Modal {...props} onCancel={onCancel} onSave={onSave}>
        <div style={testStyle}>
          {props.size !== 'small' && (
            <ModalHeader onCancel={onCancel} onSave={onSave} />
          )}
          <div>
            {' '}
            Cancelling this order is an action that cannot be undone. This order
            will no longer be visible in Order List Page
          </div>
        </div>
      </Modal>
    )
    const save = getByText('Save')
    fireEvent.click(save, {})
    expect(onCancel).toHaveBeenCalledTimes(1)
  })
})
