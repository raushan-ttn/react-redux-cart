import api from './api';
import tokenService from './token.service';
import { CREATE_USER, LOGIN_USER, REFRESH_TOKEN } from '../conf/config';

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
          // store tokens in cookies.
          let userData = {
            accessToken: response.data.data.accessToken,
            refreshToken: response.data.data.refreshToken,
          };
          tokenService.setLocalAuthTokens({ ...userData });
        }
        // return data to component.
        let userData = {
          username: response.data.data.user.username,
          email: response.data.data.user.email,
          role: response.data.data.user.role,
          url: response.data.data.user.avatar.url,
          success: response.data.success
        };
        return userData;
      });
  }

  logout() {
    tokenService.removeLocalAuthTokens();
  }

  signUp({ username, email, password }) {
    return api.post(CREATE_USER, {
      username,
      email,
      password,
    });
  }

  getAuthStatus() {
    const token = tokenService.getLocalAccessToken();
    return token ? true : false;
  }
}

const authService = new AuthService();
export default authService;
