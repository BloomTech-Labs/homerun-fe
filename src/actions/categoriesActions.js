import axiosWithAuth from '../utils/AxiosWithAuth';

export const FETCH_CATEGORIES_SUCCESS = 'FETCH_CATEGORIES_SUCCESS';
export const ERROR = 'ERROR';
export const ADD_CATEGORY = 'ADD_CATEGORY';
export const DELETE_CATEGORY = 'DELETE_CATEGORY';
export const UPDATE_CATEGORY_LIST = 'UPDATE_CATEGORY_LIST';
export const CATEGORY_LOADING = 'LOADING';
export const RESET_CATEGORIES = 'RESET_CATEGORIES';

const fetchCategories = () => (dispatch) => {
  return axiosWithAuth()
    .get(`/categories/`)
    .then((res) => {
      dispatch({
        type: FETCH_CATEGORIES_SUCCESS,
        payload: res.data,
      });
      console.log('im inside fetch', res);
    })
    .catch((err) => {
      dispatch({
        type: ERROR,
        payload: err.response.data.message || err,
      });
    });
};

const addCategory = (category) => (dispatch) => {
  dispatch({ type: CATEGORY_LOADING });
  return axiosWithAuth()
    .post(`/categories`, category)
    .then((res) => {
      console.log(res);
      dispatch({ type: 'ADD_CATEGORY', payload: res.data });
    })
    .catch((err) => console.log(err.message));
};

const deleteCategory = (categoryID) => (dispatch) => {
  dispatch({ type: CATEGORY_LOADING });
  return axiosWithAuth()
    .delete(`/categories/${categoryID}`)
    .then((res) => {
      console.log('inside delete', res);
      dispatch({ type: 'DELETE_CATEGORY', payload: res.data });
    })
    .catch((err) => console.log(err.message));
};

const updateCategory = (categoryID, category_name) => (dispatch) => {
  dispatch({ type: CATEGORY_LOADING });
  return axiosWithAuth()
    .put(`/categories/${categoryID}`, { category_name })
    .then((res) => {
      dispatch({ type: 'UPDATE_CATEGORY_LIST', payload: res.data });
    });
};

export default {
  fetchCategories,
  addCategory,
  deleteCategory,
  updateCategory,
};
