import React, { PropTypes } from 'react'
import { LayoutItem } from '../../../gel-react/grid'
import Routable from '../../routables/routable-component'

import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

class Routables extends React.Component {
  render () {
    let side = this.props.side
    let type = this.props.type
    let actions = this.props.actions
    let expanded = this.props.expanded

    const routables = this.props.routables.map((routable, index) => {
      return <Routable
        key={`${side}-${routable.id}`}
        baseState='static'
        checkbox
        routable={routable}
        onCheckbox={function () {
          if (!expanded.state.includes('contracted')) actions.toggleSender(expanded)
          actions.check(routable, type)
        }}
        />
    })

    return <LayoutItem gels='1/2' className={`routables-${side}`}>
      <div>
        <ReactCSSTransitionGroup
          transitionName='transition'
          transitionEnterTimeout={250}
          transitionLeaveTimeout={250}>
          {routables}
        </ReactCSSTransitionGroup>
      </div>
    </LayoutItem>
  }
}

Routables.propTypes = {
  routables: PropTypes.array.isRequired,
  side: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  actions: PropTypes.object.isRequired,
  expanded: PropTypes.object.isRequired
}

export default Routables
