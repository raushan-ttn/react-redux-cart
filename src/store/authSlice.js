import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  status: false,
  accessToken: null,
  refreshToken: null,
  userData: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      state.status = true;
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
      state.userData = action.payload;
    },
    logout: (state, action) => {
      localStorage.setItem('accessToken', null);
      localStorage.setItem('refreshToken', null);
      state.status = false;
      state.accessToken = null;
      state.refreshToken = null;
      state.userData = null;
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
