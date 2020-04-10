

const todoReducer = (state = [], action) => {
	switch (action.type) {
		case "FETCH_TODOS":
			return action.payload
		case "ADD_TODO":
			return [...state, action.payload]
		case "REMOVE_TODO":
			return action.payload
		default:
			return state
	}
}

export default todoReducer