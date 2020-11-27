import styled from 'styled-components'
import { theme } from '../../shared'

export const StyledDatePicker = styled.div`
  user-select: none;
  background: ${theme.palette.brand.primary.white};
  border-radius: 4px;
  .react-datepicker {
    font-family: ${theme.typography.link.fontFamily} !important;
    font-size: 0.8125rem;
    line-height: ${theme.typography.link.lineHeight};
    padding: 5px 20px 5px 20px;
    border: none;
    border: 1px solid #eee;
    box-shadow: 0px 6px 16px rgba(115, 127, 143, 0.16);
  }
  .react-datepicker__header {
    background: transparent;
    border: none;
  }

  .react-datepicker__day-names {
    display: flex;
    justify-content: space-evenly;
    margin: 0 auto;
  }
  .react-datepicker__day-name {
    color: ${theme.palette.brand.primary.gray};
    letter-spacing: 0.02em;
  }
  .day-padding {
    box-sizing: border-box;
    margin: 6px 8px;
    &:focus {
      outline: none;
    }
    :not(.react-datepicker__day--selected):hover {
      background: ${theme.palette.brand.primary.gray}10 !important;
    }
  }

  .white-arrow {
    position: absolute;
    top: 54%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .react-datepicker__triangle {
    display: none;
  }
  .react-datepicker__month-container {
    border: none;
  }
  .react-datepicker__day--selected {
    border-radius: 50%;
    background: ${theme.palette.brand.primary.charcoal};
    font-weight: normal;
  }
  .react-datepicker__day--in-selecting-range {
    background: ${theme.palette.brand.primary.charcoal};
    opacity: 0.3;
  }
  .react-datepicker__day--in-range {
    background: ${theme.palette.brand.primary.charcoal};
  }
  .react-datepicker__day {
    border-radius: 50% !important;
    width: 32px;
    height: 32px;
    line-height: 32px;
    &:hover {
      width: 32px;
      height: 32px;
      line-height: 32px;
    }
  }
  .react-datepicker__day--keyboard-selected {
    background: none;
    color: ${theme.palette.brand.primary.charcoal};
  }
  .left-arrow {
    position: relative;
    left: 5px;
  }
  .right-arrow {
    position: relative;
    right: 5px;
  }
`

export const StyledDateHeader = styled.div`
  margin: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const StyledHeaderCenter = styled.div`
  display: flex;
  align-items: center;
  label {
    font-family: 'IBM Plex Sans';
    font-size: ${theme.typography.link.fontSize};
    line-height: 1.25rem;
    color: #333333;
    font-weight: 600;
  }
`
export const StyledYearSection = styled.div`
  margin-left: 13px;
  position: relative;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: ${theme.palette.brand.primary.charcoal};
  select {
    opacity: 0;
    width: 18px;
    height: 18px;
  }
`
export const StyledArrow = styled.div`
  display: inline-block;
  ${({ disabled }) =>
    disabled &&
    `
		opacity:0.2;
		pointer-events:none;
	`}
`
export const StyledDropdown = styled.div`
  font-family: ${theme.typography.link.fontFamily};
  font-size: 0.8125rem;
  line-height: ${theme.typography.link.lineHeight};
  letter-spacing: 0.02em;
  color: ${theme.palette.brand.primary.charcoal};
  box-sizing: border-box;
  position: absolute;
  left: 50%;
  top: 24px;
  transform: translate(-40%, 0);
  width: 202px;
  height: 176px;
  background: ${theme.palette.brand.primary.white};
  border: 1px solid ${theme.palette.brand.primary.gray};
  box-shadow: 0px 6px 16px rgba(115, 127, 143, 0.16);
  border-radius: 4px;
  overflow-y: auto;
  text-align: left;
  ::-webkit-scrollbar {
    width: 4px;
  }

  ::-webkit-scrollbar-track {
    background: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background: ${theme.palette.brand.primary.gray};
    border-radius: 10px;
  }
`
export const StyledOption = styled.div`
  padding: 14px 24px;
  ${({ active }) =>
    active &&
    `
	background: ${theme.palette.brand.primary.gray}10;

	`}
`
