import updateData from './data'

export default (state, action, merge) => {
  let data = updateData(state, action)
  return merge({ data })
}
