import React from 'react'
import PropTypes from 'prop-types'
import { StyledEmptyWrapper } from './Empty.styles'
import { Button } from '../button/Button'
import { lineBreak } from '../../shared/utils'

export const Empty = ({
  className,
  primaryText,
  secondaryText,
  buttonProps,
  children,
  footerContent,
}) => {
  return (
    <StyledEmptyWrapper className={className}>
      <div className='empty-inner'>
        {primaryText && (
          <div className='primary-text'>{lineBreak(primaryText)}</div>
        )}
        {secondaryText && (
          <div className='secondary-text'>{lineBreak(secondaryText)}</div>
        )}
        {buttonProps && (
          <div className='button-block'>
            <Button {...buttonProps} />
          </div>
        )}
        {footerContent && <div className='footer-content'>{footerContent}</div>}
        {children && children}
      </div>
    </StyledEmptyWrapper>
  )
}

Empty.propTypes = {
  primaryText: PropTypes.string,
  className: PropTypes.string,
  secondaryText: PropTypes.string,
  buttonProps: PropTypes.object,
  children: PropTypes.element,
  footerContent: PropTypes.any,
}
