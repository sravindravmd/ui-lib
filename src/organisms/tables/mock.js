export const data = {
  tableData: [
    {
      id: 1,
      orderId: '01283884',
      created: '5 min ago',
      customerName: 'Annebelle Sinh',
      total: '$130',
      profit: '$70 / 80%',
      status: {
        value: { id: 1, name: 'In Progress' },
        options: [
          { id: 1, name: 'In Progress' },
          { id: 2, name: 'Ready to Ship' },
          { id: 3, name: 'Out for Delivery' },
        ],
      },
      notes: 'ABCD',
    },
    {
      id: 2,
      orderId: '01283885',
      created: '30 min ago',
      customerName: 'Rayna Baptista',
      total: '$40',
      profit: '$10 / 20%',
      status: {
        value: { id: 3, name: 'Out for Delivery' },
        options: [
          { id: 1, name: 'In Progress' },
          { id: 2, name: 'Ready to Ship' },
          { id: 3, name: 'Out for Delivery' },
        ],
      },
      hasChild: true,
      childROW: [
        {
          id: 2,
          orderId: '',
          created: '42 min ago',
          customerName: 'Charlie Workman',
          total: '$40',
          profit: '$10 / 20%',
          status: {
            value: { id: 2, name: 'Ready to Ship' },
            options: [
              { id: 1, name: 'In Progress' },
              { id: 2, name: 'Ready to Ship' },
              { id: 3, name: 'Alicia Weir' },
            ],
          },
          notes: 'ABCD',
        },
      ],
      notes: 'ABCD',
    },
    {
      id: 3,
      orderId: '01283886',
      created: '42 min ago',
      customerName: 'Charlie Workman',
      total: '$40',
      profit: '$10 / 20%',
      status: {
        value: { id: 2, name: 'Ready to Ship' },
        options: [
          { id: 1, name: 'In Progress' },
          { id: 2, name: 'Ready to Ship' },
          { id: 3, name: 'Alicia Weir' },
        ],
      },
      notes: 'ABCD',
    },
  ],
  headerElement: [
    { headingLabel: '#', headingKey: '', isSortable: false },
    { headingLabel: 'Order ID', headingKey: 'orderId', isSortable: true },
    { headingLabel: 'Created', headingKey: 'created', isSortable: true },
    {
      headingLabel: 'Customer Name',
      headingKey: 'customerName',
      isSortable: true,
    },
    { headingLabel: 'Total', headingKey: 'total', isSortable: true },
    { headingLabel: 'Profit', headingKey: 'profit', isSortable: true },
    {
      headingLabel: 'Status',
      headingKey: 'status',
      isSortable: true,
    },
    { headingLabel: 'Notes', headingKey: 'notes', isSortable: true },
  ],
  isTableSortable: false,
  className: 'test-class',
}
