import removeToken from '../../security/remove-token'

export default (actions) => {
  return () => {
    removeToken()
    actions.signOut()
  }
}
