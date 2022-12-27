import { createAsyncThunk } from '@reduxjs/toolkit';

import { axiosSignUp, axiosLogIn, axiosGoogleLogIn, axiosLogOut } from 'api/auth';
import { axiosUserUpdateAccount } from 'api/user';

export const signUp = createAsyncThunk(
  'auth/signup',
  async (userData, { rejectWithValue }) => {
    try {
      const data = await axiosSignUp(userData);
      return data;
    } catch (error) {
      const { data, status } = error.response;

      return rejectWithValue({ data, status });
    }
  }
);

export const logIn = createAsyncThunk(
  'auth/login',
  async (userData, { rejectWithValue }) => {
    try {
      const data = await axiosLogIn(userData);
      return data;
    } catch (error) {
      const { data, status } = error.response;
      return rejectWithValue({ data, status });
    }
  }
);

export const googleLogIn = createAsyncThunk(
  'auth/googlelogin',
  async (userData, { rejectWithValue }) => {
    try {
      const data = await axiosGoogleLogIn(userData);
      return data;
    } catch (error) {
      const { data, status } = error.response;
      return rejectWithValue({ data, status });
    }
  }
);

export const logOut = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue, getState }) => {
    try {
      const {
        auth: { accessToken },
      } = getState();
      const data = await axiosLogOut(accessToken);
      return data;
    } catch (error) {
      const { data, status } = error.response;
      return rejectWithValue({ data, status });
    }
  }
);

export const userUpdateAccount = createAsyncThunk(
  'user/apdateAccount',
  async (userData, { rejectWithValue }) => {
    try {
      const data = await axiosUserUpdateAccount(userData);
      return data;
    } catch (error) {
      const { data, status } = error.response;
      return rejectWithValue({ data, status });
    }
  }
);
