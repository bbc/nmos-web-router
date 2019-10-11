import React, {PropTypes} from 'react'
import {Pica} from '../../../gel-react/typography'

let Status = ({status}) => {
  return <div>
    <Pica>{status}</Pica>
  </div>
}

Status.propTypes = {
  status: PropTypes.string.isRequired
}

export default Status
