import Cookies from 'js-cookie';

export class TokenService {
  getLocalRefreshToken() {
    if (Cookies.get('refreshToken')) {
      return Cookies.get('refreshToken');
    }
  }

  getLocalAccessToken() {
    if (Cookies.get('accessToken')) {
      return Cookies.get('accessToken');
    }
  }

  updateLocalAccessToken(token) {
    if (token) {
      this.setToken('accessToken', token);
    }
  }

  setLocalAuthTokens({ refreshToken, accessToken }) {
    this.setToken('accessToken', accessToken);
    this.setToken('refreshToken', refreshToken);
  }

  setToken(name, value) {
    Cookies.set(name, value, {
      expires: 1,
      domain: window.location.hostname,
      path: '/',
      sameSite: 'strict'
    });
  }

  removeLocalAuthTokens() {
    Cookies.remove('accessToken');
    Cookies.remove('refreshToken');
  }
}

const tokenService = new TokenService();

export default tokenService;
