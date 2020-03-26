import userReducer from './userReducer.js';
import houseHoldReducer from './houseHoldReducer.js';
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
	userReducer,
	houseHoldReducer
})

export default rootReducer