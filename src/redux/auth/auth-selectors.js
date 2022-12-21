export const getLogin = ({ auth }) => auth.isLogin;
export const getErrorSignUp = ({ auth }) => auth.error;

export const getNewUserEmail = ({ auth }) => auth.newUser.user?.email;
