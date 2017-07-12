import React, { PropTypes } from 'react'
import { Scissors } from '../../../../gel-react/iconography.js'
import { LayoutItem } from '../../../../gel-react/grid'

let Line = ({state}) => {
  // If change is unavailable then return relevant text instead of a line
  let unavailable = state.includes('unavailable')
  if (unavailable) {
    let text = state.substring(12) + ' unavailable'
    if (text.includes('routables')) text = 'sender/receiver unavailable'
    return <LayoutItem className='line-container-unavailable' gels='3/12'>
      <div className='unavailable-text'>{text}</div>
    </LayoutItem>
  } else {
    // Line length is a bit of a hack, it's deliberately too wide and is then restricted
    // by the width of the svg it is in
    return <LayoutItem className='line-container' gels='3/12'>
      <svg className={'line-svg'}>
        <line
          className={'line'}
          x1='0'
          y1='19'
          x2='300'
          y2='19' />
      </svg>
      <Scissors />
    </LayoutItem>
  }
}

Line.propTypes = {
  state: PropTypes.string.isRequired
}

export default Line
