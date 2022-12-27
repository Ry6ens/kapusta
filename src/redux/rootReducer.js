import { combineReducers } from '@reduxjs/toolkit';

import authSlice from 'redux/auth/auth-slice';
import transactionsSlice from './transaction/transaction-slice';

const rootReducer = combineReducers({
  auth: authSlice,
  transactions: transactionsSlice,
});

export default rootReducer;
