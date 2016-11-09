import React from 'react'
import {Layout, LayoutItem} from '../../../gel-react/grid'
import {Pica} from '../../../gel-react/typography'
import {Alert} from '../../../gel-react/iconography'

let Notification = () => {
  return <Layout layouts='flush'>
    <LayoutItem gels='1/10' />
    <LayoutItem className='notification' gels='8/10'>
      <LayoutItem gels='2/24'>
        <Alert />
      </LayoutItem>
      <LayoutItem gels='21/24' className='message'>
        <Pica>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Pica>
      </LayoutItem>
    </LayoutItem>
  </Layout>
}

export default Notification
