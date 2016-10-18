import axios from 'axios'
import constants from './constants'

export default (baseUrl) => {
  return (id, sender) => {
    axios.put(
    `${baseUrl}/${constants.NODE_URL}/receivers/${id}/target`,
    sender,
      {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      })
    .then(response => {
      return response.data
    })
  }
}
