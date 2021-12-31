import axios from 'axios';
import { baseUrl } from '../Constants/baseUrl.js';


const API = axios.create({ baseURL: baseUrl });

API.interceptors.request.use((req) => {
    const token = JSON.parse(localStorage.getItem('profile'))?.token;
    if (token) {
        req.headers.authorization = `Bearer ${token}`;
    }

    return req;
});

export const signup = (formData) => API.post('/user/signup',formData).then((res)=>{
    const data=res.data;
    localStorage.setItem('profile', JSON.stringify(data));
}).catch((err)=>{
    console.log(err.response);
});

export const login = (formData) => API.post('/user/login',formData).then((res)=>{
    const data=res.data;
    localStorage.setItem('profile', JSON.stringify(data));
}).catch((err)=>{
    console.log(err.response);
});