// Actions
const SET_USER = "SET_USER"

// Action Creators
const setUser = (user) => dispatch => {
	return dispatch({ type: SET_USER, payload: user })
}

export default {
	setUser
}