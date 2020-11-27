import React from 'react'

import { Calendar } from './Calendar'

export default {
  title: 'atoms/calendar',
  component: Calendar,
  argTypes: {},
}

const Template = args => <Calendar {...args} />

export const CalendarView = Template.bind({})
CalendarView.args = {
  yearsArray: [2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025, 2026, 2027],
}
