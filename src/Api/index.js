import axios from 'axios';
import { baseUrl } from '../constants/baseUrl.js';


const API = axios.create({ baseURL: baseUrl });
API.interceptors.request.use((req) => {
    const token = JSON.parse(localStorage.getItem('token'))?.token;
    if (token) {
        req.headers.authorization = `Bearer ${token}`;
    }

    return req;
});

export const signup = (formData) => API.post('/user/signup',formData).then((res)=>{
    const token=res.data.token;
    localStorage.setItem('token', JSON.stringify({ token }));
}).catch((err)=>{
    console.log(err);
});

export const login = (formData) => API.post('/user/login',formData).then((res)=>{
    console.log(res);
    const token=res.data.token;
    localStorage.setItem('token', JSON.stringify({ token }));
}).catch((err)=>{
    console.log(err);
});