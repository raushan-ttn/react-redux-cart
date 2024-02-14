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
      Cookies.set('accessToken', token, {
        expires: 7,
        domain: window.location.hostname,
        path: '/',
      });
    }
  }

  getUser() {
    return Cookies.get('user') ? JSON.parse(Cookies.get('user')) : {};
  }

  setUser({ refreshToken, accessToken }) {
    Cookies.set('accessToken', accessToken, {
      expires: 7,
      domain: window.location.hostname,
      path: '/',
    });
    Cookies.set('refreshToken', refreshToken, {
      expires: 7,
      domain: window.location.hostname,
      path: '/',
    });
  }

  removeUser() {
    Cookies.remove('accessToken');
    Cookies.remove('refreshToken');
  }
}

const tokenService = new TokenService();

export default tokenService;
