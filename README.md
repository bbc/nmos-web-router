# IPS Web

This is the new version of ipp-web

## Development

### NPM Scripts

```bash
npm run gel # does a check out of the gel icon assets and puts them in src for building
npm run styles # generates the *.css files in src for building
npm run react # starts the react process which launches the site
npm run build # creates a build folder and builds everything needed
npm run dev # starts watchers and launches in browser
npm run dev-test # starts watching __test__ and src and run the jest tests on changes, lint is caught by dev
npm start # runs a build and launches a server
npm run lint # lints the javascript and styles
npm run check-gel # checks that the gel folder exists
npm run jest # runs the jest tests
npm test # runs, lint, check-gel and jest
```

### Flux

[Flux Documentation](https://facebook.github.io/flux/docs/actions-and-the-dispatcher.html#content)

This project uses `flux`, using `react` and `redux` as well as the `react-router`

each `folder` maps to a `route`
each `route` has a `container`
each `container` can have: a `reducer`, a `dispatcher` and multiple `components`

#### Styling

Write only in post script but import the `*.css` file
If a file starts with `_` it is meant to be imported only as the watch will not create a `css` version of a file starting with `_`
It tends to be nice to have a `pcss` file per component but not mandatory

### Testing

Only unit test reducers, dispatchers, components and containers.
These files should be quite pure and not need much mocking.
Favour mocking data input and testing function output over mutation.
Jest snapshots are a great way to test components.

You can use stub data by including `stub` in the query params e.g. [http://localhost:3000/?stub](http://localhost:3000/?stub)

all tests live in `__tests__` and are named `*.spec.js`

### Docker

```bash
./scripts/build.sh # creates the docker image and also copies the build file for deploying
./scripts/dev.sh # starts `npm run dev` from the container with the container name `ips-web-dev`
./scripts/start.sh # starts `npm start` from the container with the container name `ips-web-start`
```

### Ubiquitous Language

This is just a section to help with language, the code is written using this language, and should be something which everyone can talk in in order to know what is what

#### Web Router

Tool used to create routes between senders and receivers

#### Routable

Either a sender or receiver

#### Route

Some kind of connection between a sender and a receiver

## TODO

1. change-state
2. routing
3. impliment:
    route.subscriptions = {
      sender: {},
      unrouted: []
    }
4. clean reducers
5. clean css
6. make data consistent when generating
7. remove components except the checkbox
8. loading screen needs to be in a container
9. real estate
10. remove DRC
11. update docs
12. update tests
