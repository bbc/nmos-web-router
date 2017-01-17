export default (data, type, newData) => {
  let idMap = {}
  let tmp = data[type].concat(newData)
  data[type] = []
  tmp.forEach(d => {
    idMap[d.id] = idMap[d.id] || 0
    idMap[d.id] += 1
    if (idMap[d.id] === 1) data[type].push(d)
  })
}
