import React from 'react'
import PropTypes from 'prop-types'
import { StyledShimmerWrapper } from './Shimmer.styles'

export const Shimmer = ({ count, className = '', perRow }) => {
  return (
    <StyledShimmerWrapper className={className} perRow={perRow}>
      {Array.from(Array(count), (e, i) => {
        return (
          <div className='shimmer-item' key={i}>
            <div className='sh-first shine'></div>
            <div className='sh-second shine'></div>
            <div className='sh-third shine'></div>
            <div className='sh-fourth'>
              <div className='sh-f-1'>
                <span className=' shine'></span>
              </div>
              <div className='sh-f-2'>
                <div className='sh-fc-1  shine'></div>
                <div className='sh-fc-2  shine'></div>
              </div>
            </div>
            <div className='sh-fourth'>
              <div className='sh-f-1'>
                <span className=' shine'></span>
              </div>
              <div className='sh-f-2'>
                <div className='sh-fc-1  shine'></div>
                <div className='sh-fc-2  shine'></div>
              </div>
            </div>
          </div>
        )
      })}
    </StyledShimmerWrapper>
  )
}

Shimmer.propTypes = {
  count: PropTypes.number,
  className: PropTypes.string,
  perRow: PropTypes.number,
}
