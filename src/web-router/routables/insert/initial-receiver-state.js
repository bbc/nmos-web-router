import initialState from './initial-state'

export default ({receivers}) => {
  initialState(receivers, (mapState) => {
    mapState.check().contract().notSelectable()
  })
}
