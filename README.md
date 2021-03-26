# A clone of the WeTransfer uploader UI

## About

This project is a bit over-engineered by design: It is meant to show off how I'd structure a respectable NPM package. It has a working demo, codecov, Rollup, and bunch of other "pro features". But it runs into a problem precisely because of this. Namely, wrapping styled components in Provider seems to make them render-happy (even when memoized), thus clobbering CSS transitions. The quick fix here is to just render ProgressCircle outside of Provider, and tolerate a sprinkle of DOM manipulation, but it's ok for now.

Also, the cancel button can get a little twitchy. This is due to the use of setTimeout to fake the FileReader API. It could have been faked in a worker, but that felt a little out of scope.

## Alternatives

For a small project like this, probably the best solution is to just not use Redux/Context.

For a larger project, it seems worth it to import a library like React Transition Group.

## Peer dependencies

React and ReactDOM must be available at runtime as they are not bundled.

## Getting started

    npm i && npm watch

Then fire up local http server of your choice and aim it at `etc/demo`.

## Other commands

- Build: `npm run build`
- Prettify: `npm run format`
- Test: `npm run test`

## Contributing

It's just a demo!
