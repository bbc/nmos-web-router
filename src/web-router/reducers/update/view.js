import ChangeState from '../change-state'

export default (data, view, action) => {
  if (action.name === 'flows') return view

  view[action.name] = view[action.name].map(routable => {
    routable = Object.assign({}, routable)
    let changeState = ChangeState(routable)

    let matched = data[action.name].filter(r => {
      return r.id === routable.id
    })[0]

    if (matched === undefined) changeState.remove()
    else changeState.unremove()

    return routable
  })

  data[action.name].forEach(routable => {
    let matched = view[action.name].filter(r => {
      return r.id === routable.id
    })[0]

    if (matched === undefined) console.log('add new thing')
  })

  return view
}
