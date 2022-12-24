import { createAsyncThunk } from '@reduxjs/toolkit';

import {
  axiosGetTransactionsByMonth,
  axiosAddTransaction,
  axiosDeleteTransaction,
  axiosGetExpensesTransaction,
  axiosGetIncomeTransaction,
} from 'api/transactions';

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

export const deleteTransaction = createAsyncThunk(
  'transactions/deleteTransaction',
  async (userData, { rejectWithValue }) => {
    try {
      const data = await axiosDeleteTransaction(userData);
      return data;
    } catch (error) {
      const { data, status } = error.response;

      return rejectWithValue({ data, status });
    }
  }
);

export const getExpensesTransaction = createAsyncThunk(
  'transactions/getExpensesTransaction',
  async (_, { rejectWithValue }) => {
    try {
      const data = await axiosGetExpensesTransaction();
      return data;
    } catch (error) {
      const { data, status } = error.response;

      return rejectWithValue({ data, status });
    }
  }
);

export const getIncomeTransaction = createAsyncThunk(
  'transactions/getIncomeTransaction',
  async (_, { rejectWithValue }) => {
    try {
      const data = await axiosGetIncomeTransaction();
      return data;
    } catch (error) {
      const { data, status } = error.response;

      return rejectWithValue({ data, status });
    }
  }
);
