export default (state) => {
  return state
    .filter(state => {
      return state !== ''
    })
    .join(' ')
}
