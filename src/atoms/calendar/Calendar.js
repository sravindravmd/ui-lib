import React, { useState, useMemo, useRef, useCallback } from 'react'
import PropTypes from 'prop-types'
import { getYear, getMonth } from 'date-fns'
import en from 'date-fns/locale/en-GB'
import ReactDatePicker, {
  registerLocale,
  setDefaultLocale,
} from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

import useClickOutside from '../../hooks/click-outside'
import { days, months } from './Constant'
import { LeftArrow, RightArrow, WhiteDownArrow } from '../../assets/images'
import {
  StyledDatePicker,
  StyledDateHeader,
  StyledHeaderCenter,
  StyledYearSection,
  StyledDropdown,
  StyledOption,
  StyledArrow,
} from './Calendar.styles'

registerLocale('en-GB', en)
setDefaultLocale('en-GB', en)

export const Calendar = ({
  fixedHeight,
  onDateChange,
  yearsArray,
  numberOfYears,
  ...props
}) => {
  const [startDate, setStartDate] = useState(new Date())
  const [show, setShow] = useState(false)
  const datePickerRef = useRef(null)

  const years = useMemo(() => {
    if (!yearsArray.length) {
      const yearLength = numberOfYears > 10 ? numberOfYears : 10
      return Array.from(
        { length: yearLength },
        (x, i) => getYear(new Date()) + i
      )
    }
    return yearsArray.slice(0, numberOfYears)
  }, [numberOfYears, yearsArray])

  useClickOutside(
    datePickerRef,
    () => {
      setShow(false)
    },
    show
  )

  const onChange = useCallback(
    date => {
      setStartDate(date)
      onDateChange(date)
    },
    [onDateChange]
  )

  const handleDropdown = () => setShow(show => !show)

  const handleDatePickerClick = () => show && setShow(false)

  return (
    <StyledDatePicker ref={datePickerRef} onClick={handleDatePickerClick}>
      <ReactDatePicker
        {...props}
        formatWeekDay={x => days[x]}
        locale='en-GB'
        renderCustomHeader={({
          date,
          changeYear,
          decreaseMonth,
          increaseMonth,
          prevMonthButtonDisabled,
          nextMonthButtonDisabled,
        }) => (
          <StyledDateHeader>
            <StyledArrow
              data-testid='decrement-year'
              onClick={decreaseMonth}
              disabled={prevMonthButtonDisabled}
            >
              <LeftArrow className='left-arrow' />
            </StyledArrow>
            <StyledHeaderCenter>
              <label data-testid='year-title'>{`${
                months[getMonth(date)]
              } ${getYear(date)}`}</label>
              <StyledYearSection onClick={handleDropdown}>
                <WhiteDownArrow className='white-arrow' />
                {show && (
                  <StyledDropdown>
                    {years.map(option => (
                      <StyledOption
                        key={option}
                        onClick={() => changeYear(option)}
                        active={getYear(date) === option}
                      >
                        {option}
                      </StyledOption>
                    ))}
                  </StyledDropdown>
                )}
              </StyledYearSection>
            </StyledHeaderCenter>
            <StyledArrow
              data-testid='increment-year'
              onClick={increaseMonth}
              disabled={nextMonthButtonDisabled}
            >
              <RightArrow className='right-arrow' />
            </StyledArrow>
          </StyledDateHeader>
        )}
        selected={startDate}
        onChange={onChange}
        dayClassName={date => date && 'day-padding'}
        fixedHeight={fixedHeight}
      />
    </StyledDatePicker>
  )
}

Calendar.defaultProps = {
  fixedHeight: true,
  onDateChange: () => {},
  numberOfYears: 10,
  yearsArray: [],
}

Calendar.propTypes = {
  onDateChange: PropTypes.func,
  fixedHeight: PropTypes.bool,
  numberOfYears: PropTypes.number,
  yearsArray: PropTypes.array,
}
