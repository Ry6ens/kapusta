import { createAsyncThunk } from '@reduxjs/toolkit';

export const googleLogIn = createAsyncThunk(
  'auth/googleLogIn',
  async (data, { rejectWithValue }) => {
    try {
      // const result = await fetchLogIn(data);
      return data;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);
