function createIs (type) {
  return (side) => {
    return side.format.includes(type)
  }
}

let includes = {
  video: createIs('video'),
  audio: createIs('audio'),
  data: createIs('data')
}

function compareLabel (left, right) {
  if (left.label.toUpperCase() !== right.label.toUpperCase()) return left.label.toUpperCase() < right.label.toUpperCase() ? -1 : 1
  return left.id.toUpperCase() < right.id.toUpperCase() ? -1 : 1
}

module.exports = function (left, right) {
  let hasFormat = left.format && right.format
  if (hasFormat && left.format === right.format) return compareLabel(left, right)
  else if (hasFormat && includes.video(left)) return -1
  else if (hasFormat && includes.video(right)) return 1
  else if (hasFormat && includes.audio(left)) return -1
  else if (hasFormat && includes.audio(right)) return 1
  else if (hasFormat && includes.data(left)) return -1
  else if (hasFormat && includes.data(right)) return 1
  else if (!left.hasOwnProperty('format') && !right.hasOwnProperty('format')) return compareLabel(left, right)
  return 0
}
