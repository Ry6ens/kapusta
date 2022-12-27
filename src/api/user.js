import instance from './auth';

// Add balance
export const axiosUserAddBalance = async userData => {
  const { data } = await instance.post('api/balances/update', userData);
  return data;
};

// Delete user
export const axiosUserDelete = async userData => {
  const { data } = await instance.delete(`api/users/${userData}`);
  return data;
};
