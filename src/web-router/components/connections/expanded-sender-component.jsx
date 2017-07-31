import React, { PropTypes } from 'react'
import Icon from '../shared/icon-component'
import { Layout, LayoutItem } from '../../../gel-react/grid'
import { LongPrimer, Pica } from '../../../gel-react/typography'

class ExpandedSender extends React.Component {
  componentDidMount () {
    this.props.actions.update()
  }
  render () {
    let sender = this.props.sender
    let actions = this.props.actions
    let nodeClassName = (sender.transport.includes('rtp.ucast')) ? 'node unicast' : 'node'

    return <div className={sender.stateString}>
      <div className={`full expanded-sender routable ${sender.stateString}`}>
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
            <div className={nodeClassName} />
          </div>
        </div>
      </div>
    </div>
  }
}

ExpandedSender.propTypes = {
  sender: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
}

export default ExpandedSender
