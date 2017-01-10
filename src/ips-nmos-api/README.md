IPS NMOS API
============

A node library to interact with NMOS and to stub NMOS

Features
--------

1. JavaScript library for getting/pushing data from/to nmos
2. WebSocket library for the Subscription API
3. Stubbed versions as well, for testing and prototyping
4. In browser simulation, with shortcut functions
5. Server simulation with REPL

Installation
------------

```
npm i -s bbc/ips-nmos-api
```

or

```
git clone git@github.com:bbc/ips-nmos-api.git
```

## Using webpack?

You will need to add this to your `webpack.config.js`

```js
node: {
  fs: 'empty'
}
```

This is for `lokijs`

Usage
-----

Example which would work both in browser and from node modules

```javascript
var NMOS = require('nmos')
let nmos = NMOS({
  get: 'url'
})

nmos
  .receivers()
  .then(function (data) {
    console.log(data)
  })
```

**NOTE**

NMOS api is not a singleton. If you are using it in the browser you will want to create a single instance otherwise you will not get the result you want i.e.

```js
var NMOS = require('nmos')
window.nmos = NMOS({
  stub: true
})
```

Options
-------

The NMOS constructor takes an object which can have the following

**HTTP**

* `get` => `string:url` url for getting the data


| Option | Type | Comment |
|:--|:--|:--|
| `get` | `string:url` | url for getting the data |
| `put` | `string:url` | url for routing; **defaults** to the `get` url if not present |

**Stub**

If not present or `false` will not use stub.
If present will ignore the HTTP values.
It can be equal to `true` and it will take the defaults.
All values are optional.

| Option | Type | Comment |
|:--|:--|:--|
| `data` | `<object>` | use this to override the initial data; all the values are optional and will default to the static stub data if not present; `'random'` will generate up to random 100 items; you can provide and <array> of data; you can also specify a number and it will generate random data up to that number; possible values are: `devices`, `flows`, `nodes`, `receivers`, `senders` and `sources` |
| `delay` | `<number>` || `'random'` | adds a delay to all requests; the value **default** to 0; random will change every request or update. |

API
---

The following return a promise and return the data received from the server it is common to both HTTP and Stub

```js
nmos.receivers().then(function (data) {})
nmos.receivers('receiver-id').then(function (data) {})

nmos.senders().then(function (data) {})
nmos.senders('sender-id').then(function (data) {})

nmos.flows().then(function (data) {})
nmos.flows('flow-id').then(function (data) {})

nmos.nodes().then(function (data) {})
nmos.nodes('node-id').then(function (data) {})

nmos.sources().then(function (data) {})
nmos.sources('source-id').then(function (data) {})

nmos.devices().then(function (data) {})
nmos.devices('device-id').then(function (data) {})

nmos.subscriptions().then(function (data) {})
```

To be able to route a `receiver` to a `sender` and unroute a `receiver`

```js
var sender = { id: 'sender-id' }
nmos.route('receiver-id', sender).then(function (data) {})
nmos.route('receiver-id', sender, node_url).then(function (data) {})
nmos.unroute('receiver-id').then(function (data) {})
nmos.unroute('receiver-id', node_url).then(function (data) {})
```

`node_url` is optional, it will do the requests to find this url if not present in the function

*You can also unroute by calling route with {} but it is better to call unroute for better error handling*

The Subscription API has a simple interface with a polling fallback option

It will fallback to polling if the subscriptions end point fails and will then use the http endpoint in order to get the data. It will then check periodically if the subscriptions are running again and will connect to those when it can.

```js
// these are the default values
nmos.subscription.receivers.pollingOptions({
  fallback: true,
  interval: 1000,
  subscriptionsInterval: 10 * 1000
})

// all the callbacks are optional
let callbacks = {
  updated() {}, // occurs on an update
  errored() {}, // occurs on an error from the web socekts or if the polling returns a 404
  opened() {}, // happens when the web sockets are opened
  closed() {}, // happens when the web sockets are closed
  polling() {} // happens the polling starts
}

let token = nmos.subscription.receivers.subscribe(callbacks)
nmos.subscription.receivers.unsubscribe(token)

token = nmos.subscription.senders.subscribe(callbacks)
nmos.subscription.senders.unsubscribe(token)

token = nmos.subscription.nodes.subscribe(callbacks)
nmos.subscription.nodes.unsubscribe(token)

token = nmos.subscription.flows.subscribe(callbacks)
nmos.subscription.flows.unsubscribe(token)

token = nmos.subscription.sources.subscribe(callbacks)
nmos.subscription.sources.unsubscribe(token)

token = nmos.subscription.devices.subscribe(callbacks)
nmos.subscription.devices.unsubscribe(token)
```

