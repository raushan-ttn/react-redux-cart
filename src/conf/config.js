export const BASE_URL = 'http://localhost:8080';
const apiPrefix = '/api/v1';

// User Auth API
export const CREATE_USER = `${apiPrefix}/users/register`;
export const LOGIN_USER = `${apiPrefix}/users/login`;
export const REFRESH_TOKEN = `${apiPrefix}/users/refresh-token`;
