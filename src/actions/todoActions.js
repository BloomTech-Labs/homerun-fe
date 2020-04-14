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

const rescheduleTodo = (todoid, update) => dispatch => {
  axiosWithAuth()
    .put(`/todos/${todoid}`, update)
    // .then(res => console.log("res.data todoActions :64", res.data))
    .then(res => dispatch({
      type: "RESCHEDULE_TODO",
      payload: res.data
    }))
    .catch(err => console.log(err))
}

export default {
  fetchTodos,
  addTodo,
  removeTodo,
  assignUser,
  unassignUser,
  rescheduleTodo
};
