export default (routables) => {
  let filteredRoutables = routables.filter(routable => {
    return routable.state.includes('fuzzymatch')
  })

  let count = 0
  filteredRoutables.forEach(routable => {
    if (routable.state.includes('checked')) count += 1
  })

  let current = 'none'
  let to = 'all'
  if (filteredRoutables.length === count) {
    current = 'all'
    to = 'none'
  } else if (count === 0) {
    current = 'none'
    to = 'all'
  } else if (filteredRoutables.length > count) {
    current = 'some'
    to = 'none'
  }

  return {
    current,
    to
  }
}
