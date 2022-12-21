import axios from 'axios';

export const instance = axios.create({
  baseURL: 'https://kapusta-server.herokuapp.com/',
});

export const axiosSignUp = async userData => {
  const { data } = await instance.post('api/users/signup', userData);
  instance.defaults.headers.Authorization = `Bearer ${data.accessToken}`;
  return data;
};

export const axiosLogIn = async userData => {
  const { data } = await instance.post('api/users/login', userData);
  instance.defaults.headers.Authorization = `Bearer ${data.accessToken}`;
  return data;
};

export const axiosLogOut = async accessToken => {
  console.log(accessToken);
  instance.defaults.headers.Authorization = `Bearer ${accessToken}`;
  console.log(instance.defaults.headers.Authorization);
  const { data } = await instance.get('/auth/logout');
  instance.defaults.headers.Authorization = null;
  return data;
};
