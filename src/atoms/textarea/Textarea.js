import React, { useState, useEffect, useCallback } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import {
  StyledMultiline,
  StyledTextareaContainer,
  StyledTextareaComponent,
} from './Textarea.styles'

const isFunction = x => typeof x === 'function'

export const Textarea = ({
  textareaProps,
  errorProps,
  label,
  className: containerClassName,
  error,
  kind,
  errorMessage,
  ...containerPropsRest
}) => {
  const [value, setValue] = useState('')
  const [isControlled] = useState(typeof textareaProps.value === 'string')
  const [isFocused, setFocus] = useState(false)
  const [limitCount, setLimitCount] = useState(0)

  const setTextareaValue = useCallback((value = '') => {
    setValue(value)
    setLimitCount(value.length)
  }, [])

  useEffect(() => {
    if (textareaProps.value) {
      setTextareaValue(textareaProps.value)
    }
  }, [textareaProps.value, setTextareaValue])

  const handleBlur = event => {
    setFocus(false)

    if (isFunction(textareaProps.onBlur)) {
      textareaProps.onBlur(event)
    }
  }

  const handleFocus = event => {
    setFocus(true)

    if (isFunction(textareaProps.onFocus)) {
      textareaProps.onFocus(event)
    }
  }

  const handleChange = event => {
    if (!isControlled) {
      setTextareaValue(event.target.value)
    }

    if (isFunction(textareaProps.onChange)) {
      textareaProps.onChange(event)
    }
  }

  const {
    className: inputClassName,
    placeholder,
    boxed,
    limit,
    ...textareaPropsRest
  } = textareaProps || {}

  return (
    <StyledTextareaComponent className={containerClassName}>
      <StyledTextareaContainer
        className={cx({
          container_error: error,
          container_focus: isFocused,
          [kind]: kind,
          boxed: boxed,
        })}
        {...containerPropsRest}
      >
        <label className='textarea_parent'>
          {label ? (
            <span className='textarea__label'>{label}</span>
          ) : (
            // Used for ADA compliance
            <span className='textarea__label--hidden'>{placeholder}</span>
          )}

          <StyledMultiline
            className={`${value.length > 0 ? 'has-content' : ''}`}
          >
            <textarea
              placeholder={placeholder}
              onBlur={handleBlur}
              onFocus={handleFocus}
              onChange={handleChange}
              className={inputClassName}
              maxLength={limit}
              {...textareaPropsRest}
              value={value}
            />
            {limit && (
              <span className='limit'>
                <span>{limitCount}</span>
                <span>/{limit}</span>
              </span>
            )}
          </StyledMultiline>
        </label>
      </StyledTextareaContainer>

      {error && errorMessage && (
        <div className='error' {...errorProps}>
          {errorMessage}
        </div>
      )}
    </StyledTextareaComponent>
  )
}

Textarea.propTypes = {
  error: PropTypes.any,
  errorMessage: PropTypes.any,
  label: PropTypes.string,
  iconLeft: PropTypes.any, // react elements to put before the input`
  boxed: PropTypes.bool,
  className: PropTypes.string,
  textareaProps: PropTypes.shape({
    defaultValue: PropTypes.string,
    onBlur: PropTypes.func,
    onFocus: PropTypes.func,
    onChange: PropTypes.func,
    type: PropTypes.string,
    value: PropTypes.string,
    placeholder: PropTypes.string,
  }),
  errorProps: PropTypes.object,
  kind: PropTypes.string,
}
