import userReducer from './userReducer.js';
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
	userReducer
})

export default rootReducer