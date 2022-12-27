import instance from './auth';

// Add balance
export const axiosUserAddBalance = async userData => {
  const { data } = await instance.post('api/balances/update', userData);
  return data;
};

export const axiosGetDetailsIncome = async userData => {
  const { data } = await instance.post('api/transitions/report/category/income/dateil', userData);
  return data;
}

export const axiosGetDetailsExpenses = async userData => {
  const { data } = await instance.post('api/transitions/report/category/expenses/dateil', userData);
  return data;
}
// Delete user
export const axiosUserDelete = async userData => {
  const { data } = await instance.delete(`api/users/${userData}`);
  return data;
};

// Delete avatar
export const axiosUserDeleteAvatar = async userData => {
  const { data } = await instance.patch('api/avatars/update', userData);
  return data;
};
