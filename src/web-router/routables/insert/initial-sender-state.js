import initialState from './initial-state'

export default ({senders}) => {
  initialState(senders, (mapState) => {
    mapState.check().contract().selectable()
  })
}
