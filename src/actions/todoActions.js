import axiosWithAuth from "../utils/AxiosWithAuth.js";

// Action Creators
const fetchTodos = () => (dispatch) => {
  axiosWithAuth()
    .get(`/todos/household`)
    .then((res) => {
      dispatch({ type: "FETCH_TODOS", payload: res.data })
    })
    .catch((err) => console.log(err.message));
};

const addTodo = (todo) => (dispatch) => {
  axiosWithAuth()
    .post(`/todos/add`, todo)
    .then((res) => {
      dispatch({ type: "ADD_TODO", payload: res.data })
    })
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

const assignUser = (todoId, userId, type) => (dispatch) => {
  axiosWithAuth()
    .post(`/todos/assign/${todoId}`, {
      id: userId,
      type: type,
    })
    .then((res) => {
      dispatch({
        type: "UPDATE_ASSIGNEES",
        payload: { todoId: todoId, assigned: res.data },
      });
    })
    .catch((err) => console.log(err.message));
};

const unassignUser = (todoId, userId, type) => (dispatch) => {
  axiosWithAuth()
    .post(`/todos/unassign/${todoId}`, {
      id: userId,
      type: type,
    })
    .then((res) => {
      dispatch({
        type: "UPDATE_ASSIGNEES",
        payload: { todoId: todoId, assigned: res.data },
      });
    })
    .catch((err) => console.log(err.message));
};

export default {
  fetchTodos,
  addTodo,
  removeTodo,
  assignUser,
  unassignUser,
};
