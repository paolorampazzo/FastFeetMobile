import axios from 'axios';

const api = axios.create({
  // baseURL: 'http://169.254.45.189:3333', // Varia dependendo do tipo de emulador utilizado
  // baseURL: 'http://192.168.137.1:3333', // Varia dependendo do tipo de emulador utilizado
  baseURL: 'http://192.168.0.15:3333', // Varia dependendo do tipo de emulador utilizado
  // baseURL: 'http://172.18.97.241:3333', // Varia dependendo do tipo de emulador utilizado
  // baseURL: 'localhost', // Varia dependendo do tipo de emulador utilizado
});

export default api;
