import './loading.css'

import React, { PropTypes } from 'react'
import { Loading, No, Yes } from '../../../gel-react/iconography'
import Button from '../../../components/button-component'

let LoadingComponent = ({view}) => {
  return <div className={view.status}>
    <div className='header gel-layout'>
      <div className='gel-layout__item'>
        <h4 className='title title-loading gel-canon'><Loading /> Loading</h4>
        <h4 className='title title-error gel-canon'><No /> Error: Exceeded retry limit</h4>
      </div>
      <div className='gel-layout__item'>
        <span className='message gel-double-pica'>Attempting to get get data, if a problem arrises please check the following:</span>
        <ul>
          <li>Check the console for any errors</li>
          <li>URL contains <b>base-url=</b><a href='#'>{'http://locaton:port'}</a> where your data is being served, it defaults to <a href='http://ipstudio-discovery.rd.bbc.co.uk:8870'>{'http://ipstudio-discovery.rd.bbc.co.uk:8870'}</a></li>
          <li>Check your servers are working</li>
        </ul>
      </div>
    </div>
    <div className='gel-layout'>
      {view.errored.map((errored, index) => {
        return <Button
          key={`errored-${index}`}
          name='errored'
          className='status'
          icon={<No />}
          label={errored} />
      })}
      {view.notLoaded.map((notLoaded, index) => {
        return <Button
          key={`not-loaded-${index}`}
          name='not-loaded'
          className='status'
          icon={<Loading />}
          label={notLoaded} />
      })}
      {view.loaded.map((loaded, index) => {
        return <Button
          key={`loaded-${index}`}
          name='loaded'
          className='status'
          icon={<Yes />}
          label={loaded} />
      })}
    </div>
  </div>
}

LoadingComponent.propTypes = {
  view: PropTypes.object.isRequired
}

export default LoadingComponent
