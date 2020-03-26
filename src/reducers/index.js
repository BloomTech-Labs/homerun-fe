import { combineReducers } from 'redux'
import userReducer from './userReducer.js';
import todoReducer from './todoReducer.js';

const rootReducer = combineReducers({
	users: userReducer,
	todos: todoReducer
})

export default rootReducer