import defaultSort from '../default-sort'
import axios from 'axios'
import constants from './constants'

export default (baseUrl, name) => {
  return (id) => {
    let url = `${baseUrl}/${constants.QUERY_URL}/${name}/`
    if (id) url += `${id}/`
    return axios.get(url)
    .then(response => {
      let data = response.data
      if (Array.isArray(response.data)) {
        data = response.data.map(d => {
          d.type = name
          return d
        })
        data.sort(defaultSort)

      } else data.type = name
      return data
    })
  }
}
