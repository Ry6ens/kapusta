import { createAsyncThunk } from '@reduxjs/toolkit';
import { axiosUserAddBalance, axiosGetDetailsIncome, axiosGetDetailsExpenses, axiosUserDelete } from 'api/user';


export const userDelete = createAsyncThunk(
  'user/delete',
  async (userData, { rejectWithValue }) => {
    try {
      const data = await axiosUserDelete(userData);
      return data;
    } catch (error) {
      const { data, status } = error.response;
      return rejectWithValue({ data, status });
    }
  }
);

export const userGetDetailsExpenses = createAsyncThunk(
  'user/detailsExpenses',
  async (userData, { rejectWithValue }) => {
    try {
      const data = await axiosGetDetailsExpenses(userData);
      console.log(data)
      return data;
    } catch (error) {
      const { data, status } = error.response;
      return rejectWithValue({ data, status });
    }
  }
);

export const userGetDetailsIncome = createAsyncThunk(
  'user/detailsIncome',
  async (userData, { rejectWithValue }) => {
    try {
      const data = await axiosGetDetailsIncome(userData);
      console.log(data)
      return data;
    } catch (error) {
      const { data, status } = error.response;
      return rejectWithValue({ data, status });
    }
  }
);
