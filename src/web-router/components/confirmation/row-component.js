import React, { PropTypes } from 'react'

import Routable from '../routable'
import Button from '../../../components/button-component'
import { No } from '../../../gel-react/iconography'

let Row = ({ view, left, right, index, actions }) => {
  let baseId = `confirmation-${index}`
  return <div className='gel-layout row'>
    <div className='gel-layout__item gel-4/12 column'>
      <Routable
        baseId={baseId}
        data={view[left]}
        view={{
          contracted: view[left].contracted,
          routed: true,
          side: 'left'
        }}
        actions={{
          toggle () {
            actions.toggleConfirmation(index, left)
          }
        }}
      />
    </div>
    <div className='gel-layout__item gel-3/12 column route-container'>
      <hr className='route' />
    </div>
    <div className='gel-layout__item gel-4/12 column'>
      <Routable
        baseId={baseId}
        data={view[right]}
        view={{
          contracted: view[right].contracted,
          routed: true,
          side: 'right'
        }}
        actions={{
          toggle () {
            actions.toggleConfirmation(index, right)
          }
        }}
        />
    </div>
    <div className='gel-layout__item gel-1/12 column'>
      <div className='gel-layout'>
        <Button
          onClick={function () { actions.remove(view) }}
          className='remove'
          icon={<No />}
          fill />
      </div>
    </div>
  </div>
}

Row.propTypes = {
  actions: PropTypes.object.isRequired,
  view: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  left: PropTypes.string.isRequired,
  right: PropTypes.string.isRequired
}

export default Row
