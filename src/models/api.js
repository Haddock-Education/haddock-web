import axios from 'axios';

const api = axios.create({
    baseURL:"https://haddock-api.herokuapp.com"
});

export default api;