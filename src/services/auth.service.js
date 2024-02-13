import api from './api';
import tokenService from './token.service';
import { CREATE_USER, LOGIN_USER } from '../conf/config';

//https://github.com/bezkoder/react-jwt-refresh-token/blob/master/src/services/auth.service.js

class AuthService {
  async login({ username, password }) {
    return api
      .post(LOGIN_USER, {
        username,
        password,
      })
      .then((response) => {
        if (response.statusText === 'OK' && response.data.data.accessToken) {
          let userData = {
            accessToken: response.data.data.accessToken,
            refreshToken: response.data.data.refreshToken,
          };
          tokenService.setUser(userData);
        }

        return response.data;
      });
  }

  logout() {
    tokenService.removeUser();
  }

  signUp({ username, email, password }) {
    return api.post(CREATE_USER, {
      username,
      email,
      password,
    });
  }

  getCurrentUser() {
    return tokenService.getUser();
  }

  getAuthStatus() {
    const token = tokenService.getLocalAccessToken();
    return token ? true : false;
  }
}

const authService = new AuthService();
export default authService;
