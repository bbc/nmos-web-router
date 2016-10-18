import React, { PropTypes } from 'react'
import Icon from './icon-component'

import Button from '../../../components/button-component'

class Expanded extends React.Component {
  componentDidMount () {
    let mounted = this.props.actions.mounted || function () {}
    mounted()
  }
  render () {
    let description = null
    if (this.props.data.description) description = <div className='description'>
      <span>{this.props.data.description}</span>
    </div>

    return <Button
      name='routable'
      className='expanded'
      icon={<Icon format={this.props.data.format} />}
      label={this.props.data.label}
      afterLabel={description}
      />
  }
}

Expanded.propTypes = {
  data: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
}

export default Expanded
