# A clone of the WeTransfer uploader UI

**Demo: http://jasonaarongrier.com/**

## About

This project is a bit over-engineered by design: It is meant to show off how I'd structure a respectable NPM package.

For a small project like this, probably the best solution is to Vanilla JS.

For a larger project —say, one that has _lots_ of these kinds of components— it seems worth it to import a library like React Transition Group, this would make the component tree a bit more straightforward, remove the reliance on refs, etc.

There are further comments in the docblocks.

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
