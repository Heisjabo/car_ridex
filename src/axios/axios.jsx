import axios from 'axios';

const axiosConfig = axios.create({
    baseURL: 'https://car-ridex-api.onrender.com/api/v1',
});

export default axiosConfig;