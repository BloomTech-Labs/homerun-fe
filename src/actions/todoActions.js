import axiosWithAuth from '../utils/AxiosWithAuth.js'

// Action Creators
const setTodos = () => dispatch => {
	axiosWithAuth().get(`/todos/household`)
		.then(res => dispatch({ type: "SET_TODOS", payload: res.data }))
		// .then(res => console.log(res.data))
		.catch(err => console.log(err.message))
}
const addTodo = (todo) => dispatch => {
	axiosWithAuth().post(`/todos/add`, todo)
		.then(res => dispatch({ type: "ADD_TODO", payload: res.data }))
		// .then(res => console.log(res.data))
		.catch(err => console.log(err.message))
}

const removeTodo = (todoId) => dispatch => {
	axiosWithAuth().delete(`/todos/${todoId}`)
		.then(res => dispatch({ type: "REMOVE_TODO", payload: todoId }))
		// .then(res => console.log(res.data))
		.catch(err => console.log(err.message))
}

export default {
	setTodos,
	addTodo,
	removeTodo,
}