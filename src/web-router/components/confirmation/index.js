import './confirmation.css'

import React, { PropTypes } from 'react'

import Button from '../../../components/button-component'
import Row from './row-component'
import { Yes, Replay } from '../../../gel-react/iconography'

let Confirmation = ({ data, view, sides, actions, layout }) => {
  return <div className={`gel-layout__item confirmation gel-${layout}`}>
    <div className='gel-layout__item gel-1/3' >
      <h3>Confirmation</h3>
    </div>
    <div className='gel-layout__item gel-2/3' />
    <div className='gel-layout__item gel-4/12' >
      <h4>{view.leftTitle}</h4>
    </div>
    <div className='gel-layout__item gel-3/12' />
    <div className='gel-layout__item gel-5/12' >
      <h4>{view.rightTitle}</h4>
    </div>
    <div className='gel-layout__item routes'>{
        view.routes.map((route, index) => {
          return <Row
            key={`route-${index}`}
            left={sides.left.singular}
            right={sides.right.singular}
            view={route}
            index={index}
            actions={actions}
            />
        })
      }
    </div>
    <div className='gel-layout__item gel-7/12' />
    <div className='gel-layout__item gel-5/12'>
      <div className='gel-layout__item gel-1/2'>
        <Button
          onClick={actions.reset}
          icon={<Replay />}
          className='reset'
          label='reset'
          fill />
      </div>
      <div className='gel-layout__item gel-1/2'>
        <Button
          onClick={function () {
            actions.confirm(data.senders)
          }}
          className='confirm'
          icon={<Yes />}
          label='confirm'
          fill
          />
      </div>
    </div>
  </div>
}

Confirmation.propTypes = {
  data: PropTypes.object.isRequired,
  view: PropTypes.object.isRequired,
  sides: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired,
  layout: PropTypes.string.isRequired
}

export default Confirmation
