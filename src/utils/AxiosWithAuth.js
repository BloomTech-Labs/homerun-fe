import axios from 'axios';

const axiosWithAuth = () => {
    const token = localStorage.getItem('token');

    return axios.create({
        baseURL: process.env.REACT_APP_BE_URL,
        headers: {
            Authorization: token
        }
    })
};

export default axiosWithAuth;