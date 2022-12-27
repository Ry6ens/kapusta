import { createAsyncThunk } from '@reduxjs/toolkit';

import { axiosUserDelete, axiosUserDeleteAvatar } from 'api/user';

// Delete user
export const userDelete = createAsyncThunk(
  'user/delete',
  async (userData, { rejectWithValue }) => {
    try {
      const data = await axiosUserDelete(userData);
      return data;
    } catch (error) {
      const { data, status } = error.response;
      return rejectWithValue({ data, status });
    }
  }
);

// Delete avatar
export const userDeleteAvatar = createAsyncThunk(
  'user/deleteAvatar',
  async (userData, { rejectWithValue }) => {
    try {
      const data = await axiosUserDeleteAvatar(userData);
      return data;
    } catch (error) {
      const { data, status } = error.response;
      return rejectWithValue({ data, status });
    }
  }
);
