import { No } from '../../gel-react/iconography'
import React, { PropTypes } from 'react'

class Node extends React.Component {
  componentDidMount () {
    this.props.onRender(this.nodeEl)
  }
  render () {
    let className = (this.props.unicast) ? 'node unicast' : 'node'
    return <div className='node-container'>
      <div
        ref={(nodeEl) => { this.nodeEl = nodeEl }}
        onClick={this.props.onClick}
        className={className}>
        <No />
      </div>
    </div>
  }
}

Node.propTypes = {
  onClick: PropTypes.func.isRequired,
  onRender: PropTypes.func.isRequired,
  unicast: PropTypes.bool
}

export default Node
