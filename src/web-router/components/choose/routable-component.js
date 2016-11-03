import React, { PropTypes } from 'react'
import { Layout, LayoutItem } from '../../../gel-react/grid'
import Icon from '../icon-component'
import { No } from '../../../gel-react/iconography'

let Routable = ({routable}) => {
  return <Layout layouts='flush' className={`routable static ${routable.state}`}>
    <LayoutItem gels='1/12' className='break' />
    <LayoutItem gels='10/12'>
      <div className='button'>
        <Icon format={routable.format} />
        <span className='label'>{routable.label}</span>
      </div>
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
