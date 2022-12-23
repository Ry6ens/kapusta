import { createAsyncThunk } from '@reduxjs/toolkit';

import {
  axiosGetTransactionsAllByDate,
  axiosGetTransactionsByMonth,
  axiosAddTransaction,
} from 'api/transactions';

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

export const getTransactionsByMonth = createAsyncThunk(
  'transactions/byMonth',
  async (userData, { rejectWithValue }) => {
    try {
      const data = await axiosGetTransactionsByMonth(userData);
      return data;
    } catch (error) {
      const { data, status } = error.response;

      return rejectWithValue({ data, status });
    }
  }
);

export const addTransaction = createAsyncThunk(
  'transactions/addTransaction',
  async (userData, { rejectWithValue }) => {
    try {
      const data = await axiosAddTransaction(userData);
      return data;
    } catch (error) {
      const { data, status } = error.response;

      return rejectWithValue({ data, status });
    }
  }
);
