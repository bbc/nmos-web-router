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
    if (this.props.routable.description) description = <div className='description'>
      <span>{this.props.routable.description}</span>
    </div>

    return <Button
      name='routable'
      className='expanded'
      icon={<Icon format={this.props.routable.format} />}
      label={this.props.routable.label}
      afterLabel={description}
      />
  }
}

Expanded.propTypes = {
  routable: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
}

export default Expanded
