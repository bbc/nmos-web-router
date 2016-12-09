import React, {PropTypes} from 'react'
import { LayoutItem } from '../../../gel-react/grid'
import Route from './route'

let Routes = ({routes, expanded}) => {
  let expandedClassName = expanded.state.includes('expanded') ? ' expanded' : ''
  let className = `routes${expandedClassName}`
  return <LayoutItem
    className={className}
    gels='2/10'>
    <div className='routes-container'>{
        routes
          .map((route, index) => {
            let isExpanded = false
            if (expanded.state && expanded.state.includes('expanded')) {
              isExpanded = route.sender.id === expanded.id
            }
            return <Route
              key={`route-${index}`}
              data={route}
              expanded={isExpanded}
              />
          })
      }</div>
  </LayoutItem>
}

Routes.propTypes = {
  routes: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
  expanded: PropTypes.object.isRequired
}

export default Routes
