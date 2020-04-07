import axios from 'axios';

// Action Creators
const setUser = (user) => dispatch => {
	return dispatch({ type: "SET_USER", payload: user })
}

const changeUser = (user) => dispatch => {
  const { email, password } = user;
  if(!user.child) {
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
  
  // return dispatch({ type: "CHANGE_USER", payload: user})
}

export default {
  setUser,
  changeUser
};
