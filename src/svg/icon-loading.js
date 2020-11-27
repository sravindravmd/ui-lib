import React from 'react'

export default props => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='44px'
    height='44px'
    viewBox='0 0 100 100'
    preserveAspectRatio='xMidYMid'
    {...props}
  >
    <circle
      cx='50'
      cy='50'
      fill='none'
      stroke='#737f8f'
      strokeWidth='10'
      r='40'
      strokeDasharray='188.49555921538757 64.83185307179586'
    >
      <animateTransform
        attributeName='transform'
        type='rotate'
        repeatCount='indefinite'
        dur='1.1904761904761905s'
        values='0 50 50;360 50 50'
        keyTimes='0;1'
      ></animateTransform>
    </circle>
  </svg>
)
