import instance from './auth';

// Get transacations by month
export const axiosGetTransactionsByMonth = async userData => {
  console.log(userData);
  const { data } = await instance.get('api/transitions/timeLine', userData);
  return data;
};

//Add transaction
export const axiosAddTransaction = async userData => {
  console.log(userData);
  const { data } = await instance.post('api/transitions', userData);
  return data;
};
