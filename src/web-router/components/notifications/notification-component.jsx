import React, {PropTypes} from 'react'
import {Layout, LayoutItem} from '../../../gel-react/grid'
import {Pica} from '../../../gel-react/typography'
import {Alert, Help, Info} from '../../../gel-react/iconography'

let Notification = ({message, type}) => {
  let Icon = Help
  if (type === 'alert') Icon = Alert
  else if (type === 'info') Icon = Info
  return <Layout layouts='flush'>
    <LayoutItem gels='1/10' />
    <LayoutItem className='notification' gels='8/10'>
      <LayoutItem gels='2/24'>
        <Icon />
      </LayoutItem>
      <LayoutItem gels='21/24' className='message'>
        <Pica>{message}</Pica>
      </LayoutItem>
    </LayoutItem>
  </Layout>
}

Notification.propTypes = {
  message: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired
}

export default Notification
