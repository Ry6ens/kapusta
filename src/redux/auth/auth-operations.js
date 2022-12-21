import { createAsyncThunk } from '@reduxjs/toolkit';

import { axiosSignUp, axiosLogIn, axiosLogOut } from 'api/auth';

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

export const login = createAsyncThunk(
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

export const logout = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue, getState }) => {
    try {
      const {
        auth: { accessToken },
      } = getState();
      const data = await axiosLogOut(accessToken);
      return data;
    } catch (error) {
      console.log(error);
      const { data, status } = error.response;
      return rejectWithValue({ data, status });
    }
  }
);
