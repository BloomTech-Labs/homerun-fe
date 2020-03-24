import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/index.js';
import thunk from 'redux-thunk'
import logger from 'redux-logger'

const configRedux = () => createStore(rootReducer, applyMiddleware(thunk, logger));

export default configRedux;