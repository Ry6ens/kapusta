import instance from './auth';

// Get transacations by month
export const axiosGetTransactionsByMonth = async userData => {
  const { data } = await instance.post('api/transitions/timeLine', userData);
  return data;
};

// Add transaction
export const axiosAddTransaction = async userData => {
  const { data } = await instance.post('api/transitions', userData);
  return data;
};

// Delete transaction
export const axiosDeleteTransaction = async userData => {
  const { data } = await instance.delete(`api/transitions/delete/${userData}`);
  return data;
};

// Get expenses transaction by date
export const axiosGetExpensesTransByDate = async userData => {
  const { data } = await instance.post('api/transitions/expenses/date', userData);
  console.log(data);
  return data;
};

// Get income transaction by date
export const axiosGetIncomeTransByDate = async userData => {
  const { data } = await instance.post('api/transitions/income/date', userData);
  return data;
};
