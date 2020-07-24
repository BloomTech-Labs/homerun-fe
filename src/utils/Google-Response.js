import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import actions from '../actions';

const googleResponse = (res) => {
  const dispatch = useDispatch();
  const history = useHistory();
  axios
    .post(`${process.env.REACT_APP_BE_URL}/auth/google`, {
      token: res.tokenObj.id_token,
      email: res.profileObj.email,
    })
    .then((res) => {
      if (res.data.token) {
        console.log('inside the supposed login');
        localStorage.setItem('token', res.data.token);
        localStorage.setItem('google', true);
        dispatch(actions.user.setUser(res.data));
        history.push('/dashboard');
      } else {
        console.log(res.data);
        history.push(`/confirm/${res.data.response.id}`);
      }
    })
    .catch((err) => console.log('err', err));
  console.log(res);
};

export default googleResponse;
