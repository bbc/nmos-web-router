export default (data) => {
  return {
    view () {
      data.expanded = data.expanded || {
        state: []
      }
      return data
    }
  }
}
