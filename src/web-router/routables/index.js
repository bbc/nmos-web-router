import insert from './insert'
import expand from './expand'
import filter from './filter'
import route from './route'
import update from './update'
import check from './check'

export default (data) => {
  return {
    check: check(data),
    update: {
      receivers (grains) {
        update(data).receivers(grains)
      },
      senders (grains) {
        update(data).senders(grains)
      },
      flows (grains) {
        update(data).flows(grains)
      }
    },
    route: route(data),
    unroute: route(data),
    filter: filter(data),
    expand: expand(data),
    contract: expand(data),
    insert: {
      receivers (newData) {
        return insert(data).receivers(newData)
      },
      senders (newData) {
        return insert(data).senders(newData)
      },
      flows (newData) {
        return insert(data).flows(newData)
      }
    },
    view () {
      data.expanded = data.expanded || {
        state: []
      }
      return data
    }
  }
}
