import React, { PropTypes } from 'react'
import { LayoutItem } from '../../../gel-react/grid'
import Routes from './routes-component'

let RoutesColumn = ({view, data}) => {
  return <LayoutItem className='routes' gels='1/3'>
    <Routes
      view={view}
      data={data}
      />
  </LayoutItem>
}

RoutesColumn.propTypes = {
  view: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired
}

export default RoutesColumn
