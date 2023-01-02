import axios from 'axios';

const instance = axios.create({
  // baseURL: 'https://kapusta-server.herokuapp.com/',
  baseURL: 'http://localhost:4000/',
});

const token = {
  set(accessToken) {
    instance.defaults.headers.Authorization = `Bearer ${accessToken}`;
  },
  unset() {
    instance.defaults.headers.Authorization = '';
  },
};

export const axiosSignUp = async userData => {
  const { data } = await instance.post('api/auth/signup', userData);
  token.set(data.accessToken);
  return data;
};

export const axiosLogIn = async userData => {
  const { data } = await instance.post('api/auth/login', userData);
  token.set(data.accessToken);

  return data;
};

export const axiosGoogleLogIn = async userData => {
  const { data } = await instance.post('api/users/google/signup', userData);
  token.set(data.accessToken);
  return data;
};

export const axiosLogOut = async accessToken => {
  token.set(accessToken);
  const { data } = await instance.get('api/users/logout');
  token.unset();
  return data;
};

export default instance;
