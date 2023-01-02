import instance from './auth';

// Add balance
export const axiosUserAddBalance = async userData => {
  const { data } = await instance.post('api/balances/update', userData);
  return data;
};

// Update user account
export const axiosUserUpdateAccount = async userData => {
  await instance.patch(
    'api/users/update',
    { avatar: userData.avatarIMG },
    {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    }
  );
  const { data } = await instance.patch('api/users/update', userData);
  return data;
};

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

export const UserGetBalance = async userData => {
  const { data } = await instance.post('api/transitions/report/category', userData);
  return data;
};

export const UserGetExpenses = async userData => {
  const { data } = await instance.post(
    'api/transitions/report/category/expenses',
    userData
  );
  return data;
};
