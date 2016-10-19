import React, { PropTypes } from 'react'

import { Help, Audio, Video, Data, No } from '../../../gel-react/iconography'

const icons = {
  audio: Audio,
  video: Video,
  data: Data,
  no: No,
  help: Help
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
