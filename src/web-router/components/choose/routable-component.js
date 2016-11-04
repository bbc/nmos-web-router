import React, { PropTypes } from 'react'
import { Layout, LayoutItem } from '../../../gel-react/grid'
import Icon from '../icon-component'
import Checkbox from '../../../components/checkbox-component'

let Routable = ({routable, check}) => {
  return <Layout layouts='flush' className={`routable static ${routable.state}`}>
    <LayoutItem gels='1/12' className='break' />
    <LayoutItem gels='10/12'>
      <div className='button'>
        <Icon format={routable.format} />
        <span className='label'>{routable.label}</span>
      </div>
      <Checkbox
        onClick={function () {
          check(routable)
        }}
        />
    </LayoutItem>
  </Layout>
}

Routable.propTypes = {
  routable: PropTypes.object.isRequired,
  check: PropTypes.func.isRequired
}

export default Routable
