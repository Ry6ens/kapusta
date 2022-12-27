import { createSlice } from '@reduxjs/toolkit';

import { userDelete, userDeleteAvatar } from './user-operations';

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
      });

    // Delete avatar
    builder
      .addCase(userDeleteAvatar.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(userDeleteAvatar.fulfilled, (state, { payload }) => {
        console.log(payload);
        state.loading = false;
      })
      .addCase(userDeleteAvatar.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload.data.message;
      });
  },
});

export default user.reducer;
