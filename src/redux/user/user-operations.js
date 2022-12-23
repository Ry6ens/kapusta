import { createAsyncThunk } from '@reduxjs/toolkit';

import { axiosUserAddBalance, axiosUserBalance } from 'api/user';

export const userAddBalance = createAsyncThunk(
  'user/addBalance',
  async (userData, { rejectWithValue }) => {
    try {
      const data = await axiosUserAddBalance(userData);
      return data;
    } catch (error) {
      const { data, status } = error.response;
      return rejectWithValue({ data, status });
    }
  }
);

export const userBalance = createAsyncThunk(
  'user/balance',
  async (_, { rejectWithValue }) => {
    try {
      const data = await axiosUserBalance();
      return data;
    } catch (error) {
      const { data, status } = error.response;
      return rejectWithValue({ data, status });
    }
  }
);
