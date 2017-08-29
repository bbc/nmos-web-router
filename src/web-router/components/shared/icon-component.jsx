import React, { PropTypes } from 'react'

import { IPSQuestionMark, IPSAudioIcon, IPSVideoIcon, IPSDataIcon, IPSMuxIcon, IPSCross } from '../../../gel-react/iconography'
import Empty from './empty'

const icons = {
  audio: IPSAudioIcon,
  video: IPSVideoIcon,
  data: IPSDataIcon,
  mux: IPSMuxIcon,
  no: IPSCross,
  help: IPSQuestionMark,
  blank: Empty
}

let Icon = ({ format }) => {
  let iconKey = 'help'
  if (format) {
    iconKey = Object.keys(icons).filter(icon => {
      return format.includes(icon)
    })[0] || iconKey
  }
  let Icon = icons[iconKey]
  return <Icon />
}

Icon.propTypes = {
  format: PropTypes.string
}

export default Icon
