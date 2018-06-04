import { createStore, applyMiddleware, combineReducers } from "redux";
import thunkMiddleware from "redux-thunk";
import * as reducers from "./modules";

export default function configureStore(initialState = {}) {
  const rootReducer = combineReducers(reducers);

  let devtools;
  if ("development" === process.env.NODE_ENV) {
    devtools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
  }

  return createStore(
    rootReducer,
    devtools,
    applyMiddleware(
        thunkMiddleware
    )
  );
}
