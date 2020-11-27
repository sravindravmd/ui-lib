import React, { useState, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import { DownCaret } from '../../assets/images'
import useClickOutside from '../../hooks/click-outside'
import useKeyPress from '../../hooks/key-press'
import {
  StyledDropdownHeader,
  StyledDropdownLabel,
  DropDownListContainer,
  DropDownList,
  DropDownContainer,
  ListItem,
} from './styles'

export const Dropdown = ({
  options = [],
  value,
  isDefault,
  titleLabel,
  className,
}) => {
  const downPress = useKeyPress('ArrowDown')
  const upPress = useKeyPress('ArrowUp')
  const enterPress = useKeyPress('Enter')
  const [cursor, setCursor] = useState(-1)

  const [isOpen, setIsOpen] = useState(false)
  const [selectedOption, setSelectedOption] = useState(value)
  const toggling = () => setIsOpen(!isOpen)

  const onOptionClicked = (value, index) => () => {
    setSelectedOption(value)
    setIsOpen(false)
    setCursor(index)
  }
  const clickRef = useRef()
  useClickOutside(
    clickRef,
    () => {
      setIsOpen(false)
    },
    isOpen
  )
  useEffect(() => {
    if (options.length && isOpen && downPress) {
      setCursor(prevState =>
        prevState < options.length - 1 ? prevState + 1 : prevState
      )
    }
  }, [downPress])

  useEffect(() => {
    if (options.length && isOpen && upPress) {
      setCursor(prevState => (prevState > 0 ? prevState - 1 : prevState))
    }
  }, [upPress])

  useEffect(() => {
    if (options.length && enterPress) {
      setSelectedOption(options[cursor])
      setIsOpen(false)
    }
  }, [cursor, enterPress])

  return (
    <DropDownContainer
      isDefault={isDefault}
      ref={clickRef}
      className={className}
    >
      {isDefault && (
        <StyledDropdownLabel>
          <label className='dd-lable'>{titleLabel}</label>
        </StyledDropdownLabel>
      )}
      <StyledDropdownHeader onClick={toggling} isDefault={isDefault}>
        <div className='content-wrapper'>
          {selectedOption && (
            <label className='option-label'>{selectedOption.name}</label>
          )}
          <div className={isOpen ? 'icon rotate180' : 'icon rotate0'}>
            <DownCaret />
          </div>
        </div>
      </StyledDropdownHeader>
      {isOpen && (
        <DropDownListContainer>
          <DropDownList isDefault={isDefault}>
            {options.map((option, index) => (
              <ListItem
                onClick={onOptionClicked(option, index)}
                key={Math.random()}
                className={index === cursor && 'active'}
              >
                {option.name}
              </ListItem>
            ))}
          </DropDownList>
        </DropDownListContainer>
      )}
    </DropDownContainer>
  )
}
Dropdown.propTypes = {
  isDefault: PropTypes.bool,
  titleLabel: PropTypes.string.isRequired,
  className: PropTypes.string,
  options: PropTypes.array.isRequired,
  value: PropTypes.object,
}
