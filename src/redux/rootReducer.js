import { combineReducers } from '@reduxjs/toolkit';

import authSlice from 'redux/auth/auth-slice';
import transactionsSlice from './transaction/transaction-slice';
import userSlice from './user/user-slice';

const rootReducer = combineReducers({
  auth: authSlice,
  transactions: transactionsSlice,
  user: userSlice,
});

export default rootReducer;
