import { createSlice } from '@reduxjs/toolkit';

import {
  userAddBalance,
  getTransactionsByMonth,
  addTransaction,
  deleteTransaction,
  getExpensesTransByDate,
  getIncomeTransByDate,
} from './transaction-operations';

const initialState = {
  balance: 0,
  monthlySum: [],
  transactions: [],
  currentDate: '',
  message: '',
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
    // User add balance
    builder
      .addCase(userAddBalance.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(userAddBalance.fulfilled, (state, { payload }) => {
        state.balance = payload.newBalance;
        state.loading = false;
      })
      .addCase(userAddBalance.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload.data.message;
      });

    // Get transactions by month
    builder
      .addCase(getTransactionsByMonth.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getTransactionsByMonth.fulfilled, (state, { payload }) => {
        state.balance = payload.balance;
        state.monthlySum = payload.monthlySum;
        state.transactions = payload.transitions;
        state.loading = false;
      })
      .addCase(getTransactionsByMonth.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload.data.message;
      });

    // Add transaction
    builder
      .addCase(addTransaction.pending, state => {
        state.message = '';
        state.loading = true;
        state.error = null;
      })
      .addCase(addTransaction.fulfilled, (state, { payload }) => {
        state.message = payload.transitionName;
        state.loading = false;
      })
      .addCase(addTransaction.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload.data.message;
      });

    // Delete transaction
    builder
      .addCase(deleteTransaction.pending, state => {
        state.message = '';
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteTransaction.fulfilled, (state, { payload }) => {
        state.message = payload.message;
        state.loading = false;
      })
      .addCase(deleteTransaction.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload.data.message;
      });

    // Get expenses transaction
    builder
      .addCase(getExpensesTransByDate.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getExpensesTransByDate.fulfilled, (state, { payload }) => {
        state.transactions = payload;
        state.loading = false;
      })
      .addCase(getExpensesTransByDate.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload.data.message;
      });

    // Get income transaction
    builder
      .addCase(getIncomeTransByDate.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getIncomeTransByDate.fulfilled, (state, { payload }) => {
        state.transactions = payload;
        state.loading = false;
      })
      .addCase(getIncomeTransByDate.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload.data.message;
      });
  },
});

export default transactions.reducer;

export const { addDate } = transactions.actions;
