import React from 'react'
import { render } from 'react-dom'
import { Provider, connect } from 'react-redux'
import { createStore, combineReducers } from 'redux'
import { Router, Route, browserHistory, hashHistory } from 'react-router'
import { syncHistoryWithStore, routerReducer as routing } from 'react-router-redux'

let routes = (containers) => {
  return Object.keys(containers)
    .map((path, index) => {
      let route = containers[path]
      let subRoutes = Object.keys(route)
        .filter(key => {
          return key !== path && key !== 'name' && key !== 'component' && key !== 'reducer'
        })
      return <Route
        key={'route-' + (Math.random() + '').replace('0.', '')}
        path={path}
        component={route.component}>{
          subRoutes.map(subRoute => {
            return routes(route[subRoute])
          })
      }</Route>
    })
}

let theReducer = (options) => {
  let name = options.name
  let initialState = options.initialState || {}
  let reducers = options.reducers || {}
  let reducersAll = options.reducersAll || {}
  let reduce = options.reducer || function () {}

  let createMerge = (state) => {
    return function (data) {
      return Object.assign({}, state, data)
    }
  }

  return function (state, action) {
    action = action || {}
    let result = state && state[name]
    result = result || state
    result = result || initialState

    if (action.type) {
      let actionName = action.type.split('/')[0].replace('@@', '')
      let actionType = action.type.replace(`@@${actionName}/`, '')
      let localAction = actionName === name
      if (localAction && reducers.hasOwnProperty(actionType)) {
        return reducers[actionType](result, action, createMerge(state)) || result
      } else if (reducersAll.hasOwnProperty(actionName) && reducersAll[actionName].hasOwnProperty(actionType)) {
        return reducersAll[actionName][actionType](result, action, createMerge(state)) || result
      }
      return reduce(result, action, createMerge(state), actionName, actionType) || result
    }
    return result
  }
}

function createReducer (component) {
  return theReducer(component)
}

function Actions (options) {
  let name = `@@${options.name}`
  let actions = options.actions || []

  let actionsMap = {}
  let actionDispatchers = {}

  actions.forEach(action => {
    actionsMap[action] = `${name}/${action}`
    actionDispatchers[action] = (data) => {
      data = data || {}
      data.type = data.type || actionsMap[action]
      options.dispatch(data)
    }
  })

  return actionDispatchers
}

let Dispatcher = (options) => {
  function globalTimer (actions) {
    setTimeout(() => {
      actions.checkForExpired()
      globalTimer(actions)
    }, 60000)
  };

  return (dispatch) => {
    let actions = Actions({
      dispatch,
      name: options.name,
      actions: Object.keys(options.dispatchers)
    })
    let funcs = {}
    Object.keys(options.dispatchers).forEach(key => {
      let dispatcher = options.dispatchers[key]
      funcs[key] = dispatcher === 'default' ? actions[key] : dispatcher(actions)
    })
    globalTimer(actions)
    return {
      actions: funcs
    }
  }
}

const defaultDispatcher = (dispatch) => {
  return {
  }
}

function createDispatcher (options) {
  let dispatcher = defaultDispatcher
  if (options.dispatchers) {
    dispatcher = Dispatcher({
      name: options.name,
      dispatchers: options.dispatchers
    })
  }
  return dispatcher
}

function mapContainers (containers) {
  let newContainers = {}
  Object.keys(containers).forEach(key => {
    let container = containers[key]
    let component = container.component
    let name = component.name
    let reducer = createReducer(component)
    let dispatcher = createDispatcher(component)
    component = connect(reducer, dispatcher)(component.container)
    let newContainer = {
      name,
      component,
      reducer
    }
    newContainers[key] = newContainer
    Object.keys(container)
      .filter(key => {
        return key !== 'component'
      })
      .forEach(key => {
        let drc = {}
        drc[key] = container[key]
        newContainer[key] = mapContainers(drc)
      })
  })
  return newContainers
}

function extractReducers (containers, reducers) {
  Object.keys(containers).forEach(key => {
    let container = containers[key]
    reducers[container.name] = container.reducer
    Object.keys(container)
      .filter(key => {
        return key !== 'name' && key !== 'component' && key !== 'reducer'
      })
      .forEach(key => {
        extractReducers(container[key], reducers)
      })
  })
}

export default (containers, shouldUseHash) => {
  let newContainers = mapContainers(containers)
  let reducers = {}
  extractReducers(newContainers, reducers)

  let store = createStore(
    combineReducers(
      Object.assign({ routing }, reducers)
    ),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )

  window.routerHistory = browserHistory
  if (shouldUseHash) window.routerHistory = hashHistory
  const historyWithStore = syncHistoryWithStore(window.routerHistory, store)

  render(
    <Provider store={store}>
      <Router history={historyWithStore} >
        {routes(newContainers)}
      </Router>
    </Provider>,
    document.getElementById('root')
  )
}
