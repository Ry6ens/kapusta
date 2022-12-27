import { createSlice } from '@reduxjs/toolkit';

import { userAddBalance, userGetDetailsExpenses, userGetDetailsIncome, userDelete } from './user-operations';


const initialState = {
  message: '',
  loading: false,
  error: null,
};

const user = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: builder => {
    // Delete user
    builder
      .addCase(userDelete.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(userDelete.fulfilled, (state, { payload }) => {
        state.message = payload.message;
        state.loading = false;
      })
      .addCase(userDelete.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload.data.message;
      })
      .addCase(userGetDetailsExpenses.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(userGetDetailsExpenses.fulfilled, (state, { payload }) => {
        state.detailsExpenses = payload;
        state.loading = false;
      })
      .addCase(userGetDetailsExpenses.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload.data.message;
      })
      .addCase(userGetDetailsIncome.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(userGetDetailsIncome.fulfilled, (state, { payload }) => {
        state.detailsIncome = payload;
        state.loading = false;
      })
      .addCase(userGetDetailsIncome.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload.data.message;
      })
  },
});

export default user.reducer;
