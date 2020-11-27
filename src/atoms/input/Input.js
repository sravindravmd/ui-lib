import React, { useState, useEffect, useCallback } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import {
  StyledInputComponent,
  StyledInputContainer,
  StyledInput,
} from './Input.styles'

const isFunction = x => typeof x === 'function'

export const Input = ({
  inputProps,
  errorProps,
  label,
  className: containerClassName,
  iconLeft,
  error,
  kind,
  errorMessage,
  ...containerPropsRest
}) => {
  const [value, setValue] = useState('')
  const [isControlled] = useState(typeof inputProps.value === 'string')
  const [isFocused, setFocus] = useState(false)
  const [showPass, setPass] = useState(false)

  const setInputValue = useCallback((value = '') => {
    setValue(value)
  }, [])
  useEffect(() => {
    if (isControlled) {
      return setInputValue(inputProps.value)
    }

    setInputValue(inputProps.defaultValue)
  }, [inputProps.defaultValue, inputProps.value, isControlled, setInputValue])

  useEffect(() => {
    if (inputProps.value) {
      setInputValue(inputProps.value)
    }
  }, [inputProps.value, setInputValue])

  const handleBlur = event => {
    setFocus(false)

    if (isFunction(inputProps.onBlur)) {
      inputProps.onBlur(event)
    }
  }

  const handleFocus = event => {
    setFocus(true)

    if (isFunction(inputProps.onFocus)) {
      inputProps.onFocus(event)
    }
  }

  const handleChange = event => {
    if (!isControlled) {
      setInputValue(event.target.value)
    }

    if (isFunction(inputProps.onChange)) {
      inputProps.onChange(event)
    }
  }

  const {
    className: inputClassName,
    placeholder,
    boxed,
    type,
    ...inputPropsRest
  } = inputProps || {}

  return (
    <StyledInputComponent className={containerClassName}>
      <StyledInputContainer
        className={cx({
          container_error: error,
          container_focus: isFocused,
          [kind]: kind,
          boxed: boxed,
          ['icon-left']: iconLeft,
        })}
        {...containerPropsRest}
      >
        <label className='input_parent'>
          {label ? (
            <span className='input__label'>{label}</span>
          ) : (
            // Used for ADA compliance
            <span className='input__label--hidden'>{placeholder}</span>
          )}

          <div className='input__wrapper'>
            {iconLeft && <span className='icon left'>{iconLeft}</span>}
            <StyledInput
              placeholder={placeholder}
              onBlur={handleBlur}
              onFocus={handleFocus}
              onChange={handleChange}
              className={inputClassName}
              value={value}
              boxed={boxed}
              type={type === 'password' && showPass ? 'text' : type}
              {...inputPropsRest}
            />
            {type === 'password' && value.length > 0 && (
              <span className='input__show' onClick={() => setPass(!showPass)}>
                {showPass ? 'Hide' : 'Show'}
              </span>
            )}
          </div>
        </label>
      </StyledInputContainer>

      {error && errorMessage && (
        <div className='error' {...errorProps}>
          {errorMessage}
        </div>
      )}
    </StyledInputComponent>
  )
}

Input.propTypes = {
  error: PropTypes.bool,
  errorMessage: PropTypes.string,
  label: PropTypes.string,
  iconLeft: PropTypes.element, // react elements to put before the input`
  boxed: PropTypes.bool,
  className: PropTypes.string,
  inputProps: PropTypes.shape({
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

Input.defaultProps = {
  inputProps: {
    type: 'text',
  },
}
