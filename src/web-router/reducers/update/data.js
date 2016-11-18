function noop (data) { return data }

function add (data, grain) {
  return [].concat(data).concat([grain.post])
}

function remove (data, grain) {
  let index = -1
  data.forEach((d, i) => {
    if (d.id === grain.pre.id) index = i
  })
  if (index === -1) return data
  if (index === data.length - 1) return data.slice(0, data.length - 1)
  return data.slice(0, index).concat(data.slice(index + 1, data.length))
}

function update (data, grain) {
  return data.map(d => {
    d = Object.assign({}, d)
    if (grain.post.id === d.id) return grain.post
    else return d
  })
}

function isEmpty (obj) {
  return obj === undefined || obj === null || Object.keys(obj).length === 0 && obj.constructor === Object
}

export default (state, action) => {
  let data = Object.assign({}, state.data) || {}

  let grains = action.update[action.name]
  grains.forEach(grain => {
    let post = grain.post
    let pre = grain.pre

    let callback = noop
    if (isEmpty(pre) && !isEmpty(post)) callback = add
    else if (!isEmpty(pre) && isEmpty(post)) callback = remove
    else if (!isEmpty(pre) && !isEmpty(post)) callback = update

    data[action.name] = callback(data[action.name], grain)
  })

  data[action.name].sort(window.nmos.defaultSort)

  return data
}
