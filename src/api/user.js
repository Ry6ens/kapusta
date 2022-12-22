import instance from './auth';

export const axiosUserAddBalance = async userData => {
  const { data } = await instance.post('api/balances/update', userData);
  return data;
};

export const axiosUserBalance = async userData => {
  const { data } = await instance.post('api/balances/', userData);
  return data;
};
