import React, { PropTypes } from 'react'
import Button from '../../../components/button-component'
import { Layout, LayoutItem } from '../../../gel-react/grid'
import Icon from '../icon-component'
import { No } from '../../../gel-react/iconography'

let Routable = ({routable}) => {
  return <Layout layouts='flush' className='routable static'>
    <LayoutItem gels='10/12'>
      <Button
        fill
        icon={<Icon format={routable.format} />}
        label={routable.label}
        />
    </LayoutItem>
    <LayoutItem className='checkbox' gels='1/12'>
      <No />
    </LayoutItem>
  </Layout>
}

Routable.propTypes = {
  routable: PropTypes.object.isRequired
}

export default Routable
