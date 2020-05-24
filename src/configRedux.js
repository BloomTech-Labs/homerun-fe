import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers/index.js";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { loadState } from "./utils/localStorage.js";

const persistedState = loadState();
const configRedux = () =>
  createStore(rootReducer, persistedState, applyMiddleware(thunk, logger));

export default configRedux;
