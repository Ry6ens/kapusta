import { createSlice } from '@reduxjs/toolkit';

import { getTransactionsByMonth, addTransaction } from './transaction-operations';

const initialState = {
  user: {},
  currentDate: '',
  currentMonth: '',
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
    addMonth: (state, { payload }) => {
      state.currentMonth = payload;
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
      .addCase(addTransaction.fulfilled, (state, { payload }) => {
        state.loading = false;
      })
      .addCase(addTransaction.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload.data.message;
      });
  },
});

export default transactions.reducer;

export const { addDate, addMonth } = transactions.actions;
