import React, { PropTypes } from 'react'
import Icon from './icon-component'
import { Layout, LayoutItem } from '../../../gel-react/grid'
import { LongPrimer, Pica } from '../../../gel-react/typography'

let ExpandedSender = ({sender, actions}) => {
  return <LayoutItem gels='1/1' className={`routable ${sender.state}`}>
    <div className='full expanded-sender'>
      <div className='button-container'>
        <Layout
          layouts='flush'
          className='button'
          onClick={function () {
            actions.toggleSender(sender)
          }}>
          <LayoutItem gels='1/1'>
            <Icon format={sender.format} />
          </LayoutItem>
          <LayoutItem gels='1/1'>
            <Pica className='label'>{sender.label}</Pica>
          </LayoutItem>
          <LayoutItem gels='1/1' className='description-container'>
            <LongPrimer className='description'>{sender.description}</LongPrimer>
          </LayoutItem>
        </Layout>
        <div className='node-container'>
          <div className={`node ${sender.node.state}`} />
        </div>
      </div>
    </div>
  </LayoutItem>
}

ExpandedSender.propTypes = {
  sender: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
}

export default ExpandedSender
