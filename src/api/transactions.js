import instance from './auth';

export const axiosGetTransactionsAllByDate = async ({ accessToken, reqDate }) => {
  instance.defaults.headers.Authorization = `Bearer ${accessToken}`;
  const { data } = await instance.post('api/transitions/reqData', reqDate);
  return data;
};
