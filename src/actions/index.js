// Import any group of actions pertaining to a specific task
import userActions from "./userActions.js";
import houseHoldActions from './houseHoldActions.js';

const actions = {
  // Add any actions here.
  user: userActions,
  houseHold: houseHoldActions
};

export default actions;
