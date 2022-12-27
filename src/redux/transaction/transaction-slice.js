import { createSlice } from '@reduxjs/toolkit';

import {
  getTransactionsByMonth,
  addTransaction,
  deleteTransaction,
  getExpensesTransByDate,
  getIncomeTransByDate,
  getChartData,
} from './transaction-operations';

const initialState = {
  balance: '',
  monthlySum: [],
  transactions: [],
  currentDate: '',
  loading: false,
  error: null,
  calendarDate: null,
  chartData: [],
};

const transactions = createSlice({
  name: 'transactions',
  initialState,
  reducers: {
    addDate: (state, { payload }) => {
      state.currentDate = payload;
    },
    addCalendarDate: (state, { payload }) => {
      state.calendarDate = payload;
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

    // Get chart data
    builder
      .addCase(getChartData.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getChartData.fulfilled, (state, { payload }) => {
        state.chartData = payload;
        state.loading = false;
      })
      .addCase(getChartData.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload.data.message;
      });
  },
});

export default transactions.reducer;

export const { addDate } = transactions.actions;
export const { addCalendarDate } = transactions.actions;
