function isEmpty (obj) {
  return obj === undefined || obj === null || Object.keys(obj).length === 0 && obj.constructor === Object
}

export default (routables, grains, callbacks) => {
  grains.forEach(grain => {
    let callback = 'unknown'
    if (isEmpty(grain.pre) && !isEmpty(grain.post)) callback = 'add'
    else if (!isEmpty(grain.pre) && isEmpty(grain.post)) callback = 'remove'
    else if (!isEmpty(grain.pre) && !isEmpty(grain.post)) callback = 'update'
    let func = callbacks[callback] || function () {}
    func(routables, grain)
  })
}
