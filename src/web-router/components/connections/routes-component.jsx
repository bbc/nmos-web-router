import React, {PropTypes} from 'react'
import { LayoutItem } from '../../../gel-react/grid'
import Route from './route'

function isEmpty (obj) {
  return obj === undefined || obj === null || Object.keys(obj).length === 0 && obj.constructor === Object
}

function isHalf (obj) {
  return isEmpty(obj) || obj.state.includes('unchecked') || obj.state.includes('removed')
}

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
            if (expanded.state && expanded.state.includes('expanded') && route.sender) { // FIXME: Added route.sender check o fix error
              isExpanded = route.sender.id === expanded.id
            }

            let halfs = []
            if (isHalf(route.receiver)) halfs.push('receiver')
            if (isHalf(route.sender)) halfs.push('sender')
            if (halfs.length === 2) return null

            // TODO: Something isn't right here. See Pivotal #142580263
            if (!route.receiver) {
              if (route.sender) {
                console.warn('Receiver in route is undefined for Sender ' + route.sender.id)
              } else {
                console.warn('Receiver in route is undefined')
              }
            }
            if (!route.sender) {
              if (route.receiver) {
                console.warn('Sender in route is undefined for Receiver ' + route.receiver.id)
              } else {
                console.warn('Sender in route is undefined')
              }
            }

            let half = `half-${index}`
            return <Route
              key={`route-${route.receiver ? route.receiver.id : half}-${route.sender ? route.sender.id : half}`}
              data={route}
              expanded={isExpanded}
              halfs={halfs}
              />
          })
      }</div>
  </LayoutItem>
}

Routes.propTypes = {
  routes: PropTypes.array.isRequired,
  expanded: PropTypes.object.isRequired
}

export default Routes
