import { combineReducers } from 'redux';
import userReducer from './userReducer.js';
import todoReducer from './todoReducer.js';
import houseHoldReducer from './houseHoldReducer.js';
import categoriesReducer from './categoriesReducer.js';

const rootReducer = combineReducers({
  user: userReducer,
  todos: todoReducer,
  household: houseHoldReducer,
  categories: categoriesReducer,
});

export default rootReducer;
