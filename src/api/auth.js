import axios from 'axios';

export const instance = axios.create({
  baseURL: 'http://localhost:3000',
});

export const axiosSignUp = async userData => {
  const { data } = await instance.post('api/users/register', userData);
  instance.defaults.headers.Authorization = `Bearer ${data.accessToken}`;
  return data;
};

export const axiosLogIn = async userData => {
  const { data } = await instance.post('api/users/login', userData);
  instance.defaults.headers.Authorization = `Bearer ${data.accessToken}`;
  return data;
};
