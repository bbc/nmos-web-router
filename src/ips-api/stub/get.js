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
  return left.label.toUpperCase() < right.label.toUpperCase() ? -1 : 1
}

function defaultSort (left, right) {
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

export default function (collections, delay, type) {
  return (id) => {
    return new Promise((resolve, reject) => {
      if (id) {
        let data = collections[type].find({ id })
        if (data === null || !data.hasOwnProperty('id')) setTimeout(function () {
          reject('404')
        }, delay)
        else setTimeout(function () {
          resolve(data)
        }, delay)
      } else {
        setTimeout(function () {
          resolve(collections[type].all().sort(defaultSort))
        }, delay)
      }
    })
  }
}
