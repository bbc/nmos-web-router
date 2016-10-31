import defaultSort from '../default-sort'

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
      } else setTimeout(function () {
        resolve(collections[type].all().sort(defaultSort))
      }, delay)
    })
  }
}
