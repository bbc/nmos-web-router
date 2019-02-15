import { BEARER_KEY } from './constants'

export default () => {
  if (window.sessionStorage) {
    window.sessionStorage.removeItem(BEARER_KEY)
  }
}
