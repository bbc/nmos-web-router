# The Web Router Codebase

This file is intended to provide an overview of the Web Router codebase and its structure. The codebase was written by Luke Preston in 2016/17 and this overview has been written as a result of attempting to understand the codebase despite it (at the time) having no code comments.

All directories mentioned are based from `ips-web/src/web-router` being the root

You can read Luke's README.md and DRC.md files for an overview of how IPS Web apps should be built.

## File structure

There are a lot of files and many levels of abstraction in this codebase making it initially a bit baffling but it is very well structured and very tidily abstracted.

You will see from Luke's DRC.md file that each app utilises dispatchers, reducers and containers. Dispatchers and reducers are found in their respective folders. `/components` contains code for the UI components that form the Web Router. `/routables` contains code that drives the operation of the routables in the UI and the majority of the manipulation of state is done here.

`/components`, `/dispatchers` and `/reducers` all have sub-directories which correspond to each of the three UI 'views': Choose, Route, Confirm. The 'Route' view is `/connections`, presumably to avoid confusion as it has its own `/route` sub-directory.

## Rough data flow

Having the following flow in mind when debugging or working out where to add functionality may prove useful.

Starting with a user interaction, this usually triggers something within `/components` such as an onClick event. For example, clicking a sender in the 'Route' view triggers the onClick function in `/components/connections/senders-component.jsx`. From here an action is usually triggered which means that dispatchers are the next place to look. The example results in `actions.toggleSender` being called. Therefore the toggleSender dispatcher should be looked at: `dispatchers/connections/toggle-sender-dispatcher.js`.

A lot of dispatchers, like the one relevant to this example, simply call the reducer although some do more (`dispatchers/connections/route-dispatcher.js` for example)

The corresponding reducer should be very easy to find: `reducers/connections/toggle-sender-reducer.js`. The file structure is mostly the same for `/dispatchers` and `/reducers`. In the reducers you will often find a simple-looking few lines of code which are usually calling functions within `/routables`. Our example contains the line: `routables.expand(action.sender.id).view()` so the next place to look is `/routables/expand`

In `/routables` you will find most of the actual operations that manipulate `view` so it can be merged with `state.view` and UI components can be updated accordingly. If we continue following our example, we end up in `/routables/expand/index.js` which imports `/routables/expand/expand-senders.js`, this updates the state of the clicked sender to include 'expanded'. The rest of `routables/expand/index.js` then creates an expanded sender (if appropriate) and calls `expandReceivers` which greys out receivers according to whether or not they are compatible with the clicked sender. The updated `view` is returned so it can be merged.

And so after that process `state.view` has been updated to include a sender object under `state.view.expanded`. The 'Route' view updates according to the updated state to show the expanded sender and to filter the receivers accordingly.

## Useful to know

All the layout, formatting and design is done from within the `.css` files. Each of the three views has its own css file and I have attempted to re-structure these such that reading from top to bottom applies to the relevant view from top to bottom. I've also added some comments to hopefully make it easier to find the relevant lines of css. `/components/web-router.css` styles the overall Web Router and elements that are not within one of the three views or are common between them. `/components/column-views.css` sets the rules for arranging and moving the three views.

Note that reducers pass `state.view` into `/routables` and so 'data' within all the `/routables` files is referring to `state.view` and not `state.data`. `/routables/common/clone-routables.js` is used to make a copy of `state.view`, thus avoiding mutation.

Each of the sub folders within `/routables` has a few comments in its `index.js` file to explain what it does

Within the added 'Confirm mode' functionality, the following terminology is often used:
* Change - a single change, either routing a receiver to a sender or unrouting it
* Routing/Unrouting - a routing change is making a connection, an unrouting change is breaking a connection
* Multi - a routing change that to a receiver that is already routed, the existing route to that receiver will be broken
* Staged - a change is staged when it is included in `state.view.changes` but hasn't been deployed
