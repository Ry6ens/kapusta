import instance from './auth';

export const axiosGetTransactionsAllByDate = async userData => {
  const { data } = await instance.post('api/transitions/reqData', userData);
  return data;
};