Stub API
--------

Extra helper functions, this API is not available unless the `stub option` is populated

Generate
--------

Generate random data

You can generate a single item with

```js
nmos.stub.generate.receiver()
nmos.stub.generate.sender()
nmos.stub.generate.node()
nmos.stub.generate.flow()
nmos.stub.generate.source()
nmos.stub.generate.device()
nmos.stub.generate.subscription()
```

You can generate multiple items. `argument` is optional and will **default** to generating up to 100 items.

Possible arguments are
* `<number>` generate up to this number of items
* `'random'` generate up to 100 items

```js
nmos.stub.generate.receivers(argument)
nmos.stub.generate.senders(argument)
nmos.stub.generate.nodes(argument)
nmos.stub.generate.flows(argument)
nmos.stub.generate.sources(argument)
nmos.stub.generate.devices(argument)
nmos.stub.generate.subscriptions(argument)
```

Add
---

Add items to the database. The **default** `argument` will add up to 100 items. The argument can be
* [`<object>`] an array of objects to be added
* `<object>` a single object to be added
* `'random'` will add up to 100 items
* `<number>` will add up to this number of items

```js
nmos.stub.add.receivers(argument)
nmos.stub.add.senders(argument)
nmos.stub.add.nodes(argument)
nmos.stub.add.flows(argument)
nmos.stub.add.sources(argument)
nmos.stub.add.devices(argument)
```

Remove
------

Remove items from the database. The **default** `argument` will remove up to MAX items in database. The argument can be
* `[<string:id>]` an array of targeted ids
* `<string:id>` a single of targeted id
* `[<object>]` an array of targeted objects, must have `'id'` as a field to remove these items
* `<object>` an single of targeted object, must have `'id'` as a field to remove these items
* `'random'` will remove up to MAX items
* `<number>` will remove up to this number of items, if larger than MAX will remove all

```js
nmos.stub.remove.receivers(argument)
nmos.stub.remove.senders(argument)
nmos.stub.remove.nodes(argument)
nmos.stub.remove.flows(argument)
nmos.stub.remove.sources(argument)
nmos.stub.remove.devices(argument)
```

Simulation
----------

This starts creating events, any kind of random event to simulate others using the system. It operates in random delays and will either
* route
* unroute
* add an item
* remove an item

It will not add/remove multiple items

`start` can take an argument which is either the `'random'` a `<number>` or the object `{min: <number>, max: <number>}`. The `<number>` will be in **SECONDS** and will randomly pick a time between these two in milliseconds. If you pass in a `<number>` it will consistently fire events at this interval.

`stop` will stop all events and kill any timeouts yet to happen and finish anything in-flight

Calling start/stop multiple times in a row has no effect

```js
nmos.stub.simulation.start(argument)
nmos.stub.simulation.stop()
```

Server
------

You can start a server as well. There are serveral ways to do this.

The default values are
* http-port: 6589
* ws-port: 6590
* repl-port: 6591
* delay: 0

If you have installed this globally just run with optional params

```
ips-nmos-api --http-port=8000 --ws-port=8001 --repl-port=8002 --delay=0
```

If you have cloned it

```
./bin/ips-nmos-api --http-port=8000 --ws-port=8001 --repl-port=8002 --delay=0
```

If you have it locally installed in your npm tasks

```
ips-nmos-api --http-port=8000 --ws-port=8001 --repl-port=8002 --delay=0
```

Want to connect to a running instance? The port is optional

```
ips-nmos-api --connect --repl-port=8002
```

This will start the web sockets which you can subscribe to and the http service which you can call instead, all using the lokijs database

It also starts a REPL which you can call `nmos` from, it is a node REPL so any JS goes. You might want to run `nmos.stub.simulation.start()` in order to start the service but the rest of the API is available. Also the REPL has `<tab>` completion, so use that.

It is worth noting you do not have direct access to the lokijs instance. Not sure whether anyone should be allowed access as it might distrupt testing, it would be best to get to it via the extended stub API

Developing
----------

```bash
yarn # install everything
yarn test # runs the tests and lints
yarn lint # runs lint
yarn update -- --url=... # you need the url param, this updates the stub data
yarn start # starts the server, pass the params as above
```

TODO
----

The API is ready to use with the following todos to be todone:
* data consistent with the rest of the data -> currently random data is just random
* update unit tests -> only testing the Stub API as the HTTP API would require a consistent HTTP connection for any meaningful test (otherwise you are testing you can stub HTTP requests...)
* make node work behind a proxy -> currently this will not work from node behind a proxy, it will work in a browser because the browser should have proxy configuration sorted. Get working with axios and rig up the serve.js to be correct
