import axios from 'axios';

const origin = window.location.origin;
const instance = axios.create({
    baseURL: origin+'/api/'
});

export default instance;