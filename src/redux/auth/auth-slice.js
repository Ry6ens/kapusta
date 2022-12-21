import { createSlice } from '@reduxjs/toolkit';
import { signUp, login, logout } from './auth-operations';

const initialState = {
  user: {},
  todaySummary: {},
  sid: '',
  accessToken: '',
  refreshToken: '',
  isLogin: false,
  loading: false,
  isRefreshing: false,
  error: null,
  newUser: {},
};

const accessAuth = (state, payload) => {
  state.loading = false;
  state.isLogin = true;
  state.user = payload.user;
  state.sid = payload.sid;
  state.accessToken = payload.accessToken;
  state.refreshToken = payload.refreshToken;
};

const auth = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    clearNewUser: state => {
      state.newUser = {};
    },
  },
  extraReducers: builder => {
    // SignUp by email
    builder
      .addCase(signUp.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signUp.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.isLogin = false;
        state.newUser = payload;
        state.user = { ...state.user };
        state.sid = '';
        state.accessToken = '';
        state.refreshToken = '';
      })
      .addCase(signUp.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload.data.message;
      });

    // LogIn
    builder
      .addCase(login.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, { payload }) => {
        accessAuth(state, payload);
      })
      .addCase(login.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload.data.message;
      });

    // LogOut
    builder
      .addCase(logout.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(logout.fulfilled, () => ({ ...initialState }))
      .addCase(logout.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload.data.message;
      });
  },
});

export default auth.reducer;
export const { clearNewUser } = auth.actions;
