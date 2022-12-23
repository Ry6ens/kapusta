export const getLogin = ({ auth }) => auth.isLogin;
export const getErrorSignUp = ({ auth }) => auth.error;
export const getErrorLogIn = ({ auth }) => auth.error;
export const getUser = ({ auth }) => auth.user;
export const getAccessToken = ({ auth }) => auth.accessToken;

export const getNewUser = ({ auth }) => auth.user.newUser;
