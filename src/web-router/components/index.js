import './web-router.css'

import React, { PropTypes } from 'react'
import Connections from './connections'
import { DoublePica } from '../../gel-react/typography'
import { LayoutItem } from '../../gel-react/grid'
import Button from '../../components/button-component'

let WebRouter = ({data, view, actions}) => {
  let webRouterContainer = document.querySelector('.web-router-container')
  if (webRouterContainer !== null && view.scroll) webRouterContainer.scrollTop = 0

  return <div className='web-router web-router/choose/route/confirm'>
    <div className='buttons'>
      <Button
        className='left-nav inactive'
        label='CHOOSE' />
      <Button
        className='center-nav active'
        label='ROUTE' />
      <Button
        className='right-nav disabled'
        label='CONFIRM' />
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
