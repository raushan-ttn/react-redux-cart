import api from './api';
import { CURRENT_USER } from '../conf/config';

export class UserService {
  getPublicContent() {
    return api.get('/test/all');
  }

  getUserBoard() {
    return api.get(CURRENT_USER);
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
