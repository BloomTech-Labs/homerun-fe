import axios from 'axios';
export const HANDLE_EMAIL = "HANDLE_EMAIL";

// Action Creators
export const handleEmail = (data) => (dispatch) => {
  dispatch({ type: 'HANDLE_EMAIL' })
  axios
      .post(`${process.env.REACT_APP_BE_URL}/auth/signup`, data)
      .then((res) => {
        dispatch({ type: 'HANDLE_EMAIL', payload: "success" })
      })
      .catch((err) => {
        console.log(err);
        dispatch({ type: 'HANDLE_EMAIL', payload: "failure" })
      });
};

const setUser = (user) => (dispatch) => {
  console.log(user);
  dispatch({ type: 'SET_USER', payload: user });
};

const changeUser = (user) => (dispatch) => {
  const { email, password } = user;
  if (!user.child) {
    dispatch({ type: 'LOAD_USER' });
    return axios
      .post(`${process.env.REACT_APP_BE_URL}/auth/login`, { email, password })
      .then((res) => {
        console.log(res);
        localStorage.setItem('token', res.data.token);
        setUser(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  } else {
    dispatch({ type: 'SET_USER', payload: user });
  }
};

// sets the state to have the child details stored in redux
const setChild = (child) => (dispatch) => {
  dispatch({ type: 'SET_CHILD', payload: child });
  dispatch({ type: 'CHILD_ACTIVE', payload: true });
};

// sets whether a child account is active or not by the boolean value that is passed in
const setChildActive = (isActive) => (dispatch) => {
  dispatch({ type: 'CHILD_ACTIVE', payload: isActive });
};

export default {
  setUser,
  changeUser,
  setChild,
  setChildActive,
  handleEmail,
};
