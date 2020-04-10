import axiosWithAuth from "../utils/AxiosWithAuth.js";

// Action Creators
const fetchTodos = () => (dispatch) => {
  axiosWithAuth()
    .get(`/todos/household`)
    .then((res) => dispatch({ type: "FETCH_TODOS", payload: res.data }))
    // .then(res => console.log(res.data))
    .catch((err) => console.log(err.message));
};

const addTodo = (todo) => (dispatch) => {
  axiosWithAuth()
    .post(`/todos/add`, todo)
    .then((res) => dispatch({ type: "ADD_TODO", payload: res.data }))
    // .then(res => console.log(res.data))
    .catch((err) => console.log(err.message));
};

const removeTodo = (todoId) => (dispatch) => {
  axiosWithAuth()
    .delete(`/todos/${todoId}`)
    .then((res) => {
      dispatch({ type: "REMOVE_TODO", payload: res.data });
    })
    .catch((err) => console.log(err.message));
};

export default {
  fetchTodos,
  addTodo,
  removeTodo,
  fetchAssignedUsers,
};
