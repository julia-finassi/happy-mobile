import axios from 'axios';

const api = axios.create({
    baseURL: 'http://192.168.0.65:3333',
});

export default api;