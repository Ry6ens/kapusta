import { createSlice } from '@reduxjs/toolkit';

import { userAddBalance } from './user-operations';

const initialState = {
  user: {},
  newBalance: null,
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
        state.newBalance = payload.newBalance;
        state.loading = false;
      })
      .addCase(userAddBalance.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload.data.message;
      });
  },
});

export default user.reducer;
