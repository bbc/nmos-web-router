import React, { PropTypes } from 'react'
import { Layout, LayoutItem } from '../../../gel-react/grid'
import Icon from '../icon-component'
import Checkbox from '../../../components/checkbox-component'

let Routable = ({ routable, baseState, node, checkbox, onCheckbox, onNode, onClick }) => {
  onCheckbox = onCheckbox || function () {}
  let CheckboxComponent = null
  if (checkbox) CheckboxComponent = <Checkbox
    onClick={onCheckbox}
    />

  return <Layout layouts='flush' className={`routable ${baseState} ${routable.state}`}>
    <LayoutItem gels='1/12' className='break' />
    <LayoutItem gels='10/12'>
      <div className='button'>
        <Icon format={routable.format} />
        <span className='label'>{routable.label}</span>
      </div>
      {CheckboxComponent}
    </LayoutItem>
  </Layout>
}

Routable.propTypes = {
  routable: PropTypes.object.isRequired,
  baseState: PropTypes.string,
  node: PropTypes.string,
  checkbox: PropTypes.bool,
  onCheckbox: PropTypes.func,
  onNode: PropTypes.func,
  onClick: PropTypes.func
}

export default Routable
