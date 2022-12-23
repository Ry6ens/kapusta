import { createSlice } from '@reduxjs/toolkit';

import {
  getTransactionsAllByDate,
  getTransactionsByMonth,
} from './transaction-operations';

const initialState = {
  user: {},
  loading: false,
  error: null,
};

const transactions = createSlice({
  name: 'transactions',
  initialState,
  reducers: {},
  extraReducers: builder => {
    // Transactions all by date
    builder
      .addCase(getTransactionsAllByDate.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getTransactionsAllByDate.fulfilled, (state, { payload }) => {
        state.user = payload;
        state.loading = false;
      })
      .addCase(getTransactionsAllByDate.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload.data.message;
      });

    // Transactions all by month
    builder
      .addCase(getTransactionsByMonth.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getTransactionsByMonth.fulfilled, (state, { payload }) => {
        state.user = payload;
        state.loading = false;
      })
      .addCase(getTransactionsByMonth.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload.data.message;
      });
  },
});

export default transactions.reducer;
