import { createAsyncThunk } from '@reduxjs/toolkit';

import { axiosUserDelete } from 'api/user';

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
