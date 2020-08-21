// Import any group of actions pertaining to a specific task
import userActions from './userActions.js';
import todoActions from './todoActions.js';
import houseHoldActions from './houseHoldActions.js';
import categoriesActions from './categoriesActions.js';

const actions = {
  // Add any actions here.
  user: userActions,
  todo: todoActions,
  houseHold: houseHoldActions,
  categories: categoriesActions,
};

export default actions;
