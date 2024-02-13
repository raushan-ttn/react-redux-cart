import Cookies from 'js-cookie';

export class TokenService {
  getLocalRefreshToken() {
    const user = JSON.parse(Cookies.get('user'));
    return user?.refreshToken;
  }

  getLocalAccessToken() {
    if (Cookies.get('user')) {
      const user = JSON.parse(Cookies.get('user'));
      return user?.accessToken;
    }
  }

  updateLocalAccessToken(token) {
    let user = JSON.parse(Cookies.get('user'));
    user.accessToken = token;
    Cookies.set('user', JSON.stringify(user), {
      expires: 7,
      secure: true,
      domain: window.location.hostname,
      path: '/',
      sameSite: 'strict',
    });
  }

  getUser() {
    return JSON.parse(Cookies.get('user'));
  }

  setUser(user) {
    Cookies.set('user', JSON.stringify(user), {
      expires: 7,
      secure: true,
      domain: window.location.hostname,
      path: '/',
      sameSite: 'strict',
    });
  }

  removeUser() {
    Cookies.remove('user');
  }
}

const tokenService = new TokenService();

export default tokenService;
