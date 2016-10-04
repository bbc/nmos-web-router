import React from 'react'
import Button from '../../components/button-component'

let Welcome = () => {
  return <div
    style={{
      textAlign: 'center',
      margin: '0 4em'
    }}>
    <div style={{
      fontSize: '24px'
    }}>
      <span>Welcome to the IP Studio site </span>
    </div>
    <div>
      <span>You will find all the utilities to interact and observe IP Studio</span>
    </div>
    <ul style={{
      listStyle: 'none',
      marginTop: '2rem'
    }}>
      <li>
        <Button
          to='web-router'
          name='contents'
          label='WEB ROUTER' />
      </li>
    </ul>
  </div>
}

export default Welcome
