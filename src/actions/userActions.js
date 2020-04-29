import axios from 'axios';
import axiosWithAuth from '../utils/AxiosWithAuth';
// Action Creators
const setUser = (user) => dispatch => {
	dispatch({ type: "SET_USER", payload: user })
}

const changeUser = (user) => dispatch => {
  const { email, password } = user;
  if(!user.child) {
    dispatch({ type: "LOAD_USER"})
    axios
      .post(`${process.env.REACT_APP_BE_URL}/auth/login`, {email, password })
      .then(res => {
        console.log(res);
        localStorage.setItem("token", res.data.token);
        setUser(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  } else  {
    dispatch({ type: "SET_USER", payload: user })
  }
}

const deleteUser = (id) => dispatch => {
  axiosWithAuth()
    .delete(`${process.env.REACT_APP_BE_URL}/auth/${id}`)
    .then((res) => {
      dispatch({ type: "DELETE_USER", payload: res.data });
    })
    .catch((err) => console.log(err.message));
}

// sets the state to have the child details stored in redux
const setChild = child => dispatch => {
  dispatch({ type: "SET_CHILD", payload: child });
  dispatch({ type: "CHILD_ACTIVE", payload: true });
}

// sets whether a child account is active or not by the boolean value that is passed in
const setChildActive = isActive => dispatch => {
  dispatch({ type: "CHILD_ACTIVE", payload: isActive })
}

export default {
  setUser,
  changeUser,
  deleteUser,
  setChild,
  setChildActive
};
