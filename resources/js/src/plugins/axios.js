// src/axios.js
import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://fakestoreapi.com',
  /* other custom settings */
});

export default instance;
