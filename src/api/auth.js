import axios from 'axios';

export const instance = axios.create({
  baseURL: 'https://kapusta-server.herokuapp.com/',
});

export const axiosSignUp = async userData => {
  const { data } = await instance.post('api/users/signup', userData);
  console.log(data);
  instance.defaults.headers.Authorization = `Bearer ${data.accessToken}`;
  return data;
};

export const axiosLogIn = async userData => {
  const { data } = await instance.post('api/users/login', userData);
  console.log(data);
  instance.defaults.headers.Authorization = `Bearer ${data.accessToken}`;
  return data;
};
