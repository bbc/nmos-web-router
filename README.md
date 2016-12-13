# IPS Web

This is the new version of ipp-web

## NPM Scripts

```bash
npm start # starts the dev service
npm run build # creates a build folder and builds everything needed
npm run serve # runs build and then starts serving
npm run lint # lints the javascript and styles
npm test # runs lint and jest
npm test -- --watch # runs lint and jest and then starts watching with jest (it is amazing)
npm test -- --updateSnapshot # runs lint and jest and updates all the snapshots
```

## Flux

[Flux Documentation](https://facebook.github.io/flux/docs/actions-and-the-dispatcher.html#content)

This project uses `flux`, using [react](https://facebook.github.io/react/) and [redux](http://redux.js.org/) as well as the [react-router](https://github.com/ReactTraining/react-router)

each `folder` maps to a `route`
each `route` has a `container`
each `container` can have: a `reducer`, a `dispatcher` and multiple `components`

## Styling

You can use [CSSNext](http://cssnext.io/) in any css file. It is good to keep the css file next to the thing it is styling and them import the style with `import './style-file.css'`

The other thing to note is the route is added a class to the main containers. Styling based on the route makes things a lot easier, then you do not need to write JavaScript to hide things when the route changes for example

## DRC

There is a file `src/drc.js`

This is what allows us to have a configuration approach to Redux and the React Router. Here is more in-depth information [README](./src/DRC.md)

## Gel

You can find all Gel things in the `src/gel-react` [README](./src/gel-react/README.md)

## IPS NMOS API

You can find all IPS NMOS API things in the `src/ips-nmos-api` [README](./src/ips-nmos-api/README.md)

If you aren't running `scripts/dev.sh` then you can run

```
npm run nmos
```

If you want to add a delay

```
npm run nmos -- --delay=500
```

But if have a running you can simply run

```
npm run nmos -- --connect
```

This should connect to the docker container as well after using `scritps/dev.sh`

You can then get access this from in 2 ways

Either using [http://localhost:3000/?url=http://localhost:6589](http://localhost:3000/?url=http://localhost:6589)

or you will need to start the mdnsbridge task as such

```
npm run mdnsbridge
```

If you have run `scripts/dev.sh` then you will not need to do this

You can configure the ports for everything except mdnsbridge, it is 12345

```
npm run nmos -- --ws-port=3001 --http-port=3002 --repl-port=3003
```

read the [README](./src/ips-nmos-api/README.md) for more information on this

## Testing

Uses [Jest](http://facebook.github.io/jest/) for testing. Just write a file in src with the extension `*.spec.js` or `*.test.js`

Things which are being tested
  * components with complex logic, i.e. if a component does more than just render DOM it should be tested, it may be as simple as prop validation. Otherwise it can be tested by simply looking at the code and having the linting pass
  * dispatchers with complex logic unless it is http requests. HTTP requests should be done using some kind of integration (see below)
  * reducers that return something other than static JSON

There are currently no screenshot or integration tests currently, still MVP and unstable. These tests would be too brittle until post MVP when the project has become more defined

Screenshot tests would be used to check CSS and so should be limited where possible, not to check DOM structure which can be better tested with Jest snapshots

Integration test would start a local NMOS API instance and then check that the data is being loaded in correctly and verified using a single snapshot. This is to check that the data is being processed as expected, not to check DOM structure nor to test CSS

## Docker

```bash
./scripts/build.sh # creates the docker image and also copies the build file for deploying, jenkins doesn't seem to like running this script so just copy it's contents to jenkins and add sudo to everything as a temprory fix
./scripts/dev.sh # starts `npm start` from the container with the container name `ips-web-dev` it also starts the nmos and mdnsbridge tasks
./scripts/start.sh # starts `npm serve` from the container with the container name `ips-web-start`
```

## Jenkins

Here is the build [Job](https://jenkins.rd.bbc.co.uk/job/pbuilder.ap.ips-web/) it just runs the build but will fail if the tests fail.

## Ubiquitous Language

This is just a section to help with language, the code is written using this language, and should be something which everyone can talk in in order to know what is what

### Web Router

Tool used to create routes between senders and receivers

### Routable

Either a Sender or Receiver

### Route

Some kind of connection between a sender and a receiver
