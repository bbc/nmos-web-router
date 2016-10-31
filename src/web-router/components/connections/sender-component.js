import React, { PropTypes } from 'react'
import Icon from './icon-component'
import Button from '../../../components/button-component'
import { Layout, LayoutItem } from '../../../gel-react/grid'
import { LongPrimer, Pica } from '../../../gel-react/typography'

let Sender = ({sender, actions}) => {
  console.log(sender)
  return <LayoutItem gels='1/1' className={`routable ${sender.state}`}>
    <div className='short'>
      <Button
        onClick={function () {
          actions.toggleSender(sender)
        }}
        fill
        icon={<Icon format={sender.format} />}
        label={sender.label}
        />
      <div className={`node ${sender.node.state}`} />
    </div>
    <div className='full'>
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
      </div>
      <div className={`node ${sender.node.state}`} />
    </div>
  </LayoutItem>
}

Sender.propTypes = {
  sender: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
}

export default Sender
