import React, { PropTypes } from 'react'

import Routable from '../routable'
import Button from '../../../components/button-component'
import { Layout, LayoutItem } from '../../../gel-react/grid'
import { No } from '../../../gel-react/iconography'

let Row = ({ view, left, right, index, actions }) => {
  let baseId = `confirmation-${index}`
  return <Layout className='row'>
    <LayoutItem gels='4/12' className='column'>
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
    </LayoutItem>
    <LayoutItem gels='3/12' className='column route-container'>
      <hr className='route' />
    </LayoutItem>
    <LayoutItem gels='4/12' className='column'>
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
    </LayoutItem>
    <LayoutItem gels='1/12' className='column'>
      <Layout>
        <Button
          onClick={function () { actions.remove(view) }}
          className='remove'
          icon={<No />}
          fill />
      </Layout>
    </LayoutItem>
  </Layout>
}

Row.propTypes = {
  actions: PropTypes.object.isRequired,
  view: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  left: PropTypes.string.isRequired,
  right: PropTypes.string.isRequired
}

export default Row
