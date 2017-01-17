export default (data, type, newData) => {
  let idMap = {}
  let tmp = data[type].concat(newData)
  data[type] = []

  tmp.forEach((d, index) => {
    if (!data.hasOwnProperty(type)) data[type] = []
    if (idMap.hasOwnProperty(d.id)) data[type].splice(idMap[d.id], 1)
    data[type].push(d)
    idMap[d.id] = data[type].length - 1
  })
}
