import './routables.css'
import React, { PropTypes } from 'react'
import Icon from '../components/shared/icon-component'
import Checkbox from './checkbox-component'
import NodeComponent from './node-component'
import equal from 'fast-deep-equal'

const noop = function () {}

class Routable extends React.Component {
  /**
   * There could be a large amount of instances of this component, which
   * could lock up the browser if there all re-rendering at the same time.
   *
   * To help improve performance the parent component can set the `allowUpdateRender`
   * prop to `false` and block any redundant renders, e.g. through windowing.
   */
  shouldComponentUpdate (nextProps) {
    if (!nextProps.allowUpdateRender) {
      return false
    }

    // Prevent redundant renders
    return !equal(this.props, nextProps)
  }

  render () {
    const { id, routable, baseState, node, checkbox, onClick, onButton, onCheckbox, onNode, onNodeRender, columnTitle } = this.props

    let routableState = routable.stateString || ''

    let CheckboxComponent = null
    if (checkbox) {
      CheckboxComponent = <Checkbox
        onClick={() => onCheckbox(routable)}
      />
    }

    let RoutableNode = null
    if (node) {
      let unicast = (routable.transport.includes('rtp.ucast'))
      RoutableNode = <NodeComponent
        onClick={onNode}
        onRender={onNodeRender}
        unicast={unicast}
      />
    }

    let columnTitleLabel = columnTitle || ''

    return <div
      id={id}
      className={`routable short ${baseState} ${routableState}`}
      onClick={onClick}>
      <div
        className='button'
        onClick={onButton}>
        <span className='column-label'>{columnTitleLabel}</span>
        <Icon format={routable.format} />
        <span className='label'>{routable.label}</span>
      </div>
      {CheckboxComponent}
      {RoutableNode}
    </div>
  }
}

Routable.defaultProps = {
  id: '',
  node: false,
  baseState: '',
  onClick: noop,
  onButton: noop,
  onCheckbox: noop,
  onNode: noop,
  onNodeRender: noop,
  allowUpdateRender: true
}

Routable.propTypes = {
  id: PropTypes.string,
  routable: PropTypes.object.isRequired,
  baseState: PropTypes.string,
  node: PropTypes.bool,
  checkbox: PropTypes.bool,
  onClick: PropTypes.func,
  onButton: PropTypes.func,
  onCheckbox: PropTypes.func,
  onNode: PropTypes.func,
  onNodeRender: PropTypes.func,
  columnTitle: PropTypes.string,
  /**
   * The next prop validation has been temporarily disabled as it
   * incorrectly throws a `react/no-unused-prop-types` eslint error.
   * This is a known bug in this version of `eslint-plugin-react`:
   * https://github.com/yannickcr/eslint-plugin-react/issues/1684.
   */
  // eslint-disable-next-line
  allowUpdateRender: PropTypes.bool
}

export default Routable
