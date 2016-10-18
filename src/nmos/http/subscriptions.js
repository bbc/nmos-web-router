import axios from 'axios'

export default (baseUrl) => {
  return () => {
    axios.get(`${baseUrl}/subscriptions`)
      .then(response => {
        return response.data
      })
  }
}
