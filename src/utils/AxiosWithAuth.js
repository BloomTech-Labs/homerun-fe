import axios from 'axios';

const axiosWithAuth = () => {
    const token = localStorage.getItem('token');

    return axios.create({
        baseURL: 'baseUrl',
        headers: {
            Authorization: token
        }
    })
};

export default axiosWithAuth;