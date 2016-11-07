import React, { PropTypes } from 'react'

import { Help, Audio, Video, Data, No } from '../../gel-react/iconography'

let Empty = () => {
  return <svg
    className='gel-icon gel-icon-empty'
    xmlns='http://www.w3.org/2000/svg'
    width='32'
    height='32'
    viewBox='0 0 32 32' />
}

const icons = {
  audio: Audio,
  video: Video,
  data: Data,
  no: No,
  help: Help,
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
