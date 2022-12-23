import { createSlice } from '@reduxjs/toolkit';

import {
  getTransactionsByMonth,
  addTransaction,
  deleteTransaction,
  getExpensesTransaction,
} from './transaction-operations';

const initialState = {
  user: {},
  currentDate: '',
  loading: false,
  error: null,
};

const transactions = createSlice({
  name: 'transactions',
  initialState,
  reducers: {
    addDate: (state, { payload }) => {
      state.currentDate = payload;
    },
  },
  extraReducers: builder => {
    // Get transactions by month
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

    // Add transaction
    builder
      .addCase(addTransaction.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addTransaction.fulfilled, (state, _) => {
        state.loading = false;
      })
      .addCase(addTransaction.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload.data.message;
      });

    // Delete transaction
    builder
      .addCase(deleteTransaction.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteTransaction.fulfilled, (state, _) => {
        state.loading = false;
      })
      .addCase(deleteTransaction.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload.data.message;
      });

    // Get expenses transaction
    builder
      .addCase(getExpensesTransaction.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getExpensesTransaction.fulfilled, (state, { payload }) => {
        state.user = payload;
        state.loading = false;
      })
      .addCase(getExpensesTransaction.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload.data.message;
      });
  },
});

export default transactions.reducer;

export const { addDate } = transactions.actions;
