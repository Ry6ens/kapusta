import { createAsyncThunk } from '@reduxjs/toolkit';

import { axiosGetTransactionsAllByDate } from 'api/transactions';

export const getTransactionsAllByDate = createAsyncThunk(
  'transactions/allByDate',
  async (userData, { rejectWithValue }) => {
    try {
      const data = await axiosGetTransactionsAllByDate(userData);
      return data;
    } catch (error) {
      const { data, status } = error.response;

      return rejectWithValue({ data, status });
    }
  }
);
