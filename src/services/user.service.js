// import axios from 'axios';
// import { CREATE_USER, LOGIN_USER } from '../conf/config';
// import Cookies from 'js-cookie';
// import tokenService from './token.service';

// export class UserAuth {
//   async createUser({ email, password, username }) {
//     try {
//       const createdUser = await axios.post(CREATE_USER, {
//         email: email,
//         password: password,
//         role: 'USER',
//         username: username,
//       });
//       return createdUser;
//     } catch (e) {
//       console.log('User Created Error ', e);
//       throw e;
//     }
//   }

//   async login({ username, password }) {
//     try {
//       const user = await axios.post(LOGIN_USER, { username, password });
//       if (user.status === 200 && user.statusText === 'OK') {
//         // Set data in local storage.
//         Cookies.set('accessToken', user.data.data.accessToken, {
//           expires: 7,
//           secure:true,
//           domain: window.location.hostname,
//           path: '/',
//           sameSite: 'strict'
//         });
//         Cookies.set('refreshToken', user.data.data.refreshToken, {
//           expires: 7,
//           secure:true,
//           domain: window.location.hostname,
//           path: '/',
//           sameSite: 'strict'
//         });

//         let userData = {
//           email: user.data.data.user.email,
//           role: user.data.data.user.role,
//           image: user.data.data.user.avatar.url,
//           username: user.data.data.user.username,
//           message: user.data.message,
//           success: user.data.success,
//         };
//         return userData;
//       }
//     } catch (error) {
//       console.log('User Login Error ', error);
//       throw error;
//     }
//   }

//   logout = async () => {};

//   getResponse = async () => {};

//   refreshToken = async () => {};

//   handleSetAccessToken = async (accessToken) => {
//     let headers = {};
//   };
// }

// const authUserService = new UserAuth();
// export default authUserService;

import api from './api';
import { LOGIN_USER } from '../conf/config';

export class UserService {
  getPublicContent() {
    return api.get('/test/all');
  }

  getUserBoard() {
    return api.get('/test/user');
  }

  getModeratorBoard() {
    return api.get('/test/mod');
  }

  getAdminBoard() {
    return api.get('/test/admin');
  }
}

const userService = new UserService();
export default userService;
