import './web-router.css'

import React, { PropTypes } from 'react'
import Connections from './connections'
import { DoublePica } from '../../gel-react/typography'
import { LayoutItem } from '../../gel-react/grid'
import Button from '../../components/button-component'

let WebRouter = ({data, view, actions}) => {
  return <div className={`web-router web-router${view.location}`}>
    <div className='buttons-container'>
      <div className='buttons'>
        <Button
          to='/web-router/choose'
          fill
          className='choose-nav left-nav nav-1/2'
          label='CHOOSE' />
        <Button
          to='/web-router/route'
          fill
          className='route-nav right-nav nav-1/2'
          label='ROUTE' />
      </div>
    </div>
    <div className='container choose left'>
      <LayoutItem><DoublePica>Choose</DoublePica></LayoutItem>
    </div>
    <div className='container route center'>
      <LayoutItem><DoublePica>Route</DoublePica></LayoutItem>
      <Connections
        view={view.connections}
        actions={actions}
        />
    </div>
    <div className='container confirm right'>
      <LayoutItem><DoublePica>Confirm</DoublePica></LayoutItem>
    </div>
  </div>
}

WebRouter.propTypes = {
  data: PropTypes.object.isRequired,
  view: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
}

export default WebRouter
