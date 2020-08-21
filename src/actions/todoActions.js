import axiosWithAuth from '../utils/AxiosWithAuth.js';

// Action Creators
const fetchTodos = () => (dispatch) => {
  return axiosWithAuth()
    .get(`/todos/household`)
    .then((res) => {
      dispatch({ type: 'FETCH_TODOS', payload: res.data });
    })
    .catch((err) => console.log(err.message));
};

const addCategory = (data) => (dispatch) => {
  return axiosWithAuth()
    .post('/todos/categories', data)
    .then((res) => {
      dispatch({
        type: 'ADD_CATEGORY',
        payload: res,
      });
    })
    .catch((err) => console.log(err));
};

const addTodo = (todo) => (dispatch) => {
  dispatch({ type: 'TODO_LOADING' });
  return axiosWithAuth()
    .post(`/todos/add`, todo)
    .then((res) => {
      dispatch({ type: 'ADD_TODO', payload: res.data });
      return res.data;
    })
    .catch((err) => console.log(err.message));
};

const removeTodo = (todoId) => (dispatch) => {
  axiosWithAuth()
    .delete(`/todos/${todoId}`)
    .then((res) => {
      dispatch({ type: 'REMOVE_TODO', payload: res.data });
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
        type: 'UPDATE_ASSIGNEES',
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
        type: 'UPDATE_ASSIGNEES',
        payload: { todoId: todoId, assigned: res.data },
      });
    })
    .catch((err) => console.log(err.message));
};

const updateTodo = (todoid, update) => (dispatch) => {
  axiosWithAuth()
    .put(`/todos/${todoid}`, update)
    // .then((res) => console.log("res.data todoActions :64", res.data))
    .then((res) =>
      dispatch({
        type: 'UPDATE_TODO',
        payload: res.data,
      })
    )
    .catch((err) => console.log(err));
};

const updateCategory = (todoCategory) => (dispatch) => {
  dispatch({
    type: 'UPDATE_CATEGORY',
    payload: todoCategory,
  });
};

const resetCurrentCategory = () => (dispatch) => {
  dispatch({ type: 'RESET_CURRENT_CATEGORY' });
};

export default {
  fetchTodos,
  addTodo,
  removeTodo,
  assignUser,
  unassignUser,
  updateTodo,
  updateCategory,
  addCategory,
  resetCurrentCategory,
};
