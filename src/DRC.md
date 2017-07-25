# DRC (Dispatchers Reducers Containers)

This is the glue for
  * react
  * react-dom
  * redux
  * react-redux
  * react-router
  * react-router-redux

This library uses json based configuration in order to simplify the above and try to keep your code DRY

There is an assumption you understand react, react-router and redux. If you do not you should do a sample application and go through their tutorials before this. DRC simplifies all of that, but this README will not discuss how they work.

# Index

in your inital file (`src/index.js`) you will find something similar to this

```js
let useHash = true
drc({
  '/': {
    component: main,
    'web-router(/**)': {
      component: webRouter
    }
  }
}, useHash)
```

`drc` is the function and then you pass in your routing configuration

The data passed in looks like
```js
{
  '/': {
    component: main,
    'path-2': {
      component: pathTwo,
      'path-3': {
        component: pathThree,
      }
    },
    'path-4': {
      component: pathFour
    }
  }
}
```

Where each `component` is a react component and each key is a route. All nested routes are concatenated together and when that route occurs it passes the component as a child to its parent

e.g. in the example above if the url contains `/path-2/path-3` it will render something akin to

```html
  <Main>
    <PathTwo>
      <PathThree />
    </PathTwo>
  </Main>
```

The `useHash` value is to identify if you wish to use the `hashHisotry` or `browserHistory` from the react-router which you can get access to using `window.routerHistory`

# Component

Each component should refer to a folder and the folder should contain

```
/src/component-name
|-- components
|   |-- component-name.css
|   |-- index.jsx
|   |-- **/*.css
|   |-- **/*.jsx
|   |-- **/*.js
|-- dispatchers
|   |-- index.js
|   |-- **/*.js
|-- reducers
|   |-- index.js
|   |-- **/*.js
|-- index.js
|-- container.jsx
|-- initial-state.json
```

The rest of this document will go through each of these and conventions they use.

## Components

This is a folder of files where the folder structure is similar to the dom structure

e.g.

```html
<div class='routes'>
  <div class='route-0'>
    <svg class='line' />
  </div>
  <div class='route-1'>
    <svg class='line' />
  </div>
</div>
```

could have a folder structure

```
|-- routes
|   |-- index.jsx
|   |-- route-component.jsx
|   |-- routes.css
```

and the `index.jsx` should `import` the `css` e.g. `import './routes.css'`

Your components should be **dumb** and should only operate by being passed in data and being updated through redux. When the data changes, so do the components.

Most components are using ES6 syntax as opposed to React Class syntax. The reason for this is that those files should be able to transform using anything, not just react. We are also using `PropTypes` in order to help people using these components.

e.g. `src/example/components/index.jsx`

```js
import './example.css'
import React, {PropTypes} from 'react'

let Example = ({prop1, prop2}) => {
  return <div className={`${prop1} ${prop2}`} />
}

Example.propTypes = {
  prop1: PropTypes.string.isRequired,
  prop2: PropTypes.string
}

export default Example

```

The `PropTypes` will let us know if a prop value is missing (in dev environment only) and in theory we should be able to replace the import with anything else as the `Example` function is generic and knows nothing about React. The props are passed in via the component's parent so there is some chaining and when the props change these components are updated and not re-rendered. If you need to listen to specific React events, such as `onComponentDidMount` you will need to create a class.

## Dispatchers

Redux has the concept of reducers and dispatchers. A dispatcher fires an event with a `type` and data, which is in turn passed into a reducer. The reducer then calculates the next state according and this state is passed into the components.

Most dispatchers are used for things like `onClick` and are typically small

an example dispatcher

```js
export default (actions) => {
  return (data) => {
    actions.name({
      data: data
    })
  }
}
```

`actions` is an object of functions which corresponds to the list of reducers (see more in reducers)

`data` is passed in from a component which triggers the dispatcher as such

```js
<button onClick={() => { actions.click('data', 'more data') }} />
```

`name` is the name of a reducer and the object you pass in can be anything but **can not** have the key `type` as this will override redux and the event will not be triggered as expected.

