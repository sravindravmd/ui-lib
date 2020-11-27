import React from 'react'
import { Table } from './Table'
import { data } from './mock'
export default {
  title: 'organisms/Table',
  component: Table,
  argTypes: {
    isTableSortable: { control: 'boolean' },
    className: { control: 'text' },
    onClick: { action: 'clicked' },
  },
}

const PrimaryTemplate = args => <Table {...args} />

export const PrimaryTable = PrimaryTemplate.bind({})
PrimaryTable.args = data
