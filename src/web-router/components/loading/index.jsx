import './loading.css'

import React, { PropTypes } from 'react'
import { Loading as Spinner, No, Yes } from '../../../gel-react/iconography'
import { Layout, LayoutItem } from '../../../gel-react/grid'
import { Trafalgar, GreatPrimer, Pica } from '../../../gel-react/typography'
import Status from './status-component'

let Loading = ({view}) => {
  return <Layout className={`loading-container ${view.status}`}>
    <Layout className={view.status} layouts='center' gels='1/1'>
      <LayoutItem className='header'>
        <Trafalgar className='title title-loading'><Spinner /> Loading</Trafalgar>
        <Trafalgar className='title title-error'><No /> Error: Exceeded retry limit</Trafalgar>
      </LayoutItem>
    </Layout>
    <LayoutItem>
      <GreatPrimer>Attempting to get get data, if a problem arrises please check the following:</GreatPrimer>
      <ul>
        <li><Pica>Check the console for any errors</Pica></li>
        <li><Pica>URL contains <b>url=</b><a href='#'>{'http://location:port'}</a> where your data is being served, it defaults to <a href='http://ipstudio-discovery.rd.bbc.co.uk:8870'>{'http://ipstudio-discovery.rd.bbc.co.uk:8870'}</a></Pica></li>
        <li><Pica>Check your servers are working</Pica></li>
      </ul>
    </LayoutItem>
    <Layout layouts='center' gels='1/1'>
      {view.notLoaded.map((notLoaded, index) => {
        let name = 'not-loaded'
        return <Status
          key={`${name}-${index}`}
          name={name}
          label={notLoaded}
          icon={<Spinner />}
          />
      })}
      {view.errored.map((errored, index) => {
        let name = 'errored'
        return <Status
          key={`${name}-${index}`}
          name={name}
          label={errored}
          icon={<No />}
          />
      })}
      {view.loaded.map((loaded, index) => {
        let name = 'loaded'
        return <Status
          key={`${name}-${index}`}
          name={name}
          label={loaded}
          icon={<Yes />}
          />
      })}
    </Layout>
  </Layout>
}

Loading.propTypes = {
  view: PropTypes.object.isRequired
}

export default Loading
