import { combineReducers } from '@reduxjs/toolkit';

import authSlice from 'redux/auth/auth-slice';
import transactionsSlice from './transactions/transactions-slice';

const rootReducer = combineReducers({ auth: authSlice, transactions: transactionsSlice });

export default rootReducer;
