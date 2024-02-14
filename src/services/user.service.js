import api from './api';
import { CURRENT_USER } from '../conf/config';

export class UserService {
  getPublicContent() {
    return api.get('/test/all');
  }

  async getCurrentUser() {
    return api.get(CURRENT_USER).then((response) => {
      // return data to component.
      let userData = {
        username: response.data.data.username,
        email: response.data.data.email,
        role: response.data.data.role,
        url: response.data.data.avatar.url,
        success: response.data.success,
      };
      return userData;
    });
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
