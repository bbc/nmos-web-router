import React, { PropTypes } from 'react'
import { Scissors } from '../../../gel-react/iconography.js'
import { LayoutItem } from '../../../gel-react/grid'

let Line = ({state}) => {
  // Line length is a bit of a hack, it's deliberately too wide and is then restricted
  // by the width of the svg it is in
  let unavailable = state.includes('unavailable')
  if (unavailable) {
    let text = state.substring(12) + ' unavailable'
    return <LayoutItem className='line-container-unavailable' gels='3/12'>
      <div className='unavailable-text'>{text}</div>
    </LayoutItem>
  } else {
    return <LayoutItem className='line-container' gels='3/12'>
      <svg className={'line-svg'}>
        <line
          className={'line'}
          x1='0'
          y1='27'
          x2='300'
          y2='27' />
      </svg>
      <Scissors />
    </LayoutItem>
  }
}

Line.propTypes = {
  state: PropTypes.string.isRequired
}

export default Line
