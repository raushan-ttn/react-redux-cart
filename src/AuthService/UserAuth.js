import axios from 'axios';
import { CREATE_USER, LOGIN_USER } from '../conf/config';

export class UserAuth {
  async createUser({ email, password, username }) {
    try {
      const createdUser = await axios.post(CREATE_USER, {
        email: email,
        password: password,
        role: 'USER',
        username: username,
      });
      return createdUser;
    } catch (e) {
      console.log('User Created Error ', e);
      throw e;
    }
  }

  async login({ username, password }) {
    try {
      const user = await axios.post(LOGIN_USER, { username, password });
      if (user.status === 200 && user.statusText === 'OK') {
        // Set data in local storage.
        localStorage.setItem('accessToken', user.data.data.accessToken);
        localStorage.setItem('refreshToken', user.data.data.refreshToken);
        let userData = {
          email: user.data.data.user.email,
          role: user.data.data.user.role,
          image: user.data.data.user.avatar.url,
          username: user.data.data.user.username,
          accessToken: user.data.data.accessToken,
          refreshToken: user.data.data.refreshToken,
          message: user.data.message,
          success: user.data.success,
        };
        return userData;
      }
    } catch (error) {
      console.log('User Login Error ', error);
      throw error;
    }
  }

  logout = async () => {};

  getResponse = async () => {};

  refreshToken = async () => {};

  handleSetAccessToken = async (accessToken) => {
    let headers = {};
  };
}

const authUserService = new UserAuth();
export default authUserService;
