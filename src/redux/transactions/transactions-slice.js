import { createSlice } from '@reduxjs/toolkit';

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
    // builder
    //   .addCase(transactions.pending, state => {
    //     state.loading = true;
    //     state.error = null;
    //   })
    //   .addCase(transactions.fulfilled, (state, { payload }) => {
    //     state.daySummary = payload;
    //     state.loading = false;
    //   })
    //   .addCase(transactions.rejected, (state, { payload }) => {
    //     state.loading = false;
    //     state.error = payload.data.message;
    //   });
  },
});

export default transactions.reducer;
