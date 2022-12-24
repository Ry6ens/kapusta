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

// Get expenses transaction
export const axiosGetExpensesTransaction = async () => {
  const { data } = await instance.get('api/transitions/expenses/monthly');
  return data;
};

// Get income transaction
export const axiosGetIncomeTransaction = async () => {
  const { data } = await instance.get('api/transitions/income/monthly');
  return data;
};
