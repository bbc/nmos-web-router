import React, {PropTypes} from 'react'
import { LayoutItem } from '../../../gel-react/grid'
import Route from './route-component'

class Routes extends React.Component {
  componentDidMount () {
    this.props.actions.routesRendered(document.querySelector('.routes'))
  }
  render () {
    console.log(this.props.routes.map(route => {
      return {
        state: route.state,
        receiver: route.receiver.id,
        sender: route.sender.id
      }
    }))
    return <LayoutItem
      className='routes'
      gels='2/10'>
      <div className='routes-container'>{
        this.props.routes
          .map((route, index) => {
            return <Route
              key={`route-${route.receiver.id}-${route.sender.id}`}
              state={route.state}
              expanded={false}
              senderNodeEl={route.sender.nodeEl}
              receiverNodeEl={route.receiver.nodeEl}
              routesEl={this.props.routesEl}
              />
          })
      }</div>
    </LayoutItem>
  }
}

Routes.propTypes = {
  routesEl: PropTypes.any,
  routes: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
}

export default Routes
