import React, { PropTypes } from 'react'

import Expanded from './expanded-component'
import Contracted from './contracted-component'
import { No } from '../../../gel-react/iconography'

let RoutableButton = ({baseId, routable, actions, draggable}) => {
  draggable = draggable || null
  let Component = Contracted
  if (routable.preview) Component = Expanded
  else if (!routable.contracted) Component = Expanded

  let expaneded = routable.contracted ? 'contracted' : 'expanded'
  let preview = routable.preview ? 'preview' : ''
  let routed = routable.routed ? 'routed' : ''
  let routableClassName = routable.routable ? 'routable' : 'not-routable'
  let connected = routable.connected ? 'connected' : 'not-connected'
  let side = routable.side || ''

  return <div
    id={`${baseId}-${routable.id}`}
    className={`routable ${preview} ${routed} ${routableClassName} ${side} routable-${expaneded} routable-${connected}`}
    onClick={function (evt) {
      evt.stopPropagation()
      actions.toggle(baseId, routable.id)
    }}>
    <div className='point-container'>
      <div
        onClick={function (evt) {
          evt.stopPropagation()
          if (connected) actions.remove()
        }}
        className='point'>
        <No />
      </div>
    </div>
    <Component actions={actions} routable={routable} />
    <div>{draggable}</div>
  </div>
}

RoutableButton.propTypes = {
  baseId: PropTypes.string.isRequired,
  routable: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired,
  draggable: PropTypes.object
}

export default RoutableButton
