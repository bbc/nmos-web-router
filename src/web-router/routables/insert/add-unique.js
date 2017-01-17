export default (data, type, newData) => {
  let idMap = {}
  let tmp = data[type].concat(newData)
  data[type] = []
  tmp.forEach((d, index) => {
    if (idMap.hasOwnProperty(d.id)) data[type].splice(d.id, 1)
    data[type].push(d)
    idMap[d.id] = index
  })
}
