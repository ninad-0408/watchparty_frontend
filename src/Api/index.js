import axios from "axios";
import { baseUrl } from "../Constants/baseUrl.js";

const API = axios.create({ baseURL: baseUrl,credentials:"include"});
axios.defaults.withCredentials = true;
API.interceptors.request.use((req) => {
  const token = JSON.parse(localStorage.getItem("profile"))?.token;
  if (token) {
    req.headers.authorization = `Bearer ${token}`;
  }

  return req;
});

export const signup = (formData) =>
  API.post("/user/signup", formData)
    .then((res) => {
      const data = res.data;
      localStorage.setItem("profile", JSON.stringify(data));
      return res.data;
    })
    .catch((err) => {
      return err.response.data;
    });

export const login = (formData) =>
  API.post("/user/login", formData)
    .then((res) => {
      const data = res.data;
      localStorage.setItem("profile", JSON.stringify(data));
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
