import accessToken from './access-token'

export default () => {
  let currentTime = Math.floor(new Date().getTime() / 1000)
  let expiryTime = accessToken().exp
  if (expiryTime) return expiryTime > currentTime
}
