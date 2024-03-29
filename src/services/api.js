import axios from 'axios';
import { BASE_URL, APP_URL } from '../conf/config';
import tokenService from './token.service';

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use(
  (config) => {
    const token = tokenService.getLocalAccessToken();
    if (token) {
      config.headers['Authorization'] = 'Bearer ' + token; // for Spring Boot back-end
      // config.headers['x-access-token'] = token; // for Node.js Express back-end
    }
    console.log(config.url,'URL');
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    if (error.response.status === 401) {
      // logout user incase of accessToken expires.
      // @todo: we will implement refresh Token here.
      tokenService.removeLocalAuthTokens();
      //
      window.location.href = `${APP_URL}/login`;
    }
    return Promise.reject(error);
  }
);
export default api;
