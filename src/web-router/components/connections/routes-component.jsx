import React, {PropTypes} from 'react'
import { LayoutItem } from '../../../gel-react/grid'
import Route from './route-component'

let Routes = ({routes}) => {
  return <LayoutItem
    className='routes'
    gels='2/10'>
    <div className='routes-container'>{
        routes
          .map((route, index) => {
            return <Route
              key={`route-${route.receiver.id}-${route.sender.id}`}
              data={route}
              />
          })
      }</div>
  </LayoutItem>
}

Routes.propTypes = {
  routes: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
}

export default Routes
