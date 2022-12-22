import { createSlice } from '@reduxjs/toolkit';

import { getTransactionsAllByDate } from './transaction-operations';

const initialState = {
  id: '',
  daySummary: {},
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
        state.daySummary = payload;
        state.loading = false;
      })
      .addCase(getTransactionsAllByDate.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload.data.message;
      });
  },
});

export default transactions.reducer;
