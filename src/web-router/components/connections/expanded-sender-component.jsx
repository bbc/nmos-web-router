import React, { PropTypes } from 'react'
import Icon from '../shared/icon-component'
import { Layout, LayoutItem } from '../../../gel-react/grid'
import { LongPrimer, Pica } from '../../../gel-react/typography'

let ExpandedSender = ({sender, actions}) => {
  let senderState = sender.state || []
  senderState = senderState
    .filter(state => {
      return state !== ''
    })
    .join(' ')

  let nodeState = sender.node.state || []
  nodeState = nodeState
      .filter(state => {
        return state !== ''
      })
      .join(' ')

  return <div className={senderState}>
    <div className='full expanded-sender routable'>
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
          <div className={`node ${nodeState}`} />
        </div>
      </div>
    </div>
  </div>
}

ExpandedSender.propTypes = {
  sender: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
}

export default ExpandedSender
