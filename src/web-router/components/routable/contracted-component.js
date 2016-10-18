import React, { PropTypes } from 'react'
import Icon from './icon-component'

import Button from '../../../components/button-component'

class Contracted extends React.Component {
  componentDidMount () {
    let mounted = this.props.actions.mounted || function () {}
    mounted()
  }
  render () {
    return <Button
      name='routable'
      className='contracted'
      icon={<Icon format={this.props.routable.format} />}
      label={this.props.routable.label} />
  }
}

Contracted.propTypes = {
  routable: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
}

export default Contracted
