import React from 'react'
import {Link} from 'react-router'
import { Layout, LayoutItem } from '../../gel-react/grid'
import { Trafalgar, GreatPrimer } from '../../gel-react/typography'

let Welcome = () => {
  return <Layout layouts='center' className='welcome'>
    <LayoutItem gels='9/10'>
      <Trafalgar>Welcome to the IP Studio site</Trafalgar>
    </LayoutItem>
    <LayoutItem gels='9/10'>
      <GreatPrimer>You will find all of the necessary utilities to interact with and observe IP Studio</GreatPrimer>
    </LayoutItem>
    <LayoutItem gels='9/10' style={{ margin: '20px' }}>
      <GreatPrimer>Routing</GreatPrimer>
      <Link
        to='/web-router'
        className='button contents'>
        WEB ROUTER
      </Link>
      <a
        href='http://ipstudio-master.rd.bbc.co.uk/ipp-web/apps/sdplister/index.html'
        className='button contents'>
        SDP LISTER
      </a>
    </LayoutItem>
    <LayoutItem gels='9/10' style={{ margin: '10px' }}>
      <GreatPrimer>Pipelines</GreatPrimer>
      <a
        href='http://ipstudio-master.rd.bbc.co.uk/ipp-web/apps/configurator2/'
        className='button button-red'>
        CONFIGURATOR
      </a>
      <a
        href='http://ipstudio-master.rd.bbc.co.uk/ipp-web/apps/status/index.html'
        className='button button-red'>
        STATUS MONITOR
      </a>
    </LayoutItem>
    <LayoutItem gels='9/10' style={{ margin: '10px' }}>
      <GreatPrimer>Processors</GreatPrimer>
      <a
        href='http://ipstudio-master.rd.bbc.co.uk/ssp-tinker-frontend/'
        className='button button-green'>
        TINKER
      </a>
    </LayoutItem>
  < /Layout>
}

export default Welcome
