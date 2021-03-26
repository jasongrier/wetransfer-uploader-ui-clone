import { createElement } from "react";
import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";

import reducer from "./reducer";
import { fileUploader as fileUploaderSaga } from "./sagas";

import App from "./components/App";

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: typeof compose;
  }
}

const sagaMiddleware = createSagaMiddleware();

const composeWithDevTools =
  process.env.NODE_ENV !== "production" && typeof window !== "undefined" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;

const composeEnhancers = composeWithDevTools || compose;

export const store = createStore(reducer, composeEnhancers(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(fileUploaderSaga);
