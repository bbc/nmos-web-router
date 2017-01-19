export default (data, type, newData) => {
  if (!data.hasOwnProperty(type)) data[type] = []
  newData.forEach(newValue => {
    let pushed = false
    data[type].forEach((oldValue, index) => {
      if (oldValue.id === newValue.id) {
        let toUpdate = data[type][index]
        Object.keys(newValue).forEach(key => {
          toUpdate[key] = newValue[key]
        })
        pushed = true
      }
    })
    if (!pushed) data[type].push(newValue)
  })
}
