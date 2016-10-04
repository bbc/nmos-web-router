import React, { PropTypes } from 'react'

import Routes from './routes-component'

let RoutesColumn = ({view, data}) => {
  return <div className={'gel-layout__item gel-1/3 routes'}>
    <Routes
      view={view}
      data={data}
      />
  </div>
}

RoutesColumn.propTypes = {
  view: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired
}

export default RoutesColumn
