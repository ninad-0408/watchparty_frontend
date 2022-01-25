import axios from "axios";
import Cookies from "js-cookie";
import { baseUrl } from "../Constants/baseUrl.js";

axios.defaults.withCredentials = true;

const API = axios.create({ baseURL: baseUrl, withcredentials: true });

API.interceptors.request.use((req) => {
  const token = Cookies.get()?.token;
  if (token) {
    req.headers.authorization = `Bearer ${token}`;
  }

  return req;
});

export const signup = (formData) =>
  API.post("/user/signup", formData)
    .then((res) => {
      Cookies.set('token', res.data.token, { expires: 1 });
      Cookies.set('username', res.data.username, { expires: 1 });
      Cookies.set('_id', res.data._id, { expires: 1 });
      return res.data;
    })
    .catch((err) => {
      return err.response.data;
    });

export const login = (formData) => 
  API.post("/user/login", formData)
    .then((res) => {
      Cookies.set('token', res.data.token, { expires: 1 });
      Cookies.set('username', res.data.username, { expires: 1 });
      Cookies.set('_id', res.data._id, { expires: 1 });
      return res.data;
    })
    .catch((err) => {
      return err.response.data;
    });

export const CreateNewRoom = (formData) =>
  API.post("/room/create", formData)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log(err.response);
    });

export const getRooms = () =>
  API.get("/room")
    .then((res) => {
      return res.data.rooms;
    })
    .catch((err) => {
      console.log(err.response);
    });

export const getRoom = (roomId) =>
  API.get(`/room/${roomId}`)
    .then((res) => {
      return res.data.room;
    })
    .catch((err) => {
      console.log(err.response);
    });

export const delRoom = (roomId) =>
  API.delete(`/room/${roomId}`)
    .then((res) => {
      return res.data.message;
    })
    .catch((err) => {
      return err.response.data;
    });

export const ytSearch = (term) =>
  API.post(`/videoSearch`, term)
    .then((res) => {
      // console.log(res.data);
      return res.data;
    })
    .catch((err) => {
      console.log(err.response);
    });

export const myRoom = () =>
  API.get("/user/myRoom")
    .then((res) => {
      return res.data.myrooms;
    })
    .catch((err) => {
      console.log(err.response);
    });
