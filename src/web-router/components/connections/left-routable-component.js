import React, { PropTypes } from 'react'
import Icon from './icon-component'
import Button from '../../../components/button-component'
import { Layout, LayoutItem } from '../../../gel-react/grid'

let LeftRoutable = ({routable, actions}) => {
  return <LayoutItem gels='1/1' className={`routable ${routable.state}`}>
    <div className='short'>
      <Button
        onClick={function () {
          actions.toggleLeft(routable)
        }}
        fill
        icon={<Icon format={routable.format} />}
        label={routable.label}
        />
      <div className={`node ${routable.node.state}`} />
    </div>
    <div className='full'>
      <div className='button-container'>
        <Layout
          className='button'
          onClick={function () {
            actions.toggleLeft(routable)
          }}>
          <LayoutItem gels='1/1'>
            <Icon format={routable.format} />
          </LayoutItem>
          <LayoutItem gels='1/1'>
            <span className='label'>word word word word word word word word word word word word word word word word word </span>
          </LayoutItem>
        </Layout>
      </div>
      <div className={`node ${routable.node.state}`} />
    </div>
  </LayoutItem>
}

LeftRoutable.propTypes = {
  routable: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
}

export default LeftRoutable
