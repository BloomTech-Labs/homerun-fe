import axios from 'axios';

// Action Creators
const setUser = (user) => (dispatch) => {
  console.log(user);
  dispatch({ type: 'SET_USER', payload: user });
};

const changeUser = (user) => (dispatch) => {
  const { email, password } = user;
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
};

export default {
  setUser,
  changeUser,
};
