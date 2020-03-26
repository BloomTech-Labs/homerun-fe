// Import any group of actions pertaining to a specific task
import userActions from './userActions.js'
import todoActions from './todoActions.js'

const actions = {
	// Add any actions here.
	user: userActions,
	todo: todoActions
}

export default actions