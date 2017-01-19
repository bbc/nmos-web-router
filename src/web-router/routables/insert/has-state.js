export default (state, values) => {
  return state.some(value => {
    return values.includes(value)
  })
}
