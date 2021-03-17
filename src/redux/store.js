import { applyMiddleware, createStore } from "redux";
import { rootReducer } from "./reducers";

import createSagaMiddleware from "redux-saga";

import { helloSaga } from "./sagas";

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(helloSaga);
