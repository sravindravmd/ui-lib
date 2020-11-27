"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Calendar = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _dateFns = require("date-fns");

var _enGB = _interopRequireDefault(require("date-fns/locale/en-GB"));

var _reactDatepicker = _interopRequireWildcard(require("react-datepicker"));

require("react-datepicker/dist/react-datepicker.css");

var _clickOutside = _interopRequireDefault(require("../../hooks/click-outside"));

var _Constant = require("./Constant");

var _images = require("../../assets/images");

var _Calendar = require("./Calendar.styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

(0, _reactDatepicker.registerLocale)('en-GB', _enGB.default);
(0, _reactDatepicker.setDefaultLocale)('en-GB', _enGB.default);

const Calendar = ({
  fixedHeight,
  onDateChange,
  yearsArray,
  numberOfYears,
  ...props
}) => {
  const [startDate, setStartDate] = (0, _react.useState)(new Date());
  const [show, setShow] = (0, _react.useState)(false);
  const datePickerRef = (0, _react.useRef)(null);
  const years = (0, _react.useMemo)(() => {
    if (!yearsArray.length) {
      const yearLength = numberOfYears > 10 ? numberOfYears : 10;
      return Array.from({
        length: yearLength
      }, (x, i) => (0, _dateFns.getYear)(new Date()) + i);
    }

    return yearsArray.slice(0, numberOfYears);
  }, [numberOfYears, yearsArray]);
  (0, _clickOutside.default)(datePickerRef, () => {
    setShow(false);
  }, show);
  const onChange = (0, _react.useCallback)(date => {
    setStartDate(date);
    onDateChange(date);
  }, [onDateChange]);

  const handleDropdown = () => setShow(show => !show);

  const handleDatePickerClick = () => show && setShow(false);

  return /*#__PURE__*/_react.default.createElement(_Calendar.StyledDatePicker, {
    ref: datePickerRef,
    onClick: handleDatePickerClick
  }, /*#__PURE__*/_react.default.createElement(_reactDatepicker.default, _extends({}, props, {
    formatWeekDay: x => _Constant.days[x],
    locale: "en-GB",
    renderCustomHeader: ({
      date,
      changeYear,
      decreaseMonth,
      increaseMonth,
      prevMonthButtonDisabled,
      nextMonthButtonDisabled
    }) => /*#__PURE__*/_react.default.createElement(_Calendar.StyledDateHeader, null, /*#__PURE__*/_react.default.createElement(_Calendar.StyledArrow, {
      "data-testid": "decrement-year",
      onClick: decreaseMonth,
      disabled: prevMonthButtonDisabled
    }, /*#__PURE__*/_react.default.createElement(_images.LeftArrow, {
      className: "left-arrow"
    })), /*#__PURE__*/_react.default.createElement(_Calendar.StyledHeaderCenter, null, /*#__PURE__*/_react.default.createElement("label", {
      "data-testid": "year-title"
    }, `${_Constant.months[(0, _dateFns.getMonth)(date)]} ${(0, _dateFns.getYear)(date)}`), /*#__PURE__*/_react.default.createElement(_Calendar.StyledYearSection, {
      onClick: handleDropdown
    }, /*#__PURE__*/_react.default.createElement(_images.WhiteDownArrow, {
      className: "white-arrow"
    }), show && /*#__PURE__*/_react.default.createElement(_Calendar.StyledDropdown, null, years.map(option => /*#__PURE__*/_react.default.createElement(_Calendar.StyledOption, {
      key: option,
      onClick: () => changeYear(option),
      active: (0, _dateFns.getYear)(date) === option
    }, option))))), /*#__PURE__*/_react.default.createElement(_Calendar.StyledArrow, {
      "data-testid": "increment-year",
      onClick: increaseMonth,
      disabled: nextMonthButtonDisabled
    }, /*#__PURE__*/_react.default.createElement(_images.RightArrow, {
      className: "right-arrow"
    }))),
    selected: startDate,
    onChange: onChange,
    dayClassName: date => date && 'day-padding',
    fixedHeight: fixedHeight
  })));
};

exports.Calendar = Calendar;
Calendar.defaultProps = {
  fixedHeight: true,
  onDateChange: () => {},
  numberOfYears: 10,
  yearsArray: []
};
Calendar.propTypes = {
  onDateChange: _propTypes.default.func,
  fixedHeight: _propTypes.default.bool,
  numberOfYears: _propTypes.default.number,
  yearsArray: _propTypes.default.array
};