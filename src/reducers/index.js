import { combineReducers } from 'redux'
import userReducer from './userReducer.js';
import todoReducer from './todoReducer.js';
import houseHoldReducer from './houseHoldReducer.js';

const rootReducer = combineReducers({
	users: userReducer,
	todos: todoReducer,
	household: houseHoldReducer
})

export default rootReducer