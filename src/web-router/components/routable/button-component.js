import React, { PropTypes } from 'react'

import Expanded from './expanded-component'
import Contracted from './contracted-component'

let RoutableButton = ({baseId, data, view, actions, draggable}) => {
  draggable = draggable || null
  let Component = Contracted
  if (view.preview) Component = Expanded
  else if (!view.contracted) Component = Expanded

  let expaneded = view.contracted ? 'contracted' : 'expanded'
  let preview = view.preview ? 'preview' : ''
  let routed = view.routed ? 'routed' : ''
  let routable = view.routable ? 'routable' : 'not-routable'
  let side = view.side || ''

  return <div
    id={`${baseId}-${data.id}`}
    className={`routable ${preview} ${routed} ${routable} ${side} routable-${expaneded}`}
    onClick={function () { actions.toggle(baseId, data.id) }}>
    <div className='point-container'>
      <div className='point point-unrouted' />
    </div>
    <Component actions={actions} data={data} />
    <div>{draggable}</div>
  </div>
}

RoutableButton.propTypes = {
  baseId: PropTypes.string.isRequired,
  data: PropTypes.object.isRequired,
  view: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired,
  draggable: PropTypes.object
}

export default RoutableButton