You should have a folder of dispatchers and you can organise your dispatchers however you like. It is best to have a file per dispatcher and if the dispatcher becomes complex to create a folder with an `index.js` inside and lots of files of functions which can be unit tested separately. Inside this folder you should have an `index.js` which exports an object, mapping your dispatchers to a value e.g.

```js
import initialise from './initialise-dispatcher'
import update from './update-dispatcher'
import initialiseError from './initialise-error-dispatcher'

export default {
  initialise,
  initialiseError,
  update
}

```

See container how this object is passed into your components

## Reducers

Reducers are the most important part of this and are designed to be chainable. They take an action from a dispatcher and then create a new state and merge that state with the current state.

an example reducer

```js
export default (state, action, merge) => {
  view = Object.assign({}, state.view)
  if (action.event === 'increment') view.count +=1
  return merge({view})
}
```

In this example we are updating view. The first line is important as it makes our view immutable, avoiding leaking of data. We are then free to update the view. If this function returns nothing then nothing will happen. `merge` is a function which will merge the new data with the state. So in this example `state.view` will be updated with the new view.

If you wish to chain them then you can do the following


```js
import otherReducer from './other-reducer'

export default (state, action, merge) => {
  view = Object.assign({}, state.view)
  if (action.event === 'increment') view.count +=1
  let newState = merge({view})

  return otherReducer(newState, action, merge)
}
```

where you could change the action if you needed to. If the `otherReducer` does not return anything then nothing will happen

This state is fed into the container which will be covered in Containers.

The reducers follow a similar pattern to dispatchers and are probably the thing which gets unit tested the most

an `index.js` would look like this

```js
import initialise from './initialise-reducer'
import update from './update-reducer'
import initialiseError from './initialise-error-reducer'

export default {
  initialise,
  initialiseError,
  update
}

```

and in a dispatcher the `actions` object would look like this

```js
actions = {
  initialise: () => {},
  initialiseError: () => {},
  update: () => {}
}
```

## Containers

The `container.jsx` is the initial component, it gets passed to the `drc` function from the `index.js` in the root component folder i.e. `/src/component-name/index.js` (more later on). The state from the reducer and the `location` from react-router is passed into here and it might look something like

```js
import React, { PropTypes } from 'react'

import Loading from './components/loading'
import WebRouter from './components'

let WebRouterContainer = ({ initialised, data, view, actions }) => {
  if (!initialised) actions.initialise()
  if (view.loading.notLoaded.length > 0 || view.loading.errored.length > 0) return <Loading view={view.loading} />
  return <WebRouter
    data={data}
    view={view}
    actions={actions}
    />
}

WebRouterContainer.propTypes = {
  initialised: PropTypes.bool.isRequired,
  data: PropTypes.object.isRequired,
  view: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
}

export default WebRouterContainer

```

The components from this point onwards should be dumb and do nothing other than use data to render the component. This is where you may do some initialisation; in this example `actions.initialise` dispatches an event for http request to get data which is reduced on return and fed back into the view.

It is good practice to keep your state's data separate from its view data. That way you can refer to the data without impacting the view. Consider the data to always be immutable whilst the view is kind of not (it should be but treated like it isn't)

`actions` is an object of dispatchers

## src/component-name/index.js

This file is the component fed into the `drc` function and it looks like this

```
import container from './container'
import reducers from './reducers'
import dispatchers from './dispatchers'
import initialState from './initial-state.json'

export default {
  name: 'web-router',
  initialState,
  reducers,
  reducersAll: reducers.all,
  dispatchers,
  container
}
```

The `name` is **mandatory** as all dispatchers will then filter using this name

The `reducers` will use the name to reduce

Anything which is a `reducerAll` will ignore this name, but will be noisy and be triggered a lot. This is mainly used when wanting to listen to the routing stuff. See `src/web-router/reducers/location-change-reducer.js` as an example of this.

`dispatchers` is the object from your dispatchers

`container` is your `container.jsx` and is also **mandatory**

The `initialState` is best kept as a separate JSON file to make it easy to find. This is the first thing passed into your container after its first reduction done on route change

This object is passed into `drc` on the `component` field e.g.

```js
import main from './main'

drc({
  '/': {
    component: main
  }
})

```
