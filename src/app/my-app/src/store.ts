import { composeWithDevTools } from "@reduxjs/toolkit/dist/devtoolsExtension";
import { createStore, applyMiddleware, combineReducers, compose } from "redux";

import stock from "./stockSlice";

// Mount it on the Store
const composeEnhancers =
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(
  combineReducers({ stock }),
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION__()
);
export type RootState = ReturnType<typeof store.getState>;

if ((window as any).Cypress) {
  (window as any).store = store;
}
