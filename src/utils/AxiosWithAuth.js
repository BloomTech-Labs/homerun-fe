import axios from 'axios';

const axiosWithAuth = () => {
  const token = localStorage.getItem('token');

  return axios.create({
    baseURL:
      process.env.REACT_APP_BE_URL || 'https://stage-homerun-be.herokuapp.com',
    headers: {
      Authorization: token,
    },
  });
};

export default axiosWithAuth;
