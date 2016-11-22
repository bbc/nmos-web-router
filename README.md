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

You can find all IPS NMOS API things in the `src/gel-react` [README](./src/ips-nmos-api/README.md)

## Testing

Uses [Jest](http://facebook.github.io/jest/) for testing. Just write a file in src with the extension `*.spec.js` or `*.test.js`

We use very simple snapshot tests for components and unit test the reducers and maybe receivers. There is no point in testning everything as some things are static, some components are static and do not need testing or some dispatchers are so small you can test them by looking at the code.

There are no screenshot tests because they are slow, but also phantomcss does not play nicely with the RnD proxy. There are no integration tests with something like Casper. This doesn't feel needed but the ips-nmos-api does support stubbing in browser so it should be straight forward to mock

## Docker

```bash
./scripts/build.sh # creates the docker image and also copies the build file for deploying, jenkins doesn't seem to like running this script so just copy it's contents to jenkins and add sudo to everything as a temprory fix
./scripts/dev.sh # starts `npm start` from the container with the container name `ips-web-dev`
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
