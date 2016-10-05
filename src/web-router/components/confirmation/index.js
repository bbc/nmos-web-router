import './confirmation.css'

import React, { PropTypes } from 'react'
import Button from '../../../components/button-component'
import { LayoutItem } from '../../../gel-react/grid'
import { GreatPrimer, Pica } from '../../../gel-react/typography'
import { Yes, Replay } from '../../../gel-react/iconography'
import Row from './row-component'

let Confirmation = ({ data, view, sides, actions, layout }) => {
  return <LayoutItem className='confirmation' gels={[`${layout}@l`, '1/1']}>
    <LayoutItem gels='1/3'>
      <GreatPrimer bold>Confirmation</GreatPrimer>
    </LayoutItem>
    <LayoutItem gels='2/3' />
    <LayoutItem gels='4/12'>
      <Pica bold>{view.leftTitle}</Pica>
    </LayoutItem>
    <LayoutItem gels='3/12' />
    <LayoutItem gels='5/12'>
      <Pica bold>{view.rightTitle}</Pica>
    </LayoutItem>
    <LayoutItem className='routes'>{
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
    </LayoutItem>
    <LayoutItem gels='7/12' />
    <LayoutItem gels='5/12'>
      <LayoutItem gels='1/2'>
        <Button
          onClick={actions.reset}
          icon={<Replay />}
          className='reset'
          label='reset'
          fill />
      </LayoutItem>
      <LayoutItem gels='1/2'>
        <Button
          onClick={function () {
            actions.confirm(data.senders)
          }}
          className='confirm'
          icon={<Yes />}
          label='confirm'
          fill
          />
      </LayoutItem>
    </LayoutItem>
  </LayoutItem>
}

Confirmation.propTypes = {
  data: PropTypes.object.isRequired,
  view: PropTypes.object.isRequired,
  sides: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired,
  layout: PropTypes.string.isRequired
}

export default Confirmation
