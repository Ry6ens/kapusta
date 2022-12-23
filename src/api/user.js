import instance from './auth';

export const axiosUserAddBalance = async userData => {
  const { data } = await instance.post('api/balances/update', userData);
  return data;
};

export const axiosUserBalance = async () => {
  const { data } = await instance.get('api/balances/');
  return data;
};
