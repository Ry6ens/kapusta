import { createSlice } from '@reduxjs/toolkit';

import { userAddBalance, userBalance } from './user-operations';

const initialState = {
  user: {},
  balance: null,
  loading: false,
  error: null,
};

const user = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: builder => {
    // User add balance
    builder
      .addCase(userAddBalance.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(userAddBalance.fulfilled, (state, { payload }) => {
        state.balance = payload.balance;
        state.loading = false;
      })
      .addCase(userAddBalance.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload.data.message;
      });

    //Get balance
    builder
      .addCase(userBalance.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(userBalance.fulfilled, (state, { payload }) => {
        state.balance = payload.balance;
        state.loading = false;
      })
      .addCase(userBalance.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload.data.message;
      });
  },
});

export default user.reducer;
