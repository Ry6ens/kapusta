export const getLogin = ({ auth }) => auth.isLogin;
export const getErrorSignUp = ({ auth }) => auth.error;
export const getErrorLogIn = ({ auth }) => auth.error;
export const getAccessToken = ({ auth }) => auth.accessToken;

export const getUser = ({ auth }) => auth.user;
export const getNewUser = ({ auth }) => auth.user.newUser;
export const getRegNewUser = ({ auth }) => auth.newUser;
