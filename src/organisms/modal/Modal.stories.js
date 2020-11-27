import React from 'react'
import { Modal } from './Modal'
import { ModalHeader } from './ModalHeader'
import { ModalFooter } from './ModalFooter'
export default {
  title: 'organisms/Modal',
  component: Modal,
  argTypes: {
    isShowing: { control: 'boolean' },
    isCrossIconActive: { control: 'boolean' },
    className: { control: 'text' },
    onCancel: { action: 'clicked' },
    onSave: { action: 'clicked' },
    size: {
      control: {
        type: 'select',
        options: ['small', 'medium', 'large'],
      },
    },
  },
}
const testStyle = { padding: '2rem' }
const TemplateLarge = args => {
  const { onCancel, onSave, size } = args
  return (
    <Modal {...args}>
      <div style={testStyle}>
        {size !== 'small' && (
          <ModalHeader onCancel={onCancel} onSave={onSave} />
        )}
        <div className='modal-body'>
          {' '}
          Cancelling this order is an action that cannot be undone. This order
          will no longer be visible in Order List Page
        </div>
      </div>
    </Modal>
  )
}
const TemplateSmall = args => {
  const { onCancel, onSave } = args
  return (
    <Modal {...args}>
      <div style={testStyle}>
        <div className='modal-titel'>Cancel Order</div>
        <div className='modal-body'>
          {' '}
          Cancelling this order is an action that cannot be undone. This order
          will no longer be visible in Order List Page
        </div>
        <ModalFooter onCancel={onCancel} onSave={onSave} />
      </div>
    </Modal>
  )
}
export const PrimaryModal = TemplateLarge.bind({})

PrimaryModal.args = {
  isShowing: true,
  isCrossIconActive: false,
  className: 'modal-wrapper',
  size: 'large',
  // onCancel: () => {},
  // onSave: () => {},
}
export const SecondaryModal = TemplateSmall.bind({})
SecondaryModal.args = {
  isShowing: true,
  isCrossIconActive: true,
  className: 'modal-wrapper',
  size: 'small',
}
